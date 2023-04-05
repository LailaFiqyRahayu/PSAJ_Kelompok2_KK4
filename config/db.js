module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "refolite",
  dialect: "mysql",
  pool: {
    max: 5,
    mon: 0,
    acquire: 30000,
    idle: 10000,
  },
};
