const express = require('express');

const booksRoute = express.Router();

let catalog = [
    {id: 1, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", published: new Date(), quantity: 100, price: 1500},
    {id: 2, title: "Think and Grow Rich", author: "Norman Vincent Pearl", published: new Date(), quantity: 20, price: 2500},
    {id: 3, title: "Eat That Frog", author: "Brian Tracy", published: new Date(), quuantity: 10, price: 1300}
]

rough