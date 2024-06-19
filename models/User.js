const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    
    mobile: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
   
});

const User = mongoose.model('user', UserSchema);

// Patient Schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fathersName: {
    type: String,
    required: true
  },
  mothersName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  slot: {
    type: String,
    required: true
  },
  appointmentNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
},
dateofappointment:{
  type:Date,
  required: true

},
serialNumber: {
  type: Number,
  required: true
}
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = { User, Patient };
