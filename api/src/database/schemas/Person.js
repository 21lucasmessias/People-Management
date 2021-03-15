const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  birthday: {
    day: Number,
    month: Number,
    year: Number
  },
  cpf: String,
  rg: String,
  adress: {
    street: String,
    number: String,
    district: String,
    city: String,
    state: String,
    cep: String
  }
});

module.exports = mongoose.model("Person", PersonSchema);