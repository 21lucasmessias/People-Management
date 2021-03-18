const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  birthday: Number,
  cpf: { type: String, unique: true, required: true },
  rg: { type: String, unique: true, required: true },
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