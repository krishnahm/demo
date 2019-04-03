// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const DIST_FOLDER = path.join(process.cwd(), 'dist');
const template = fs.readFileSync(path.join(DIST_FOLDER, 'browser', 'index.html')).toString();

const win = domino.createWindow(template);
global['window'] = win;
global['document'] = win.document;
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { ValueProvider } from '@angular/core';
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();



// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
// var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
// app.use(redirectToHTTPS([/localhost:(\d{2})/], [/\/insecure/], 301))

var http = require('http');

// var https = require('https');
// var privateKey = fs.readFileSync('./polarityte_com.key', 'utf8');
// var certificate = fs.readFileSync('./star_polarityte_com.pem', 'utf8');

// var credentials = { key: privateKey, cert: certificate };
var httpServer = http.createServer(app);

// var httpsServer = https.createServer(credentials, app);


// app.all(/.*/, function (req, res, next) {
//   var host = req.header("host");
//   if (host.match(/^www\..*/i)) {
//     next();
//   } else {
//     res.redirect(301, "https://www." + host);
//   }
// });

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    // DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP),
      <ValueProvider>{
        provide: REQUEST,
        useValue: options.req
      },
      <ValueProvider>{
        provide: RESPONSE,
        useValue: options.req.res,
      },
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
httpServer.listen(80);
// httpsServer.listen(443);