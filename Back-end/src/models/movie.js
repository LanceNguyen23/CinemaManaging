"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      movieName: DataTypes.STRING,
      movieSecondName: DataTypes.STRING,
      movieRating: DataTypes.FLOAT,
      movieNumberRating: DataTypes.INTEGER,
      movieDuration: DataTypes.TIME,
      movieActor: DataTypes.STRING,
      movieDirector: DataTypes.STRING,
      movieCountry: DataTypes.STRING,
      movieProducer: DataTypes.STRING,
      moviePremiere: DataTypes.DATEONLY,
      movieContent: DataTypes.TEXT,
      createAt: DataTypes.DATE,
      updateAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
