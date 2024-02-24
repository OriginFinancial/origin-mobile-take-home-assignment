import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import Text from './Text';
import { View } from 'tamagui';

interface IThinnyButton extends RectButtonProps {
  hasBackground: boolean;
  label: string;
}

const ThinnyButton = ({
  hasBackground,
  label,
  ...rest
}: IThinnyButton): JSX.Element => {
  return (
    <RectButton
      style={{
        borderRadius: 12,
        backgroundColor: hasBackground ? '#333' : 'transparent',
      }}
      rippleColor={hasBackground ? '#444' : '#efecec'}
      activeOpacity={hasBackground ? 0.8 : 0.1}
      {...rest}
    >
      <View
        borderWidth={hasBackground ? 0 : 1}
        borderRadius={12}
        paddingVertical={6}
        paddingHorizontal={12}
      >
        <Text
          color={hasBackground ? '$white' : '$primary600'}
          fontSize={'$3'}
          alignSelf="center"
          lineHeight={22}
        >
          {label}
        </Text>
      </View>
    </RectButton>
  );
};

export default ThinnyButton;
