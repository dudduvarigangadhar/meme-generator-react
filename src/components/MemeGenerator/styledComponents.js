import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #35469c;
`

export const ImageHeading = styled.p`
  font-family: 'Roboto';
  color: #7e858e;
`

export const TopTextHeading = styled.p`
  font-family: 'Roboto';
  color: #7e858e;
  font-size: 15px;
`
export const TopTextInputField = styled.input`
  height: 30px;
`
export const ImageInputField = styled(TopTextInputField)``

export const BottomTextHeading = styled(TopTextHeading)`
  font-family: 'Roboto';
`

export const BottomTextInputField = styled(TopTextInputField)``

export const ImageUrlHeading = styled(TopTextHeading)``

export const ImageUrlInputField = styled(TopTextInputField)``

export const FontSizeHeading = styled(TopTextHeading)``

export const FontSizeInputField = styled(TopTextInputField)``

export const GenerateButton = styled.button``
