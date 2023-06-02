const { DataTypes, ENUM } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false 
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false 
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: true // Puedes modificar esto según tus requisitos
      }
   }, { timestamps: false });
};

// id
// name
// status
// species
// gender
// origin
// image
