const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const homeRouter = require('./routes/home');
const addRouter = require('./routes/add');
const coursesRouter = require('./routes/courses');
const cardRouter = require('./routes/card');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs' //shortname for handlebars
})

app.engine('hbs', hbs.engine);// registration hbs in express

app.set('view engine', 'hbs');// set field view engine
app.set('views','views');// set folder views as layouts folder

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

// app.get('/', (req,res) => {
//     // res.sendFile(path.join(__dirname, 'views', 'index.html')) // without handlebars
//     res.render('index', {
//         title: 'Main page',
//         isMain: true
//     })
// })

app.use('/',homeRouter);

// app.get('/courses', (req,res) => {
//     res.render('courses', {
//         title: 'Courses List',
//         isCourses: true
//     });
// })

app.use('/courses',coursesRouter);

// app.get('/add', (req,res) => {
//     res.render('add', {
//         title: 'Add',
//         isAdd: true
//     });
// })
app.use('/add',addRouter);

app.use('/card', cardRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})