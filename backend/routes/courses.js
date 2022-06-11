const router = require("express").Router();
const mongoose = require("mongoose");

const Course = require("../models/courses");

router.get("/", (req, res) => {
  Course.find()
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

router.get("/:courseId", (req, res) => {
  Course.findOne({ _id: req.params.courseId })
    .exec()
    .then((result) => {
      if (!result) {
        res.status(404).json({
          message: "Curso não encontrado!",
        });
      } else {
        res.status(200).json({
          course: result,
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
  const course = new Course({
    _id: new mongoose.Types.ObjectId(),
    course: req.body.course,
  });

  course
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Curso salvo com sucesso!",
        course,
      });
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.put("/:courseId", (req, res) => {
  Course.updateOne(
    { _id: req.params.courseId },
    {
      course: req.body.course,
    }
  )
    .then((result) => {
      res.status(200).json({
        message: "Curso atualizada com sucesso!",
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: "Curso não encontrado!",
        error: reject,
      });
    });
});

router.delete("/:courseId", (req, res) => {
  Course.deleteOne({ _id: req.params.courseId })
    .then((result) => {
      res.status(200).json({
        message: "Curso deletada com sucesso!",
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: "Curso não encontrado!",
        error: reject,
      });
    });
});

module.exports = router;
