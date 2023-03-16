const Hapi = require('@hapi/hapi');
const contacts = require("./contacts");

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route([
    {
      method: 'GET',
      path: '/contacts',
      handler: () => contacts,
    }
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
})();