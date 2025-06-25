import React from 'react'
import { TitleHeader, ButtonHeader, TextHeader, IconHeader } from './styles'
import { useNavigation } from '@react-navigation/native';

export default function HeaderKaue(props: { text: string; }) {
  const navigation = useNavigation();


  return (
      <TitleHeader>
        <ButtonHeader onPress={() => navigation.goBack()}>
          <IconHeader />
          <TextHeader>
            {props.text}
          </TextHeader>
        </ButtonHeader>
      </TitleHeader>
  )
}