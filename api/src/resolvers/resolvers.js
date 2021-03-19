const Person = require('../database/schemas/Person');

module.exports = {
  Query: {
    persons: (_, {
      sortField,
      decrescent,
      limit,
      offset,
      name,
      birthday,
      cpf,
      rg,
      street,
      district,
      city,
      state,
      cep,
    }) => Person.find({
      $and: [
        { "name.first": name ? { $regex: '.*' + name + '.*' } : { $exists: true } },
        { "birthday": birthday ? birthday : { $exists: true } },
        { "cpf": cpf ? { $regex: '.*' + cpf + '.*' } : { $exists: true } },
        { "rg": rg ? { $regex: '.*' + rg + '.*' } : { $exists: true } },
        { "adress.street": street ? { $regex: '.*' + street + '.*' } : { $exists: true } },
        { "adress.district": district ? { $regex: '.*' + district + '.*' } : { $exists: true } },
        { "adress.city": city ? { $regex: '.*' + city + '.*' } : { $exists: true } },
        { "adress.state": state ? { $regex: '.*' + state + '.*' } : { $exists: true } },
        { "adress.cep": cep ? { $regex: '.*' + cep + '.*' } : { $exists: true } },
      ]
    }, null, {
      limit: limit,
      sort: sortField,
      skip: offset
    }),
  },

  Mutation: {
    registerPerson: (_, { name, birthday, cpf, rg, adress }) => Person.create({ name, birthday, cpf, rg, adress }),
    deletePerson: (_, { id }) => Person.findByIdAndDelete(id),
    alterPerson: (_, { id, name, birthday, cpf, rg, adress }) => Person.findByIdAndUpdate(id, { name, birthday, cpf, rg, adress })
  },
}