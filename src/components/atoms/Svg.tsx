import React from 'react'
import {View} from 'react-native'
import VectorImage from 'react-native-vector-image'

const Svg = ({dark, width = 30, height = 30, path}: any) => (
  <View>
    <VectorImage
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: width, height: height, tintColor: dark ? '#fff' : '#000'}}
      source={path}
    />
  </View>
)

export default Svg
