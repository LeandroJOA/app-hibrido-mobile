const router = require('express').Router();
const mongoose = require('mongoose');

const User = require('../models/users');

router.get('/', (req, res) => {
  User.find()
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

router.get('/:userId', (req, res) => {
  User.findOne({_id: req.params.userId})
    .exec()
    .then((result) => {
      if (result === null) {
        res.status(404).json({
          message: 'Usuario não encontrado!',
        });
      }
      res.status(200).json({
        user: result,
      });
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.post('/', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
  });

  user.save()
    .then((result) => {
      res.status(201).json({
        message: 'Usuario salvo com sucesso!',
        user,
      });
    })
    .catch((reject) => {
      res.status(500).json({
        error: reject,
      });
    });
});

router.put('/:userId', (req, res) => {
  User.updateOne(
    {_id: req.params.userId},
    {
      email: req.body.email,
      password: req.body.password,
    }
  )
    .then((result) => {
      res.status(200).json({
        message: 'Usuario atualizado com sucesso!',
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: 'Usuario não encontrado!',
        error: reject,
      });
    });
});

router.delete('/:userId', (req, res) => {
  User.deleteOne({_id: req.params.userId})
    .then((result) => {
      res.status(200).json({
        message: 'Usuario deletado com sucesso!',
      });
    })
    .catch((reject) => {
      res.status(404).json({
        message: 'Usuario não encontrado!',
        error: reject,
      });
    });
});

module.exports = router;