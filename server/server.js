const express = require('express');
const app = express();

const fs = require('fs');

const PRODUCT_URL = './server/db/dataProduct.json';
const CART_URL = './server/db/userCart.json';

app.listen(3500, () => {
   console.log('Server Started!');
});

app.use(express.json());
app.use('/', express.static('./public'));


app.get('/api/getProducts', (req, res) => {
   fs.readFile(PRODUCT_URL,'utf8', (err, data) =>{
      if(err) {
         res.send({
            result: 0,
            err,
         })
      } else {
         res.send(data);
      }
   })
});



app.get('/api/getCart', (reg, res) => {
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

app.post('/api/postProduct', (req, res) => {
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

app.put('/api/postProduct/:id', (req, res) => {
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

app.delete('/api/deleteProduct/:id', (req, res) => {
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
})