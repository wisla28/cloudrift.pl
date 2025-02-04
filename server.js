const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const breadcrumbsMiddleware = require('./server/middleware/breadcrumbs');


// Middleware
app.use(breadcrumbsMiddleware);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/db')(app)

// Ustawienie EJS jako silnika widoków
app.set('view engine', 'ejs');

// Udostępnianie statycznych plików
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./server/routes/index'));
app.use('/services', require('./server/routes/services/index'))

app.use('/blog', require('./server/routes/blog/blog'))
app.use('/article', require('./server/routes/blog/article'))



const messageRoutes = require('./server/routes/api/messageRoutes'); // Import routera
app.use('/api', messageRoutes);  // Dodaj /api prefix do ścieżki


// Główna strona (index)
// app.get('/', (req, res) => {
//     res.render('pages/index.ejs', {
//         title: 'Strona Startowa'
//     });
// });

// Nasłuch na porcie 3000
const PORT = process.env.PORT || 590;

const server = app.listen(PORT, function() {

    console.log('Listening on PORT 3000')

})
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})