module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'koatest',
      script: 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'c4',                                                 //也可以useradd另建用户
      host: '47.95.247.139',                                      //服务器地址
      ref: 'origin/master',
      repo: 'git@github.com:guzhongren/backend-based-on-Koa2.git',  // github上的项目地址
      path: '/home/c4/depoly/koaPostgresql',                                     //  服务器上放项目的目录
      'post-deploy': 'yarn install && ./node_modules/.bin/pm2 reload ecosystem.config.js --env production'
    },
    dev: {
      user: 'c4',
      host: '47.95.247.139',
      ref: 'origin/master',
      repo: 'git@github.com:guzhongren/backend-based-on-Koa2.git',
      path: '/home/c4/depoly/koaPostgresql',
      'post-deploy': 'yarn install && ./node_modules/.bin/pm2 reload ecosystem.config.js --env dev',
      env: {
        NODE_ENV: 'dev'
      }
    }
  }
};
