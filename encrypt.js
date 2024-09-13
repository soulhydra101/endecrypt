function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str
        .toLowerCase()
        .split('')
        .map(char => {
            if (alphabet.indexOf(char) === -1) return char;
            let newIndex = (alphabet.indexOf(char) + shift) % 26;
            if (newIndex < 0) newIndex += 26;
            return alphabet[newIndex];
        })
        .join('');
}

function encryptText() {
    const text = document.getElementById('encrypt-text').value;
    const key = parseInt(document.getElementById('encrypt-key').value) || 4;
    const encrypted = caesarCipher(text, key);
    document.getElementById('encrypted-output').textContent = encrypted;
}
