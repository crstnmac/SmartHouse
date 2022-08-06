import React from 'react'
import {View} from 'react-native'
import {styled} from 'nativewind'
const StyledView = styled(View)

const Box = ({className, ...props}: any) => (
  <StyledView
    className={`flex flex-1 text-center h-36 basis-1/3 justify-center items-center rounded-3xl ${className}`}
    {...props}
  />
)

export default Box
