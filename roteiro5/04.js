const colocarTodasLetrasEmMaiusculoEm500ms = async frase => {
    await new Promise(resolve => setTimeout(resolve, 500))
    if (typeof frase === "string") {
        return frase.toUpperCase()
    } else {
        throw new Error("expected string param")
    }
}

const inverteTodasLetras = frase => frase.split("").reverse().join("")
