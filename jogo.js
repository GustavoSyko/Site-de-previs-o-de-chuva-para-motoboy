// Configurações da API do HERE Maps
var apiKey = 'VLiOYKmp89R_tvNHYxCLvA'; // Insira sua chave de API do HERE Maps aqui
var geocodingEndpoint = 'https://geocode.search.hereapi.com/v1/geocode';

 // Função para pesquisar um endereço
 function geocode(address) {
  // URL base da API de geocodificação da Here Maps
  const baseUrl = 'https://geocode.search.hereapi.com/v1/geocode';

  // Parâmetros de consulta para a solicitação de geocodificação
  const queryParams = {
    apiKey: apiKey,
    q: address
  };

  // Construir a URL completa com os parâmetros de consulta
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(queryParams).toString();

  // Fazer uma solicitação HTTP para a API de geocodificação
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Manipular a resposta da API aqui
      console.log(data);
    })
    .catch(error => {
      // Lidar com erros de solicitação aqui
      console.error('Erro na solicitação:', error);
    });
}

// Exemplo de uso da função de geocodificação
const address = '1600 Amphitheatre Parkway, Mountain View, CA';
geocode(address);