const { INTEGER } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("review", {
        review_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type:DataTypes.TEXT
        }
    })
    return Review
}