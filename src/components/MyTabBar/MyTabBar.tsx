import React from 'react';

import { BottomTabBarOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { Container, TouchableOpacity, Text } from './MyTabBar.styles';


const MyTabBar: React.FC<BottomTabBarProps<BottomTabBarOptions>> = ({ state, descriptors, navigation }) => {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const Icon = options.tabBarIcon as React.ElementType;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={index}
          >
            <Icon color={isFocused ? '#000000' : 'rgba(0, 0, 0, 0.3)'} />
            <Text style={{ color: isFocused ? '#000000' : 'rgba(0, 0, 0, 0.3)' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Container>
  );
}

export default MyTabBar;