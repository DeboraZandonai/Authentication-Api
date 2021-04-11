const controllers = require("./controllers");

module.exports = (router) => {
  router.post("/api/auth", controllers.auth);
};
