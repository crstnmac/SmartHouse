import React from 'react'
import {styled} from 'nativewind'
import fontStyle from '../utils/fonts'
import {View, Text} from 'react-native'
import Switch from 'react-native-switch-toggles'
import VectorImage from 'react-native-vector-image'

const StyledView = styled(View)

const Box = ({className, ...props}: any) => (
  <StyledView
    className={`flex flex-1 text-center h-36 basis-1/3 justify-center items-center rounded-3xl ${className}`}
    {...props}
  />
)

const Bulb = ({dark}: any) => (
  <View>
    <VectorImage
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 30, height: 30, tintColor: dark ? '#fff' : '#000'}}
      source={require('../assets/svgs/lamp-icon.svg')}
    />
  </View>
)

const AllLights = () => {
  const [isOn, setIsOn] = React.useState(false)
  return (
    <StyledView className="mt-4 px-4 flex flex-row">
      <Text className="text-white text-2xl " style={fontStyle.medium}>
        Lights
      </Text>
      <View className="ml-auto">
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
      <StyledView className="flex flex-row flex-wrap content-start items-center gap-4 -ml-4 px-4 justify-around overflow-hidden">
        <Box className="bg-violet-400 items-start p-6">
          <Bulb dark={false} />
          <Text className="text-black text-xl mt-3" style={fontStyle.medium}>
            Under Bed Lights
          </Text>
        </Box>
        <Box className="bg-neutral-800 items-start p-6">
          <Bulb dark={true} />
          <Text className="text-white text-xl mt-3" style={fontStyle.medium}>
            Table Light
          </Text>
        </Box>
        <Box className="bg-neutral-800 items-start p-6">
          <Bulb dark={true} />
          <Text className="text-white text-xl mt-3" style={fontStyle.medium}>
            Light 2
          </Text>
        </Box>
        <Box className="bg-yellow-200 items-start p-6">
          <Bulb dark={false} />
          <Text className="text-black text-xl mt-3" style={fontStyle.medium}>
            Ceiling Light
          </Text>
        </Box>
      </StyledView>
    </StyledView>
  )
}

export default HomeScreen
