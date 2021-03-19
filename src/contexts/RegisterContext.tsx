import React, { createContext, ReactNode, useState } from "react";
import { useRegisterPersonMutation } from "../GraphQL/apolloComponents";
import { GET_PERSONS } from "../GraphQL/query";

type iRegisterContextProvider = {
  children: ReactNode;
}

interface iRegisterContext {
  CEP: string,
  setCEP: React.Dispatch<React.SetStateAction<string>>,
  CEPError: boolean,
  setCEPError: React.Dispatch<React.SetStateAction<boolean>>,
  adressNumber: string,
  setAdressNumber: React.Dispatch<React.SetStateAction<string>>,
  city: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
  adressState: string,
  setAdressState: React.Dispatch<React.SetStateAction<string>>,
  street: string,
  setStreet: React.Dispatch<React.SetStateAction<string>>,
  setDistrict: React.Dispatch<React.SetStateAction<string>>,
  adressNumberError: boolean,
  verifyCEP: () => boolean,
  nameFirst: string,
  setNameFirst: React.Dispatch<React.SetStateAction<string>>,
  nameFirstError: boolean,
  nameLast: string,
  setNameLast: React.Dispatch<React.SetStateAction<string>>,
  nameLastError: boolean,
  dateError: boolean,
  date: Date | null,
  setDate: React.Dispatch<React.SetStateAction<Date | null>>,
  showDate: boolean,
  setShowDate: React.Dispatch<React.SetStateAction<boolean>>,
  CPF: string,
  setCPF: React.Dispatch<React.SetStateAction<string>>,
  CPFError: boolean,
  RG: string,
  setRG: React.Dispatch<React.SetStateAction<string>>,
  RGError: boolean,
  handleClearInputs: () => void,
  handleConfirmInputs: () => void,
  registerAlert: boolean,
  setRegisterAlert: React.Dispatch<React.SetStateAction<boolean>>,
  messageAlert: string
}

export const RegisterContext = createContext({} as iRegisterContext);


const RegisterContextProvider: React.FC<iRegisterContextProvider> = ({ children }) => {
  const [formPerson] = useRegisterPersonMutation();

  const [nameFirst, setNameFirst] = useState('');
  const [nameFirstError, setNameFirstError] = useState(false);
  const [nameLast, setNameLast] = useState('');
  const [nameLastError, setNameLastError] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [dateError, setDateError] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [CPF, setCPF] = useState('');
  const [CPFError, setCPFError] = useState(false);
  const [RG, setRG] = useState('');
  const [RGError, setRGError] = useState(false);
  const [CEP, setCEP] = useState('');
  const [CEPError, setCEPError] = useState(false);
  const [adressNumber, setAdressNumber] = useState('');
  const [adressNumberError, setAdressNumberError] = useState(false);
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [adressState, setAdressState] = useState('');

  const [registerAlert, setRegisterAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('Registry problems!');

  function handleClearInputs() {
    setNameFirst('');
    setNameFirstError(false);
    setNameLast('');
    setNameLastError(false);
    setDate(null);
    setDateError(false);
    setShowDate(false);
    setCPF('');
    setCPFError(false);
    setRG('');
    setRGError(false);
    setCEP('');
    setCEPError(false);
    setStreet('');
    setAdressNumber('');
    setAdressNumberError(false);
    setDistrict('');
    setCity('');
    setAdressState('');
  }

  const verifyCEP = () => {
    let cep = CEP.replace(/\D/g, '');

    return cep ? (/^[0-9]{8}$/).test(cep) : false
  }

  const verifyEmptyFields = () => {
    setNameFirstError(!nameFirst);
    setNameLastError(!nameLast);
    setDateError(!date);
    setCPFError(!CPF);
    setRGError(!RG);
    setCEPError(!verifyCEP() || !CEP);
    setAdressNumberError(!adressNumber);

    return !nameFirst || !nameLast || !date || !CPF || !RG || (!verifyCEP() || !CEP) || !adressNumber;
  }

  function handleConfirmInputs() {
    setMessageAlert('Registry problems!');

    if (!verifyEmptyFields()) {
      formPerson({
        variables: {
          name: {
            first: nameFirst,
            last: nameLast
          },
          birthday: ((date as Date).getDate() + ((date as Date).getMonth() + 1) * 30 + (date as Date).getFullYear() * 365) * -1,
          cpf: CPF,
          rg: RG,
          adress: {
            street: street,
            number: adressNumber,
            district: district,
            city: city,
            state: adressState,
            cep: CEP
          }
        },
        refetchQueries: [{ query: GET_PERSONS, variables: { sortField: "first.name", limit: 5, offset: 0 } }]
      });

      setMessageAlert('Successfully registered!');

      handleClearInputs();
    }

    setRegisterAlert(true);
  }

  return (
    <RegisterContext.Provider value={{
      CEP,
      setCEP,
      CEPError,
      setCEPError,
      adressNumber,
      setAdressNumber,
      city,
      setCity,
      adressState,
      setAdressState,
      street,
      setStreet,
      setDistrict,
      adressNumberError,
      verifyCEP,
      nameFirst,
      setNameFirst,
      nameFirstError,
      nameLast,
      setNameLast,
      nameLastError,
      dateError,
      date,
      setDate,
      showDate,
      setShowDate,
      CPF,
      setCPF,
      CPFError,
      RG,
      setRG,
      RGError,
      handleClearInputs,
      handleConfirmInputs,
      registerAlert,
      setRegisterAlert,
      messageAlert
    }}>
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContextProvider;