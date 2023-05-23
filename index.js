function checar() {
    const url = `https://api.hgbrasil.com/weather?format=json-cors&key=f3535208&user_ip=remote`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            switch (data.results.forecast[0].rain_probability) {

                case 0:
                   
                    window.alert ("Não");
                    break;


                case 25:
                   
                    break;


                case 50:
                    

                    break;


                case 75:
                   
                    break;


                case 100:
                    

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
