const jsonServer = require('json-server');
const { projectActionPatch } = require('./modules/project');
const db = require('./db.js');
const routes = require('./routes.json');

const PORT = 3004;

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

//Создание эндпоинтов
global.router = jsonServer.router(db());

server.use(middlewares);
server.use(jsonServer.bodyParser);

//Кастомные роуты для перенаправления запроса
server.use(jsonServer.rewriter(routes));



/** *********************************/
/** Пользовательские обработчики >>> */

// Пользовательский обработчик маршрута для обновления поля 'isFavorite'
server.patch('/project', projectActionPatch);


/** <<< Пользовательские обработчики */
/** *********************************/



server.use(global.router);

server.listen(PORT, () => {
  const serverUrl = `http://localhost:${PORT}`;
  const endpintsArray = Object.keys(global.router.db.getState());

  console.log('Доступные эндпоинты:');
  console.log(serverUrl);
  endpintsArray.forEach((item) => {
    console.log(`${serverUrl}/${item}`);
  });

  console.log('\nПеренаправления запросов:');
  for ( [value, key] of Object.entries(routes) ){
    console.log(`${value} --> ${key}`);
  }

  console.log('\n\n');
});


