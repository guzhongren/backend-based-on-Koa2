module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'koatest',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    {
      name      : 'WEB',
      script    : 'web.js'
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'c4',
      host : '47.95.247.139',
      ref  : 'origin/master',
      repo : 'git@github.com:guzhongren/backend-based-on-Koa2.git',
      path : '/home/c4/depoly',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'c4',
      host : '47.95.247.139',
      ref  : 'origin/master',
      repo : 'git@github.com:guzhongren/backend-based-on-Koa2.git',
      path : '/home/c4/depoly',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
