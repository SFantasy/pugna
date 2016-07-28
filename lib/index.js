'use strict';

/**
 * Module dependencies
 */

const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();

module.exports = class Application extends Koa {

    constructor () {
        super();

        this.modules = [];
    }

    loadModules (app, dir) {
      // Reading modules
      console.info('Loading modules...');

      fs.readdir(path.join(dir, 'modules'), (err, modules) => {
        if (!err) {
          console.info('Loading routers...');

          modules.map(module => {
            try {
              router.use(`/${module}`, require(path.join(dir, `modules/${module}/routes`)).routes());
              app.use(router.routes());
            } catch (e) {
              console.error(`Loading ${module}'s router errored! Check your module: \n ${e.stack}`);
              process.exit(0);
            }
          });
        }
      });
    }

};
