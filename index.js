function checar() {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=f3535208&user_ip=remote`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const chuva = data.results.forecast[0].rain_probability;
            if (chuva <= 10) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/pexels-cottonbro-studio-4605197-960x506-25fps.mp4";
                document.getElementById("videofundo").load();
                document.getElementById("texto").innerHTML = `Não, a probabilidade de chuva é de ${chuva} %.`
            }

            else if (chuva > 10 && chuva <= 30) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/30%20a%2050.mp4";
                document.getElementById("videofundo").load();
                document.getElementById("texto").innerHTML = `Poucas chances,a probabilidade é de ${chuva} % .`
            }

            else if (chuva > 30 && chuva <= 50) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/30%20a%2050.mp4";
                document.getElementById("videofundo").load();
                document.getElementById("texto").innerHTML = `Leva a capa! A probabilidade é de ${chuva} %.`
            }

            else if (chuva > 50 && chuva <= 80) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/cidade%20noite%20chuva%20(2).mp4";
                document.getElementById("videofundo").load();
                document.getElementById("texto").innerHTML = `É meu amigo...acho que deu ruim. ${chuva} %.`
            }

            else if (chuva > 80 && chuva <= 100) {
                document.getElementById("fontevideo").src ="https://kaupalph.sirv.com/cortados/pexels-the-element-2657691-960x540-30fps.mp4";
                document.getElementById("videofundo").load();
                document.getElementById("texto").innerHTML = ""
            }
        })

        .catch(error => {
            // Trate qualquer erro que possa ocorrer
            console.error('Ocorreu um erro ao tentar obter os dados da API:', error);
        });
}
