var moltin = require('moltin')({
    publicId: 'McSU5Se3OrwPcgKGn3dDJ7wpIVUpzyO88ynSPgyj1G',
    secretKey: 'bz4RCKqq3ec6ZDYXkh4yMSQ80hA9rI27OqIsiwcmDW'
});

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/status/:orderId', function (req, res) {
    moltin.Authenticate(function () {
        moltin.Order.Get(req.params.orderId, function (order) {
			console.log(order);
			res.send({"status": order.status.data.key});
        }, function (error, msg) {
			res.send({"status": "invalid"});
        });
    });
});

app.get('/payment/:orderId', function (req, res) {
    moltin.Authenticate(function () {
        moltin.Order.Update(req.params.orderId, {
            status: "paid"
        }, function (order) {
 
        }, function (error, msg) {

        });
    });
});

app.listen(7000);

