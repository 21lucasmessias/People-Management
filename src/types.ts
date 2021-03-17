export type iPeople = {
  name: {
    first: string,
    last: string
  },
  birthday: {
    day: number,
    month: number,
    year: number
  },
  cpf: string,
  rg: string,
  adress: {
    street: string,
    number: string,
    district: string,
    city: string,
    state: string,
    cep: string
  }
}

export type serverResponsePeople = {
  persons: Array<iPeople>
}

export type iCEP = {
  bairro: string,
  localidade: string,
  logradouro: string,
  uf: string,
};