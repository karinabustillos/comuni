import React from 'react'
import { TitleHeader, ButtonHeader, TextHeader, IconHeader } from './styles'

export default function HeaderKaue(props: { text: string; }) {
  return (
      <TitleHeader>
        <ButtonHeader>
          <IconHeader />
          <TextHeader>
            {props.text}
          </TextHeader>
        </ButtonHeader>
      </TitleHeader>
  )
}