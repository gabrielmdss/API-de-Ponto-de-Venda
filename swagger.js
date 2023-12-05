const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
      title: 'Api de Ponto de Venda (PDV)',
      description: 'Uma API de PDV básica para lidar com transações de venda e gerenciamento de estoque.'
    },
    host: 'localhost:3000'
  };
  
  const outputFile = './swagger-output.json';
  const routes = ['./src/index.js', './src/rotas.js'];

  swaggerAutogen(outputFile, routes, doc);