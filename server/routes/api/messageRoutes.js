const express = require('express');
const router = express.Router();
const Message = require('../../models/Message'); // Załaduj model wiadomości

// Endpoint do obsługi formularza
router.post('/send-message', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        // Tworzenie nowej wiadomości w bazie danych
        const newMessage = new Message({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        await newMessage.save();
        res.status(201).send({ message: 'Wiadomość zapisana pomyślnie!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ error: 'Wystąpił błąd podczas zapisywania wiadomości' });
    }
});

module.exports = router;
