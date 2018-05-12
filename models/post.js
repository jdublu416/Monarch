module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define("posts", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      auto_increment: true,
      primaryKey: true
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    post_body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    liked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  // Posts.associate = function(models) {
  //   Posts.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Posts;
};
