document.getElementById('kontaktivorm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Hangi vormi väärtused
    var nimi = document.getElementById('nimi').value;
    var email = document.getElementById('email').value;
    var sonum = document.getElementById('sonum').value;

    // Lihtne valideerimine
    if (nimi === '' || email === '' || sonum === '') {
        alert('Palun täida kõik väljad.');
        return;
    }

    // Kuvab vastuse
    document.getElementById('vastus').innerHTML = '<p>Tänan, ' + nimi + '! Sinu sõnum on saadetud.</p>';

    // Tühjendab vormi
    document.getElementById('kontaktivorm').reset();
});

// This is the key you copied from step 2.
const ACCESS_KEY = 'access key'
const API_URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}`;

/**
 * @param {string} query - The query used to find relevant images.
 */
const getImages = async (query) => {
    const response = await fetch(`${API_URL}&query=${query}`);
    const json = await response.json();

    return json;
};