'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DataSchema = new Schema({
  name: {
    type: String,
    required: 'Name of project'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Data', DataSchema);