const express = require('express');

const router = express.Router();  // to get the router from express

// Create data structure for use in project
let data = [
    {id: 1, title: "Create a newsletter", order: 1, completed: true, createdOn: new Date() },
    {id: 2, title: "Take a cup of coffee", order: 2, completed: true, createdOn: new Date() },
    {id: 3, title: "Write a new article", order: 3, completed: true, createdOn: new Date() },
    {id: 4, title: "Walk home after launch", order: 4, completed: false, createdOn: new Date() },
    {id: 5, title: "Have some dinner", order: 5, completed: false, createdOn: new Date() }
]

// route to GET all items
router.get('/', (req, res) => {
    res.status(200).json(data);
} )

// GET /items/:id
router.get('/:id', (req, res) => {
    let found = data.find(item => item.id === parseInt(req.params.id));
    if (found) {
        res.status(200).json(found);
    }
    else {
        res.status(404).json({message: 'Item not found'});
    }
    
})

// Create a new item POST

router.post ('/', (req, res) => {
    // get Item id
    // const itemIds = data.map(item => item.id); // Line 35 and 38 works with line 40

    // get order numbers
    // const orderNumber = data.map(item => item.order);  // Line 38 and 35 works with line 40

    // let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;  // one way to add new item to the array
    let newId = data.length + 1; // another shorter way to add new itm to an array
    let newOrder = data.length + 1;

    // defining the object
    let newItem = {
        id: newId,
        title: req.body.title,
        order: newOrder,
        completed: false,
        createdOn: new Date()
    };
    data.push(newItem);

    res.status(201).json(newItem);
});

// TO update files in the database PUT
router.put('/:id', (req, res) => {
    let found = data.find(item => item.id === parseInt(req.params.id));
    if (found){
        // found.title = req.body.title; // setup  by github copilot
        // res.status(200).json(found);  // setup by github copilot
        let updated = {
            id: found.id,
            title: req.body.title,
            order: req.body.order,
            completed: req.body.completed,
            createdOn: new Date()
        }

        const targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1, updated);
        res.status(200).json(updated);
    }
    else {
        // res.status(404).json({message: 'Item not found'});  //setup by github copilot
        res.status(404).json({message: 'Item not found'});
    }
})


// DELETE item from database
router.delete('/:id', (req, res) => {
    let found = data.find(item => item.id === parseInt(req.params.id));
    if (found) {
        const targetIndex = data.indexOf(found);
        data.splice(targetIndex, 1);
        res.status(204).end();
    }
    else {
        res.status(404).json({message: 'Item not found'});
    }
})

module.exports = router;