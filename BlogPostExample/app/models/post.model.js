const postModel = (sequelize, Sequelize) => {
    const Post = sequelize.define("Post", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Post;

}

export default postModel