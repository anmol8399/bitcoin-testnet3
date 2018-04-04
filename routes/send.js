const { privKey, pubKey }   = require('../keys.json');

const express   = require('express');
const router    = express.Router();
const request   = require('request');

const bitcoin   = require('bitcoinjs-lib');
const bigi      = require('bigi');
const buffer    = require('buffer');
const keys      = new bitcoin.ECPair(bigi.fromHex(privKey));

const data = require('../creds.json');

router.post('/', (req, res) => {
    const newtx = {
        inputs: [{addresses: [data[0].addr]}],
        outputs: [{addresses: [data[1].addr], value: parseInt(req.body.amount)}]
    };

    request.post({
        url: 'https://api.blockcypher.com/v1/bcy/test/txs/new',
        form: JSON.stringify(newtx)
    }, (err, resp, body) => {
        let tmptx = JSON.parse(body);
        tmptx.pubkeys = [];
        tmptx.signatures = tmptx.tosign.map((tosign, n) => {
            tmptx.pubkeys.push(keys.getPublicKeyBuffer().toString('hex'));
            return keys.sign(new buffer.Buffer(tosign, 'hex')).toDER().toString('hex');
        });

        request.post({
            url: 'https://api.blockcypher.com/v1/bcy/test/txs/send',
            form: JSON.stringify(tmptx)
        }, (err, resp, body) => {});

        const sendtx = {
            tx: tmptx.tx,
            tosign: tmptx.tosign,
            signatures: tmptx.signatures,
            pubkeys: [pubKey]
        };

        request.post({
            url: 'https://api.blockcypher.com/v1/bcy/test/txs/send',
            form: JSON.stringify(sendtx)
        }, (err, resp, body) => {
            if (err) {
                console.log(err)
            } else {
                console.log((body))
                console.log(`A total of ${JSON.parse(body).tx.outputs[0].value} coins was sent`);
                res.redirect('/send');
            }
        })
    })
});

module.exports = router;
