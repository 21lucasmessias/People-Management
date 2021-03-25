import React from 'react';

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

import {
  Container,
  ContainerSelected,
  Touchable
} from './TabBarCustomButton.styles';

const TabBarCustomButton: React.FC<BottomTabBarButtonProps> = ({ accessibilityState, accessibilityLabel, children, onPress }) => {

  return (
    <>
      {accessibilityState?.selected ? (
        <Container>
          <ContainerSelected>
            {children}
          </ContainerSelected>
        </Container>
      ) : (
        <Touchable onPress={onPress} style={{ flex: 1 }}>
          {children}
        </Touchable>
      )}
    </>
  )
}

export default TabBarCustomButton;