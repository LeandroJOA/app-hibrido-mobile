const router = require("express").Router();
const mongoose = require("mongoose");

const Classe = require("../models/classes");

router.get("/", (req, res) => {
  Classe.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.get("/:classeId", (req, res) => {
  Classe.findOne({ _id: req.params.classeId })
    .exec()
    .then((result) => {
      if (result === null) {
        res.status(404).json({
          message: "Turma não encontrada!",
        });
      } else {
        res.status(200).json({
          classe: result,
        });
      }
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.post("/", (req, res) => {
  const classe = new Classe({
    _id: new mongoose.Types.ObjectId(),
    classe: req.body.classe,
    courseId: req.body.courseId,
  });

  classe
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Turma salva com sucesso!",
        classe,
      });
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.put("/:classeId", (req, res) => {
  Classe.updateOne(
    { _id: req.params.classeId },
    {
      classe: req.body.classe,
      courseId: req.body.courseId,
    }
  )
    .then((result) => {
      res.status(200).json({
        message: "Turma atualizada com sucesso!",
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: "Turma não encontrada!",
        error: reject,
      });
    });
});

router.delete("/:classeId", (req, res) => {
  Classe.deleteOne({ _id: req.params.classeId })
    .then((result) => {
      res.status(200).json({
        message: "Turma deletada com sucesso!",
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: "Turma não encontrada!",
        error: reject,
      });
    });
});

module.exports = router;
