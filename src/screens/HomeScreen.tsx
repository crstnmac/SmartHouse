import React from 'react'
import {View, Text} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {Box, Svg, LightsHeader} from '../components'
import {styled} from 'nativewind'
import fontStyle from '../utils/fonts'

const StyledView = styled(View)
const bulbVector = require('../assets/svgs/lamp-icon.svg')

const HomeScreen: React.FC = () => {
  return (
    <ScrollView className="pt-12">
      <StyledView className="bg-black flex h-screen w-screen px-4">
        <View className="px-4">
          <LightsHeader title="Lights" dark={true} toggleSize={30} />
        </View>
        <StyledView className="flex flex-row flex-wrap content-start items-center gap-4 -ml-4  justify-around overflow-hidden">
          <Box className="bg-violet-400 items-start p-6">
            <Svg path={bulbVector} dark={false} />
            <Text className="text-black text-xl mt-3" style={fontStyle.medium}>
              Under Bed Lights
            </Text>
          </Box>
          <Box className="bg-neutral-800 items-start p-6">
            <Svg path={bulbVector} dark={true} />
            <Text className="text-white text-xl mt-3" style={fontStyle.medium}>
              Table Light
            </Text>
          </Box>
          <Box className="bg-neutral-800 items-start p-6">
            <Svg path={bulbVector} dark={true} />
            <Text className="text-white text-xl mt-3" style={fontStyle.medium}>
              Light 2
            </Text>
          </Box>
          <Box className="bg-yellow-200 items-start p-6">
            <Svg path={bulbVector} dark={false} />
            <Text className="text-black text-xl mt-3" style={fontStyle.medium}>
              Ceiling Light
            </Text>
          </Box>
        </StyledView>
        <StyledView className="pt-3">
          <StyledView className="flex flex-1 text-center h-60 rounded-3xl  bg-blue-100  p-6">
            <LightsHeader title="AC" dark={false} toggleSize={35} />
          </StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  )
}

export default HomeScreen
