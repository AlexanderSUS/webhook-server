#!/bin/bash
echo "Deploying..."

cd /var/www/repo-name \
&& git checkout main \
&& git pull \
&& echo 'Installing npm packages...' \
&& npm ci \
&& echo 'Done!' \
&& echo 'Building...' \
&& npm run build \
&& echo 'Done!.' \
&& echo "Deployed successfully"