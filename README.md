## WEBHOOK-SEVER

Allow to deploy your github repo automatically on github events with help of github webhooks

### Install and run

1. Clone this repo 

2. Go to repos folder

3. Install dependencies
```bash
npm install
```

4. Give to file deploy.sh execution permission
```bash
chmod +x ./deploy_stage
```

5. Go to your github repo you want automatically deploy and
    - find Settings => Webhooks => add webhook 
    - set your payload url, it should be https
    - choose conte type application/json
    - set secret that you later put in .evn file
    - choose "Let me select individual events."
    - mark checkbox at "Pull requests"

6. Rename env.example to .evn and fill with your data,
    use secret you use when set up github webhook

7. Run node index.js or use pm2 `https://pm2.keymetrics.io/docs/usage/quick-start/`



