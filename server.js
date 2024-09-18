const express = require('express');
const path = require('path');
const app = express();

// Ustawienie EJS jako silnika widoków
app.set('view engine', 'ejs');

// Udostępnianie statycznych plików
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./server/routes/index'))

app.use('/services', require('./server/routes/index'))


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
