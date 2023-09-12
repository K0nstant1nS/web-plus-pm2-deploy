require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/K0nstant1nS/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': `cd ${DEPLOY_PATH}/source/frontend && npm i && npm run build`
  },
}
}
