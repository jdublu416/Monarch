var Posts = require("./post");

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("author", {
    auth_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      auto_increment: true,
      primaryKey: true
    },
    auth_FN: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,20],
        is: ["^[a-z]+$",'i'],
        notEmpty: true
      }
    },
    auth_LN: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2,30],
        is: ["^[a-z]+$",'i'],
        notEmpty: true
      }
    },
    auth_user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
        notEmpty: true,
      }
    },
    auth_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, 
        notEmpty: true,
      }
    },
    auth_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },

    }
  });
//   Author.associate = function(models) {
//     Author.hasMany(models.Post, {
//       onDelete: "cascade"
//     });
//   };
//Author.belongsto(Posts);

  return Author;
};
