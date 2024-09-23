document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Zapobiega domyślnemu przeładowaniu strony

    // Pobieramy wartości pól formularza
    const formData = {
        firstName: document.getElementById('grid-first-name').value,
        lastName: document.getElementById('grid-last-name').value,
        email: document.getElementById('grid-email').value,
        phone: document.getElementById('grid-phone').value,
        message: document.getElementById('grid-message').value
    };

    try {
        // Wysyłamy dane formularza na backend
        const response = await fetch('https://cloudrift.pl/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Wiadomość została wysłana pomyślnie!');
        } else {
            alert(`Błąd: ${result.error}`);
        }
    } catch (error) {
        console.error('Błąd podczas wysyłania danych:', error);
        alert('Błąd podczas wysyłania wiadomości');
    }
});
