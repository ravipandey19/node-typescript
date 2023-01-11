import express, { Request, Response } from 'express';
require("./config");

const _db = require('./schema');

const app = express();
app.use(express.json());

app.get('/api/getData', async (req: Request, res: Response) => {
    try {
        let r: [] = await _db.find();
        res.send(r);
    } catch (e) {
        console.error(e);
        res.send(e.message);
    }
});

app.post('/api/insertData', async (req: Request, res: Response) => {
    try {
        let _d: any = new _db(req.body);
        const r: {} = await _d.save();
        res.send(r);
    } catch (e) {
        console.error(e.message);
        res.send(e.message);
    }
});

const _server = app.listen(8080);
module.exports = _server;