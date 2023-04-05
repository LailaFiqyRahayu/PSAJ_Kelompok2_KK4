const db = require("../models");
const Sejarah = db.sejarahs;
const { Sequelize } = require("sequelize");

exports.create = async (req, res) => {
  try {
    const data = await Sejarah.create(req.body);
    res.json({
      message: "sejarah created successfully.",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const sejarah = await Sejarah.findAll();
    res.json({
      message: "Sejarah retrieved successfully.",
      data: sejarah,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const sejarahs = await Sejarah.findByPk(id, { rejectOnEmpty: true });
    res.json({
      message: `Sejarah retrieved successfully with id=${id}.`,
      data: sejarahs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving Sejarah",
      data: null,
    });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const num = await Sejarah.count({ where: { id: id } });
  if (isNaN(id)) {
    res
      .status(400)
      .send({ status: 400, message: "Id harus berupa angka", data: null });
    return;
  } else if (num == 0) {
    res.status(404).send({
      status: 404,
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null,
    });
    return;
  }
  try {
    const seeSejarah = await Sejarah.findByPk(id, { rejectOnEmpty: true });
    res.status(200).send({
      status: 200,
      message: `Sukses data dengan ${id} berhasil ditemukan`,
      data: seeSejarah,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error.message || "Server Error",
      data: null,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Sejarah.findByPk(id, { rejectOnEmpty: true });
    quiz.update(req.body, {
      where: { id },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const sejarah = await Sejarah.findByPk(id, { rejectOnEmpty: true });

    sejarah.destroy();

    res.json({
      message: "Sejarah deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving Sejarah",
      data: null,
    });
  }
};
