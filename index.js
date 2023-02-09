require('dotenv').config();
const path = require('path')
const http = require('http');
const createHandler = require('github-webhook-handler');
const shell = require('shelljs');

const { SECRET, REPO_NAME } = process.env;
const PORT = process.env.PORT || 6767;
const HOST = process.env.HOST || '127.0.0.1';

var handler = createHandler({ path: '/webhook', secret: SECRET })

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(PORT, HOST);

handler.on('error', function (err) {
    console.log(err);
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    const repository = event.payload.repository.name;
    const action = event.payload.action;

    console.log('Received a  for %s to %s', repository, action);
    // the action of closed on pull_request event means either it is merged or declined
    if (repository === REPO_NAME && action === 'closed') {
        shell.exec(path.resolve(__dirname, 'deploy.sh'));
    }
});