const categoryModel = (sequelize, Sequelize) => {
    const Category = sequelize.define("Category", {
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

    return Category;

}

export default categoryModel