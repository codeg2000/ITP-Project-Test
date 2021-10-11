const routes = require("express").Router();
const DepartmentMainRoute = require("./DepartmentRoutes");

routes.use("/department", DepartmentMainRoute);

module.exports = routes;
