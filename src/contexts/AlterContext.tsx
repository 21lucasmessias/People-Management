import React, { createContext, ReactNode, useState } from "react";
import { useAlterPersonMutation } from "../GraphQL/apolloComponents";

type iAlterContextProvider = {
  children: ReactNode;
}

interface iAlterContext {
  id: string,
  setID: React.Dispatch<React.SetStateAction<string>>,
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
  district: string,
  setDistrict: React.Dispatch<React.SetStateAction<string>>,
  adressNumberError: boolean,
  verifyCEP: () => boolean,
  nameFirst: string,
  setNameFirst: React.Dispatch<React.SetStateAction<string>>,
  nameFirstError: boolean,
  nameLast: string,
  setNameLast: React.Dispatch<React.SetStateAction<string>>,
  nameLastError: boolean,
  birthday: number,
  setBirthday: React.Dispatch<React.SetStateAction<number>>,
  birthdayError: boolean,
  setBirthdayError: React.Dispatch<React.SetStateAction<boolean>>,
  showBirthday: boolean,
  setShowBirthday: React.Dispatch<React.SetStateAction<boolean>>,
  CPF: string,
  setCPF: React.Dispatch<React.SetStateAction<string>>,
  CPFError: boolean,
  RG: string,
  setRG: React.Dispatch<React.SetStateAction<string>>,
  RGError: boolean,
  handleAlterInputs: () => void,
  AlterAlert: boolean,
  setAlterAlert: React.Dispatch<React.SetStateAction<boolean>>,
  messageAlert: string,
  date: Date | null,
  setDate: React.Dispatch<React.SetStateAction<Date | null>>
}

export const AlterContext = createContext({} as iAlterContext);


const AlterContextProvider: React.FC<iAlterContextProvider> = ({ children }) => {
  const [alterPerson] = useAlterPersonMutation();

  const [id, setID] = useState('');
  const [nameFirst, setNameFirst] = useState('');
  const [nameFirstError, setNameFirstError] = useState(false);
  const [nameLast, setNameLast] = useState('');
  const [nameLastError, setNameLastError] = useState(false);
  const [birthday, setBirthday] = useState<number>(0);
  const [birthdayError, setBirthdayError] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
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
  const [date, setDate] = useState<Date | null>(new Date());

  const [AlterAlert, setAlterAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('Alteration problems!');

  const verifyCEP = () => {
    let cep = CEP.replace(/\D/g, '');

    return cep ? (/^[0-9]{8}$/).test(cep) : false
  }

  const verifyEmptyFields = () => {
    setNameFirstError(!nameFirst);
    setNameLastError(!nameLast);
    setBirthdayError(!birthday);
    setCPFError(!CPF);
    setRGError(!RG);
    setCEPError(!verifyCEP() || !CEP);
    setAdressNumberError(!adressNumber);

    return !nameFirst || !nameLast || !birthday || !CPF || !RG || (!verifyCEP() || !CEP) || !adressNumber;
  }

  function handleAlterInputs() {
    setMessageAlert('Alteration problems!');

    if (!verifyEmptyFields()) {
      alterPerson({
        variables: {
          id: id,
          name: {
            first: nameFirst,
            last: nameLast
          },
          birthday: ((date as Date).getDate() + ((date as Date).getMonth()) * 30 + (date as Date).getFullYear() * 365) * -1,
          cpf: CPF,
          rg: RG,
          adress: {
            street: street,
            number: adressNumber,
            district: district,
            city: city,
            state: adressState,
            cep: CEP,
          }
        }
      })

      setMessageAlert('Successfully alteration!');
    }

    setAlterAlert(true);
  }

  return (
    <AlterContext.Provider value={{
      id,
      setID,
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
      district,
      setDistrict,
      adressNumberError,
      verifyCEP,
      nameFirst,
      setNameFirst,
      nameFirstError,
      nameLast,
      setNameLast,
      nameLastError,
      birthday: birthday,
      setBirthday: setBirthday,
      birthdayError: birthdayError,
      setBirthdayError: setBirthdayError,
      showBirthday: showBirthday,
      setShowBirthday: setShowBirthday,
      CPF,
      setCPF,
      CPFError,
      RG,
      setRG,
      RGError,
      handleAlterInputs,
      AlterAlert,
      setAlterAlert,
      messageAlert,
      date,
      setDate
    }}>
      {children}
    </AlterContext.Provider>
  );
}

export default AlterContextProvider;