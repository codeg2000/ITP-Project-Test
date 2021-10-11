const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    department_id: {
      type: String,
      trim: true,
    },
    department_name: {
      type: String,
      trim: true,
    },
    department_password: {
      type: String,
      trim: true,
    },
    department_username: {
      type: String,
      trim: true,
    },
    department_location: {
      type: String,
      trim: true,
    },
    department_manager: {
      type: String,
      trim: true,
    },
    is_access: {
      type: Number,
      default: 2,
    },
  },
  {
    timestamps: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("department", DepartmentSchema);
