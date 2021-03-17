import React, { useContext } from 'react';

import DatePicker from '../DatePicker/DatePicker';
import { RegisterContext } from '../../contexts/RegisterContext';

import {
  LabelInput,
  NameView,
  TextInput
} from './RegisterProfile.styles';

const RegisterProfile: React.FC = () => {
  const {
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
    RGError
  } = useContext(RegisterContext);

  return (
    <>
      <LabelInput>Profile</LabelInput>

      <NameView>
        <TextInput
          label="First Name"
          value={nameFirst}
          keyboardType='default'
          onChangeText={text => setNameFirst(text)}
          error={nameFirstError}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          theme={{ colors: { primary: "#476A6F" } }}
        />
        <TextInput
          label="Last Name"
          value={nameLast}
          keyboardType='default'
          onChangeText={text => setNameLast(text)}
          error={nameLastError}
          style={{ backgroundColor: "rgb(242,242,242)" }}
          theme={{ colors: { primary: "#476A6F" } }}
        />
      </NameView>

      <DatePicker dateError={dateError} date={date} setDate={setDate} showDate={showDate} setShowDate={setShowDate} />

      <TextInput
        label="CPF"
        value={CPF}
        keyboardType='numeric'
        onChangeText={text => setCPF(text)}
        error={CPFError}
        style={{ backgroundColor: "rgb(242,242,242)" }}
        theme={{ colors: { primary: "#476A6F" } }}
      />
      <TextInput
        label="RG"
        value={RG}
        keyboardType='numeric'
        onChangeText={text => setRG(text)}
        error={RGError}
        style={{ backgroundColor: "rgb(242,242,242)" }}
        theme={{ colors: { primary: "#476A6F" } }}
      />
    </>
  );
}

export default RegisterProfile;