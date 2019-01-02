const routes = (module.exports = require('next-routes')());

routes.add('event', '/event/:name/:id', 'event');
routes.add('checkout', '/checkout', 'checkout');
