// const path = require('path');

const Course = require('../models/course');
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add',
        isAdd: true
    });

})

router.post('/', async (req,res) => {
    // console.log(req.body); // in req.body we can see form fields

    const course = new Course(req.body.title, req.body.price, req.body.img, req.body.id)
    await course.save();
    res.redirect('/courses');
})

module.exports = router;