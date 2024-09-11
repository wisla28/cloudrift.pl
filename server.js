// Importowanie express
const express = require('express');
const path = require('path');

// Tworzenie aplikacji express
const app = express();

// Konfiguracja statycznych plików (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Serwowanie strony startowej
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ustawienie portu, na którym aplikacja będzie działać
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
