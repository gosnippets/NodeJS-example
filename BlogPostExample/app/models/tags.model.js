const tagModel = (sequelize, Sequelize) => {
    const Tag = sequelize.define("Tag", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Tag;

}

export default tagModel