const Department = require("../models/department.model");

const DepartmentControllers = {
  addDepartment: async (req, res) => {
    try {
      const {
        department_id,
        department_name,
        department_password,
        department_username,
        department_location,
        department_manager,
      } = req.body;

      if (
        !department_id ||
        !department_name ||
        !department_password ||
        !department_username ||
        !department_location ||
        !department_manager
      ) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: "All details must be filled.",
        });
      }

      const Department_id = await Department.findOne({ department_id });
      if (Department_id) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${Department_id.department_id} id already saved.`,
        });
      }
      const Department_name = await Department.findOne({ department_name });
      const Department_manager = await Department.findOne({
        department_manager,
      });
      if (Department_name) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${Department_name.department_name} is already saved.`,
        });
      }

      if (Department_name && Department_manager) {
        return res.status(200).json({
          code: 400,
          success: false,
          status: "Bad Request",
          message: `This ${Department_manager.department_manager} is already asign to this ${Department_name.department_name}.`,
        });
      }

      const newDepartment = new Department({
        department_id,
        department_name,
        department_password,
        department_username,
        department_location,
        department_manager,
      });

      await newDepartment.save();

      return res.status(200).json({
        code: 200,
        success: true,
        status: "OK",
        DepartmentDetails: newDepartment,
        message: "Department was added successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getAllDepartments: async (req, res) => {
    try {
      const allDepartments = await Department.find();

      if (!allDepartments) {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          DepartmentList: allDepartments,
          message: "Department list not found.",
        });
      } else {
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          DepartmentList: allDepartments,
          message: "All Department list recieved.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  getDepartmentById: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const DepartmentDetails = await Department.findById(req.params.id);

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          DepartmentDetails: DepartmentDetails,
          message: `Department details recieved.`,
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  updateDepartmentDetails: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const {
          department_id,
          department_name,
          department_password,
          department_username,
          department_location,
          department_manager,
        } = req.body;

        const updateDepartment = await Department.findById(req.params.id);

        await Department.findByIdAndUpdate(req.params.id, {
          department_id,
          department_name,
          department_password,
          department_username,
          department_location,
          department_manager,
        });

        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          UpdateDepartment: updateDepartment,
          message: "Department updated successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  deleteDepartment: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const departmentDet = await Department.findByIdAndDelete(req.params.id);
        return res.status(200).json({
          code: 200,
          success: true,
          status: "OK",
          DepartmentDetails: departmentDet,
          message: "Department is deleted successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },

  isAccessManager: async (req, res) => {
    try {
      if (req.params && req.params.id) {
        const { is_access } = req.body;
        await Department.findByIdAndUpdate(req.params.id, {
          is_access,
        });

        const accessPermission = await Department.findById(req.params.id);

        if (is_access == 1) {
          return res.status(200).json({
            code: 200,
            success: true,
            status: "OK",
            UpdateDepartment: accessPermission,
            message: "Granted",
          });
        }
        if (is_access == 0) {
          return res.status(200).json({
            code: 400,
            success: false,
            status: "Bad",
            UpdateDepartment: accessPermission,
            message: "Denied",
          });
        }
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        status: "Internal Server Error",
        message: error.message,
      });
    }
  },
};

module.exports = DepartmentControllers;
