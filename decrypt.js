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

function decryptText() {
    const text = document.getElementById('decrypt-text').value;
    const key = parseInt(document.getElementById('decrypt-key').value) || 4;
    const decrypted = caesarCipher(text, -key);
    document.getElementById('decrypted-output').textContent = decrypted;
}
