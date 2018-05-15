module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("comments", {
    comm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    comm_body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    comm_vote: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    post_id: {
      type: DataTypes.INTEGER
    },
  });

  return Comments;
};
