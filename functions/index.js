const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe");
('pk_test_51KbmiJSGGZ7wMQjsJeGsij0eQDTvqX9KHujE723KBAUp7TWGk29Vx4j3OdPp1D4nztK6uU9CdrHndiR89GBTYpQR00OrL7ozyk')

const app=express();
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response)=>response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

  
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api=functions.https.onRequest(app)


