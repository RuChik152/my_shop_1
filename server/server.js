const express = require('express');
const app = express();
const PRODUCT_URL = './server/db/dataProduct.json';
const fs = require('fs');



const cart = require('./cartRoute');



app.listen(3500, () => {
   console.log('Server Started!');
});

app.use(express.json());
app.use('/', express.static('./public'));
app.use('/api/cart', cart);


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

