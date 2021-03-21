import React, { useContext } from 'react';
import { RegisterContext } from '../../../contexts/RegisterContext';

import { Button, ButtonsView, Alert } from './RegisterButtons.styles';

const RegisterButtons: React.FC = () => {
  const {
    handleClearInputs,
    handleConfirmInputs,
    registerAlert,
    setRegisterAlert,
    messageAlert
  } = useContext(RegisterContext);

  return (
    <>
      <ButtonsView>
        <Button onPress={handleClearInputs}>Clear</Button>
        <Button onPress={handleConfirmInputs}>Confirm</Button>
      </ButtonsView>
      <Alert
        visible={registerAlert}
        onDismiss={() => setRegisterAlert(false)}
        action={{
          label: 'Ok',
          onPress: () => setRegisterAlert(false),
        }}
      >
        {messageAlert}
      </Alert>
    </>
  );
}

export default RegisterButtons;