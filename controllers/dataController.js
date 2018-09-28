'use strict';

const mongoose = require('mongoose');
const project = mongoose.model('Data');

exports.list_all = function(req, res) {
  project.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create = function(req, res) {
  var new_project = new project(req.body);
  new_project.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read = function(req, res) {
    project.findById(req.params.Id, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.update = function(req, res) {
    project.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.delete = function(req, res) {
    project.remove({
    _id: req.params.Id
  }, function(err, data) {
    if (err)
      res.send(err);
    res.json({ message: 'Successfully deleted' });
  });
};
