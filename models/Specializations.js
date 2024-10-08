const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Specializations = sequelize.define("Specializations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Specializations name must be only character",
      }
    },
  },
  description: {
    type: DataTypes.STRING,
    validate: {
      len: {
        arg: [0, 800],
        msg: "Your description must be between 0 to 800 character",
      },
    },
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

module.exports = Specializations;