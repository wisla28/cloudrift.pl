const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const messageRoutes = require('./server/routes/api/messageRoutes'); // Import routera

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/db')(app)

// Ustawienie EJS jako silnika widoków
app.set('view engine', 'ejs');

// Udostępnianie statycznych plików
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./server/routes/index'))
app.use('/services', require('./server/routes/index'))
app.use('/api', messageRoutes);  // Dodaj /api prefix do ścieżki


// Główna strona (index)
// app.get('/', (req, res) => {
//     res.render('pages/index.ejs', {
//         title: 'Strona Startowa'
//     });
// });

// Nasłuch na porcie 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
