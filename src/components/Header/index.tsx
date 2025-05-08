import React from 'react'
import { TitleHeader, ButtonHeader, TextHeader, IconHeader } from './style'

export default function Header(props: { text: string; }) {
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


