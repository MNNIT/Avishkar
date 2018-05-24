const express = require('express');
const server = express();
const next = require('next');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = nex.getRequestHandler();
app.prepare()
    .then(() => {
        server.get('*', (req, res) => {
            return handle(req, res);
        })
        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready ss on http://localhost:3000');
        })
    })
    .catch((err) => {
        console.error(err.stack);
        process.exit(1);
    })
