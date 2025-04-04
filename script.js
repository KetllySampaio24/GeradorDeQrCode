const input = document.querySelector('#input');
const button = document.querySelector('#btnvalue');
const qrcode = document.querySelector('#qrcode');

let valueDefault;

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

button.addEventListener('click', () => {
    let qrcodeValue = input.value.trim();

    if (!qrcodeValue || !isValidUrl(qrcodeValue)) {
        alert('Por favor, insira uma URL válida.');
        return;
    }

    if (qrcodeValue === valueDefault) return;

    valueDefault = qrcodeValue;
    button.innerText = 'Gerando QR Code...';

    qrcode.style.display = 'none';

    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(valueDefault)}`;

    qrcode.onload = () => {
        qrcode.style.display = 'block';
        button.innerText = 'Gerar QRCode';
    };

    qrcode.onerror = () => {
        console.log('Erro ao carregar o QR Code');
        button.innerText = 'Erro ao gerar QRCode';
    };
});
