import {Component} from 'react'

import {
  Heading,
  TopTextHeading,
  TopTextInputField,
  BottomTextHeading,
  BottomTextInputField,
  ImageUrlHeading,
  ImageUrlInputField,
  FontSizeHeading,
  FontSizeInputField,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  render() {
    return (
      <>
        <Heading>Meme Generator</Heading>
        <ImageUrlHeading>Image URL</ImageUrlHeading>
        <ImageUrlInputField type="text" />
        <TopTextHeading>Top Text</TopTextHeading>
        <TopTextInputField type="text" placeholder="image" />
        <BottomTextHeading>Bottom Text</BottomTextHeading>
        <BottomTextInputField type="text" placeholder="image" />
        <FontSizeHeading>Font Size</FontSizeHeading>
        <FontSizeInputField />
        <GenerateButton type="button">Generate</GenerateButton>
      </>
    )
  }
}

export default MemeGenerator
