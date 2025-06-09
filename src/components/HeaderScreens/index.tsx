import React from 'react'
import {
  Container,
  ButtonHeader,
  DynamicButtonWrapper
} from './styles'

import { IconProps } from 'phosphor-react-native'
import { useTheme } from 'styled-components';

type Props = {
  onPress?: () => any;
  showBackButtonScreen?: boolean;
  icon?: React.ElementType<IconProps>;
  iconColor?: string;
}

const { FONT_SIZE } = useTheme()

export default function HeaderKaue({
  onPress,
  showBackButtonScreen = false,
  icon: IconComponent,
  iconColor
}: Props) {
  return (
    <Container>
      <ButtonHeader onPress={onPress}>
        {showBackButtonScreen && IconComponent && (
          <DynamicButtonWrapper>
            <IconComponent size={FONT_SIZE.XL} color={iconColor}/>
          </DynamicButtonWrapper>
        )}
      </ButtonHeader>
    </Container>
  )
}