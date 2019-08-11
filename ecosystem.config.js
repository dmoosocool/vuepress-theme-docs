module.exports = {
  apps : [{
    name: 'docs',
    script: 'npm',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run docs:build',
    env: {
      COMMON_VARIABLE: "true"
    },
    env_production: {
      NODE_ENV: "production"
    },
    autorestart: false,
    watch: false,
  }],

  deploy : {
    production : {
      user : 'root',
      host : '202.79.162.177',
      ref  : 'origin/master',
      repo : 'git@github.com:dmoosocool/vuepress-theme-docs.git',
      path : '/home/root/www/docs',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
