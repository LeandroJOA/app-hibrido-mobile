const router = require('express').Router();
const mongoose = require('mongoose');

const Student = require('../models/students');

router.get('/', (req, res) => {
  Student.find()
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

router.get('/:studentId', (req, res) => {
  Student.findOne({_id: req.params.studentId})
    .exec()
    .then((result) => {
      if (!result) {
        res.status(404).json({
          message: 'Aluno não encontrado!',
        });
      } else {
        res.status(200).json({
          student: result,
        });
      }
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.post('/', (req, res) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    class: req.body.class,
    document: req.body.document,
  });

  student
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Aluno salvo com sucesso!',
        student,
      });
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.put('/:studentId', (req, res) => {
  Student.updateOne(
    {_id: req.params.studentId},
    {
      name: req.body.name,
      class: req.body.class,
      document: req.body.document,
    }
  )
    .then((result) => {
      res.status(200).json({
        message: 'Aluno atualizado com sucesso!',
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: 'Aluno não encontrado!',
        error: reject,
      });
    });
});

router.delete('/:studentId', (req, res) => {
  Student.deleteOne({_id: req.params.studentId})
    .then((result) => {
      res.status(200).json({
        message: 'Aluno deletado com sucesso!',
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: 'Aluno não encontrado!',
        error: reject,
      });
    });
});

module.exports = router;
