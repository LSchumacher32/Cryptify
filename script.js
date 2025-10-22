// Initialwerte
let key = 7;
let selectedLetter = 'A';
let selectedNumber = '0';

// Slider aktualisieren
function updateKeyValue(val) {
    key = parseInt(val);
    document.getElementById('keyValue').textContent = val;
}

// Buchstaben-Buttons generieren
const letterButtonsDiv = document.getElementById('letterButtons');
for (let i = 65; i <= 90; i++) {
    const btn = document.createElement('button');
    btn.textContent = String.fromCharCode(i);
    btn.className = 'select-btn' + (i === 65 ? ' selected' : '');
    btn.onclick = function() {
        document.querySelectorAll('#letterButtons .select-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedLetter = btn.textContent;
    };
    letterButtonsDiv.appendChild(btn);
}

// Zahlen-Buttons generieren
const numberButtonsDiv = document.getElementById('numberButtons');
for (let i = 0; i <= 9; i++) {
    const btn = document.createElement('button');
    btn.textContent = i.toString();
    btn.className = 'select-btn' + (i === 0 ? ' selected' : '');
    btn.onclick = function() {
        document.querySelectorAll('#numberButtons .select-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedNumber = btn.textContent;
    };
    numberButtonsDiv.appendChild(btn);
}

// Erweiterte Verschlüsselung: Schlüssel, Buchstabe und Zahl beeinflussen die Verschiebung
function getCombinedKey() {
    // Buchstabe: A=1, B=2, ..., Z=26
    let letterVal = selectedLetter.charCodeAt(0) - 64;
    // Zahl: 0-9
    let numberVal = parseInt(selectedNumber);
    // Kombinierter Schlüssel
    return key + letterVal + numberVal;
}

function encodeText() {
    const text = document.getElementById('inputText').value;
    let encoded = '';
    let combinedKey = getCombinedKey();
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        encoded += String.fromCharCode(charCode + combinedKey);
    }
    document.getElementById('output').textContent = encoded;
}

function decodeText() {
    const text = document.getElementById('inputText').value;
    let decoded = '';
    let combinedKey = getCombinedKey();
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        decoded += String.fromCharCode(charCode - combinedKey);
    }
    document.getElementById('output').textContent = decoded;
}
