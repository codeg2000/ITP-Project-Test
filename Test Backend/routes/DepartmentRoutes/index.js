const routes = require("express").Router();
const DepartmentRoutes = require("../../controllers/department");

routes.post("/add-new-department", DepartmentRoutes.addDepartment);

routes.get("/get-all-Department", DepartmentRoutes.getAllDepartments);

routes.get("/get-Department/:id", DepartmentRoutes.getDepartmentById);

routes.put(
  "/update-department-details/:id",
  DepartmentRoutes.updateDepartmentDetails
);

routes.put("/give-access/:id", DepartmentRoutes.isAccessManager);

routes.delete("/delete-department/:id", DepartmentRoutes.deleteDepartment);

module.exports = routes;
