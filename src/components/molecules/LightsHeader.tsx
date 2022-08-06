import React from 'react'
import {View, Text} from 'react-native'
import {styled} from 'nativewind'
import fontStyle from '../../utils/fonts'
import {Toggle} from '../atoms'

const StyledView = styled(View)

const LightsHeader = ({dark, title, toggleSize}: any) => {
  const [isOn, setIsOn] = React.useState(false)

  const classNames = ['text-black', 'text-3xl']

  if (dark) classNames.push('text-white')

  return (
    <StyledView className="flex flex-row items-center">
      <Text className={classNames.join(' ')} style={fontStyle.bold}>
        {title}
      </Text>
      <View className="ml-auto">
        <Toggle isOne={isOn} setIsOn={setIsOn} toggleSize={toggleSize} />
      </View>
    </StyledView>
  )
}

export default LightsHeader
