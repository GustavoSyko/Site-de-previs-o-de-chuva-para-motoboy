function checar() {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=f3535208&user_ip=remote`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const chuva = data.results.forecast[0].rain_probability;
            if (chuva <= 10) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/sky_-_52170%20(1080p).mp4";
                document.getElementById("videofundo").load();
                document.getElementById("texto").innerHTML = `Não, a probabilidade de chuva é de ${chuva} %.`
            }

            else if (chuva > 10 && chuva <= 30) {
                document.body.style.backgroundImage = "url(https://kaupalph.sirv.com/Imagens/imagens/sol%20entre%20nuvens.jpg)"
                document.getElementById("texto").innerHTML = `Poucas chances,a probabilidade é de ${chuva} % .`
            }

            else if (chuva > 30 && chuva <= 50) {
                document.body.style.backgroundImage = "url(https://kaupalph.sirv.com/Imagens/imagens/um-casal-com-capa-de-chuva-em-uma-moto-durante-fortes-chuvas-foco-seletivo-e-composicao-de-profundidade-de-campo-muito-rasa_154224-702.avif)"
                document.getElementById("texto").innerHTML = `Leva a capa! A probabilidade é de ${chuva} %.`
            }

            else if (chuva > 50 && chuva <= 80) {
                document.body.style.backgroundImage = "url()"
                document.getElementById("texto").innerHTML = `É meu amigo...acho que deu ruim. ${chuva} %.`
            }

            else if (chuva > 80 && chuva <= 100) {
                document.body.style.backgroundImage = "url()"
                document.getElementById("texto").innerHTML = ""
            }
        })

        .catch(error => {
            // Trate qualquer erro que possa ocorrer
            console.error('Ocorreu um erro ao tentar obter os dados da API:', error);
        });
}
