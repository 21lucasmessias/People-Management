export type iPerson = {
  name: {
    first: string,
    last: string
  },
  birthday: number,
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

export type serverResponsePerson = {
  persons: Array<iPerson>
}

export type iCEP = {
  bairro: string,
  localidade: string,
  logradouro: string,
  uf: string,
};