const Person = require('../database/schemas/Person');

module.exports = {
  Query: {
    people: () => Person.find(),
    person: (_,
      {
        name,
        birthday,
        cpf,
        rg,
        street,
        district,
        city,
        state,
        cep,
      }) => Person.find(
        {
          $or: [
            { "name.first": { $regex: '.*' + name + '.*' } },
            { "birthday": birthday },
            { "cpf": { $regex: '.*' + cpf + '.*' } },
            { "rg": { $regex: '.*' + rg + '.*' } },
            { "adress.street": { $regex: '.*' + street + '.*' } },
            { "adress.district": { $regex: '.*' + district + '.*' } },
            { "adress.city": { $regex: '.*' + city + '.*' } },
            { "adress.state": { $regex: '.*' + state + '.*' } },
            { "adress.cep": { $regex: '.*' + cep + '.*' } },
          ]
        })
  },

  Mutation: {
    registerPerson: (_, { name, birthday, cpf, rg, adress }) => Person.create({ name, birthday, cpf, rg, adress })
  },
}