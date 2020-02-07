const { Router } = require('express');
const router = Router();
const Course = require('../models/course');

router.get('/', async (req, res) => {

    let courses = await Course.getAll();

    res.render('courses', {
        title: 'Courses List',
        isCourses: true,
        courses
    });
})

//dynamic routes for every course

router.get('/:id', async (req,res) => {
    let course = await Course.getById(req.params.id);
    res.render('course', {
        layout: 'empty', // if we want to open new layout in our app(without this field we will open with partials)
        title: `Course ${course.title}`,
       course
    })
})

module.exports = router;