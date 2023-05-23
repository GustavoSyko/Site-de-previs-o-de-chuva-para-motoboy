function checar() {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=f3535208&user_ip=remote`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const chuva = data.results.forecast[0].rain_probability;
            switch (data.results.forecast[0].rain_probability) {

                case 0:
                    document.body.style.backgroundImage = "url(https://kaupalph.sirv.com/Imagens/imagens/03%20raios-chuva-clima-ao-vivo-tempo-alerta-previsao-1677503593653.jpg)"
                        document.getElementById("texto").innerHTML = `Não, a probabilidade de chuva é ${chuva} %`
                    break;


                case 25:
                    document.body.style.backgroundImage =
                        document.getElementById("texto").innerHTML = "Não"

                    break;


                case 50:
                    document.body.style.backgroundImage =
                        document.getElementById("texto").innerHTML = "Não"


                    break;


                case 75:
                    document.body.style.backgroundImage =
                        document.getElementById("texto").innerHTML = "Não"

                    break;


                case 100:
                    document.body.style.backgroundImage =
                        document.getElementById("texto").innerHTML = "Não"

                    break;

                default:

                    break;
            }
        })
        .catch(error => {
            // Trate qualquer erro que possa ocorrer
            console.error('Ocorreu um erro ao tentar obter os dados da API:', error);
        });
}
