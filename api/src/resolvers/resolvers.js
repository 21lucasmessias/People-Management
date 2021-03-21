const Person = require('../database/schemas/Person');

module.exports = {
  Query: {
    persons: (_, {
      limit,
      offset,
    }) => Person.find({}, null, {
      limit: limit,
      skip: offset,
      sort: "name.first"
    }),

    statistics: () => Person.find({}, null, { sort: "birthday" })
  },

  Mutation: {
    registerPerson: (_, { name, birthday, cpf, rg, adress }) => Person.create({ name, birthday, cpf, rg, adress }),
    deletePerson: (_, { id }) => Person.findByIdAndDelete(id),
    alterPerson: (_, { id, name, birthday, cpf, rg, adress }) => Person.findByIdAndUpdate(id, { name, birthday, cpf, rg, adress }, { new: true })
  },
}