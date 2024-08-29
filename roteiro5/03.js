const colocarTodasLetrasEmMaiusculoEm500ms = frase => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof frase === "string") {
            resolve(frase.toUpperCase())
        } else {
            reject('expected string param')
        }
    }, 500)
})

const inverteTodasLetras = frase => frase.split("").reverse().join("")
