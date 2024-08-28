const KEYS = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

const KEYS_REVERSE = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
}

const entrada = document.querySelector('textarea')
const salida = document.getElementById('salida')
const botonEn = document.getElementById('encriptar')
const botonDe = document.getElementById('decencriptar')
const copiaEn = document.getElementById('copiaEntrada')
const copiaSa = document.getElementById('copiaSalida')

const encriptar = (text) => {
    return text
        .split('')
        .map(char => KEYS[char] ? KEYS[char] : char)
        .join('')
}

const decencriptar = (text) => {
    return text
        .replace(/ai|enter|imes|ober|ufat/g, match => KEYS_REVERSE[match])
}

const validateInput = (text) => {
    if (!text) {
        window.alert('Ingrese un texto para encriptar o desencriptar')
        return false
    }

    if (text.split('').some(char => !char.match(/[a-z ]/))) {
        window.alert('Solo se permiten letras minúsculas sin acentos ni caracteres especiales')
        return false
    }

    return true

}

botonEn.addEventListener('click', () => {
    const text = entrada.value

    if (!validateInput(text)) {
        return
    }

    salida.textContent = encriptar(text)
})

botonDe.addEventListener('click', () => {
    const text = entrada.value

    if (!validateInput(text)) {
        return
    }

    salida.textContent = decencriptar(text)
})

const copyToClipboard = (text) => {
    if (text) {
        navigator.clipboard.writeText(text)
        window.alert('Texto copiado en el portapapeles')
    }
}

copiaEn.addEventListener('click', () => {
    copyToClipboard(input.value)
})

copiaSa.addEventListener('click', () => {
    copyToClipboard(output.textContent.trim())
})