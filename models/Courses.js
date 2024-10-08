const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Courses = sequelize.define("Courses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    validate: {
      len: {
        arg: [0, 800],
        msg: "Your description must be between 0 to 800 characters",
      },
    },
  },
  courseCode: {
    type: DataTypes.STRING,
  },
  specializationId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Specializations",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  fieldOfStudyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "FieldOfStudies",
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
});

module.exports = Courses;
