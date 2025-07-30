module.exports = (sequelize, DataTypes) => {
    const TvShow = sequelize.define('tvshow', {
        title: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.ENUM('Movie', 'TV Show'), allowNull: false },
        director: { type: DataTypes.STRING, allowNull: false },
        budget: { type: DataTypes.FLOAT, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        duration: { type: DataTypes.STRING, allowNull: false },
        year: { type: DataTypes.INTEGER, allowNull: false },
        description: { type: DataTypes.TEXT },
        posterUrl: { type: DataTypes.STRING },
    });

    return TvShow;
};
