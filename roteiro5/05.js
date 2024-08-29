const processarNumeros = (numeros, callbackFunction) => {
    const pares = numeros.filter(num => num % 2 == 0)
    return pares.map(num => callbackFunction(num))
}
