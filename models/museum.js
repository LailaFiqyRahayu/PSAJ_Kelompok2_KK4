module.exports = (sequelize, Sequelize) => {
    const Museum = sequelize.define("museum", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        image: {
            type: Sequelize.BLOB('long'),
            allowNull: false
        },
        alamat: {
            type: Sequelize.STRING,
            allowNull: false
        },
        deskripsi: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Museum;
};