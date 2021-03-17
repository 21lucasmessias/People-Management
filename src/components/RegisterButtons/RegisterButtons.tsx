import React, { useContext } from 'react';
import { RegisterContext } from '../../contexts/RegisterContext';

import { Button, ButtonsView } from './RegisterButtons.styles';

const RegisterButtons: React.FC = () => {
  const {
    handleClearInputs,
    handleConfirmInputs
  } = useContext(RegisterContext);

  return (
    <ButtonsView>
      <Button onPress={handleClearInputs}>Clear</Button>
      <Button onPress={handleConfirmInputs}>Confirm</Button>
    </ButtonsView>
  );
}

export default RegisterButtons;