function checar() {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=f3535208&user_ip=remote`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const chuva = data.results.forecast[0].rain_probability;
            //Se a porcentagem de chuva for menor ou igual a 10, Dê a seguinte resposta e coloque tal video de fundo
            if (chuva <= 10) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/sky_-_52170%20(1080p).mp4";
                document.getElementById("videofundo").load();
                document.getElementById("container").style.backgroundImage = "url(https://kaupalph.sirv.com/Imagens/imagens/a%20primeira%20e%20pra%20baixo.jpeg?w=300&h=220&scale.option=ignore)";
                document.getElementById("resultado").innerHTML = `Não, a probabilidade de chuva é de ${chuva} %.`
                document.getElementById("texto").innerHTML = ""
            }

            else if (chuva > 10 && chuva <= 30) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/30%20a%2050.mp4";
                document.getElementById("videofundo").load();
                document.getElementById("resultado").innerHTML = `Poucas chances,a probabilidade é de ${chuva} % .`
                document.getElementById("texto").innerHTML = ""
            }

            else if (chuva > 30 && chuva <= 60) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/132791%20(720p).mp4  ";
                document.getElementById("videofundo").load();
                document.getElementById("resultado").innerHTML = `Leva a capa! A probabilidade é de ${chuva} %.`
                document.getElementById("texto").innerHTML = ""
            }

            else if (chuva > 60 && chuva <= 80) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/cidade%20noite%20chuva%20(2).mp4";
                document.getElementById("videofundo").load();
                document.getElementById("resultado").innerHTML = `É meu amigo...acho que deu ruim. ${chuva} %.`
                document.getElementById("texto").innerHTML = ""
            }

            else if (chuva > 80 && chuva <= 100) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/pexels-the-element-2657691-960x540-30fps.mp4";
                document.getElementById("videofundo").load();
                document.getElementById("resultado").innerHTML = ""
                document.getElementById("texto").innerHTML = ""
            }
        })

        .catch(error => {
            // Trate qualquer erro que possa ocorrer
            console.error('Ocorreu um erro ao tentar obter os dados da API:', error);
        });
}
