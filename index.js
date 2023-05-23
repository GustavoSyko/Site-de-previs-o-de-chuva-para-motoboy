function checar() {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=f3535208&user_ip=remote`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const chuva = data.results.forecast[0].rain_probability;
            if (chuva <= 10) {
                document.body.style.backgroundImage = "url(https://kaupalph.sirv.com/Imagens/imagens/verao-calor-vista-skyline-copan-1.webp)";
                document.getElementById("texto").innerHTML = `Não, a probabilidade de chuva é de ${chuva} %.`
            }

            else if (chuva > 10 && chuva <= 30) {
                document.body.style.backgroundImage = "url(https://kaupalph.sirv.com/Imagens/imagens/sol%20entre%20nuvens.jpg)"
                document.getElementById("texto").innerHTML = `Poucas chances,a probabilidade é de ${chuva} % .`
            }

            else if (chuva > 30 && chuva <= 50) {
                document.body.style.backgroundImage = "url()"
                document.getElementById("texto").innerHTML = `Leva a capa! A probabilidade é de ${chuva} %.`
            }

            else if (chuva > 50 && chuva <= 80) {
                document.body.style.backgroundImage = "url()"
                document.getElementById("texto").innerHTML = "Não"
            }

            else if (chuva > 80 && chuva <= 100) {
                document.body.style.backgroundImage = "url()"
                document.getElementById("texto").innerHTML = "Não"
            }})

        .catch (error => {
    // Trate qualquer erro que possa ocorrer
    console.error('Ocorreu um erro ao tentar obter os dados da API:', error);
});
}
