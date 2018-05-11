module.exports = function(sequelize, DataTypes) {
    var post = sequelize.define("posts", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        auto_increment: true,
        primaryKey: true
      },
      post_body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      liked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return post;
  };
  