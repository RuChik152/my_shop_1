const express = require('express');
const fs = require('fs');
const router = express.Router();

const CART_URL = './server/db/userCart.json';


router.get('/', (reg, res) => {
    fs.readFile(CART_URL, 'utf8', (err, data) => {
        if(err){
            res.send({
                result: 0,
                err,
            })
        } else {
            res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    fs.readFile(CART_URL, 'utf8', (err, data) => {
        if(err) {
            res.send({
                result: 0,
                err,
            })
        } else  {
            const cart = JSON.parse(data);
            cart.push(req.body);

            fs.writeFile(CART_URL, JSON.stringify(cart), {encoding: "utf8"}, (err) => {
                if(err) {
                    res.send({
                        result: 0,
                        err,
                    });
                } else  {
                    res.send({
                        result: 1
                    });
                }
            });
        }
    })
});

router.put('/:id', (req, res) => {
    fs.readFile(CART_URL, 'utf8', (err, data) => {
        if(err) {
            res.send({
                result: 0,
                err,
            });
        } else {
            const cart = JSON.parse(data);
            const change = cart.find((good) => {
                return good.id === +req.params.id
            });

            change.quantity += req.body.quantity;

            fs.writeFile(CART_URL, JSON.stringify(cart), 'utf8', (err, data) => {
                if(err) {
                    res.send({
                        result: 0,
                        err,
                    })
                } else {
                    res.send({
                        result: 1,
                    })
                }
            })

        }
    })
});

router.delete('/:id', (req, res) => {
    fs.readFile(CART_URL, 'utf8', (err, data) => {
        if(err) {
            res.send({
                result: 0,
                err,
            });
        } else {
            let cart = JSON.parse(data);
            const newContents = [];

            cart.forEach((good) => {
                if(good.id === +req.params.id) {
                    if(good.quantity !== 1) {
                        good.quantity -= 1;
                        newContents.push(good);
                    }
                } else {
                    newContents.push(good);
                }
            })
            cart = newContents;

            fs.writeFile(CART_URL, JSON.stringify(cart), 'utf8', (err, data) => {
                if(err) {
                    res.send({
                        result: 0,
                        err,
                    });
                } else {
                    res.send({
                        result: 1,
                        usercart: cart
                    })
                };
            });
        }
    })
});

module.exports = router;