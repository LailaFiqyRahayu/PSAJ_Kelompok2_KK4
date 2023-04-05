module.exports = (sequelize, Sequelize) => {
  const Sejarah = sequelize.define("sejarah", {
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nama_thn: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gelar: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Sejarah;
};
