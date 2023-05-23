
const url = `https://api.hgbrasil.com/weather?key=f3535208&user_ip=remote`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        switch (data.results.forecast[0].rain_probability) {

            case  25:
                console.log("Deu certo")
                break;
        }
    })
    .catch(error => {
        // Trate qualquer erro que possa ocorrer
        console.error('Ocorreu um erro ao tentar obter os dados da API:', error);
    });
