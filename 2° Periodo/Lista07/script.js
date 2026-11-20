const regexes = {
    'a': /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/,
    'b': /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    'c': /^(IFTM|iftm)-\d{3}\/\d{3}-[A-Za-z0-9]{2}$/,
    'd': /^[Mm][Tt]-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/,
    'e': /^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/,
    'f': /^[Mm]\s?[Tt]-\d{2}\.\d{3}-[Ii]\s?[Ff]\s?[Tt]\s?[Mm]$/,
    'g': /^IFTM campus Uberlândia( Centro)?$/,
    'h': /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/,
    'i': /^\(\d{2,3}\)\s?\d{4,5}-\d{4}$/,
    'j': /^(1[,.][3-9]\d*|2[,.][0-4]\d*|2[,.]50*)$/,
    'k': /^R\$(0|[1-9]\d{0,2}(\.\d{3}){0,3})(,\d{1,2})?$/,
    'l': /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-9]{2}$/
};

function validar(id) {
    const input = document.getElementById(id).value.trim();
    const regex = regexes[id];
    const resSpan = document.getElementById('res_' + id);
    
    if (regex.test(input)) {
        resSpan.textContent = '✔️ Válido';
        resSpan.className = 'valid';
    } else {
        resSpan.textContent = '❌ Inválido';
        resSpan.className = 'invalid';
    }
}
