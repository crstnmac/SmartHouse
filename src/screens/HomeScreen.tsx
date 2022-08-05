import React from 'react'
import {styled} from 'nativewind'
import fontStyle from '../utils/fonts'
import {View, Text} from 'react-native'
import Switch from 'react-native-switch-toggles'

const StyledView = styled(View)

const Box = ({className, ...props}: any) => (
  <StyledView
    className={`flex flex-1 text-center h-36 basis-1/3 justify-center items-center rounded-3xl ${className}`}
    {...props}
  />
)

const AllLights = () => {
  const [isOn, setIsOn] = React.useState(false)
  return (
    <StyledView className="mt-4 flex flex-row">
      <Text className="text-white text-2xl px-4" style={fontStyle.medium}>
        Lights
      </Text>
      <View className="ml-auto mr-2">
        <Switch
          value={isOn}
          onChange={value => setIsOn(value)}
          activeTrackColor={'#fff'}
          activeThumbColor={'#000'}
          inactiveTrackColor={'#fff'}
          inactiveThumbColor={'#000'}
          renderOffIndicator={() => (
            <Text className="text-black text-xs" style={fontStyle.bold}>
              off
            </Text>
          )}
          renderOnIndicator={() => (
            <Text className="text-black text-xs" style={fontStyle.bold}>
              on
            </Text>
          )}
        />
      </View>
    </StyledView>
  )
}

const HomeScreen: React.FC = () => {
  return (
    <StyledView className="bg-black flex h-screen w-screen ">
      <AllLights />
      <StyledView className="flex flex-row flex-wrap content-start items-center  gap-4 -ml-4 px-2 justify-around overflow-hidden">
        <Box className="bg-violet-400 ">
          <Text className="text-black text-xl" style={fontStyle.medium}>
            Under the Bed Lights
          </Text>
        </Box>
        <Box className="bg-neutral-800">
          <Text className="text-white text-xl" style={fontStyle.medium}>
            Table Light
          </Text>
        </Box>
        <Box className="bg-neutral-800">
          <Text className="text-white text-xl" style={fontStyle.medium}>
            Light 2
          </Text>
        </Box>
        <Box className="bg-yellow-200">
          <Text className="text-black text-xl" style={fontStyle.medium}>
            Ceiling Light
          </Text>
        </Box>
      </StyledView>
    </StyledView>
  )
}

export default HomeScreen
