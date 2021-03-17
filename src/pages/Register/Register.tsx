import React, { useState } from 'react';
import Header from '../../components/Header/Header';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';


import {
  Container,
  Form,
  Section,
  CityState,
  Label,
  TextInput,
  Buttons,
  Button,
  DateView,
  DateText,
  DateLabel
} from './Register.styles';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const [date, setDate] = useState<Date | null>(null);
  const [formatedDate, setFormatedData] = useState('');
  const [showDate, setShowDate] = useState(false);

  const [CPF, setCPF] = useState('');
  const [CPFError, setCPFError] = useState(false);

  const [RG, setRG] = useState('');
  const [RGError, setRGError] = useState(false);

  const onChangeDate = (event: Event, selectedDate: Date | undefined) => {
    const newDate = selectedDate || date;
    setShowDate(false);
    setDate(newDate);
    setFormatedData(newDate ? `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}` : '')
  };

  return (
    <Container>
      {showDate && (
        <DateTimePicker
          mode='date'
          value={date ? date : new Date()}
          onChange={onChangeDate}
        />)
      }
      <Header title="Register" />
      <Form>
        <Section>
          <Label>Profile</Label>
          <TextInput
            label="Name"
            value={name}
            keyboardType='default'
            onChangeText={text => setName(text)}
            error={nameError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />


          <DateView onTouchEndCapture={() => setShowDate(true)}>
            <DateLabel empty={!showDate && date == null}>Birthday</DateLabel>
            <DateText>
              {formatedDate}
            </DateText>
          </DateView>

          <TextInput
            label="CPF"
            value={CPF}
            keyboardType='numeric'
            onChangeText={CPF => setCPF(CPF)}
            error={CPFError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
          <TextInput
            label="RG"
            value={RG}
            keyboardType='numeric'
            onChangeText={RG => setRG(RG)}
            error={RGError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
        </Section>
        <Section>
          <Label>Adress</Label>
          <TextInput
            label="CEP"
            value={CPF}
            keyboardType='numeric'
            onChangeText={CPF => setCPF(CPF)}
            error={CPFError}
            style={{ backgroundColor: "rgb(242,242,242)" }}
            theme={{ colors: { primary: "#476A6F" } }}
          />
          <CityState>
            <TextInput
              label="City"
              value={CPF}
              keyboardType='numeric'
              onChangeText={CPF => setCPF(CPF)}
              error={CPFError}
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              disabled
            />
            <TextInput
              label="State"
              value={CPF}
              keyboardType='numeric'
              onChangeText={CPF => setCPF(CPF)}
              error={CPFError}
              style={{ backgroundColor: "rgb(242,242,242)", width: '45%' }}
              theme={{ colors: { primary: "#476A6F" } }}
              disabled
            />
          </CityState>
        </Section>
        <Buttons>
          <Button mode="contained" onPress={() => { }}>Clear</Button>
          <Button mode="contained" onPress={() => { }}>Confirm</Button>
        </Buttons>
      </Form>
    </Container>
  );
}

export default Register;