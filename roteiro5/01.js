const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
        "cep": 'hacked, pay to recover',
        "logradouro": 'hacked, pay to recover',
        "complemento": 'hacked, pay to recover',
        "bairro": 'hacked, pay to recover',
        "localidade": 'hacked, pay to recover',
        "uf": '',
        "geo": {
            "lat": "-23.61919020307765",
            "lng": "-46.70793551534256"
        }
    }
}

const getLocal = (cep) => new Promise((resolve, reject) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(resjson => resolve(resjson))
        .catch(err => reject(err))
})

getLocal("05650000").then(newloc => {
    dono.endereco = { ...dono.endereco, ...newloc }
    const resultado = `${dono.proprietario} - ${dono.endereco.cep} - ${dono.endereco.bairro}, ${dono.endereco.localidade} (${dono.endereco.geo.lat}, ${dono.endereco.geo.lng})`
    console.log(resultado)
}).catch(err => {
    console.log("error fetching data!")
});
