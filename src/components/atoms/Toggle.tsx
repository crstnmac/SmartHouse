import React from 'react'
import Switch from 'react-native-switch-toggles'
import {Text} from 'react-native'
import fontStyle from '../../utils/fonts'

const Toggle = ({isOn, setIsOn, toggleSize = 25}: any) => (
  <Switch
    size={toggleSize}
    value={isOn}
    onChange={value => setIsOn(value)}
    activeTrackColor={'#fff'}
    activeThumbColor={'#000'}
    inactiveTrackColor={'#fff'}
    inactiveThumbColor={'#000'}
    renderOffIndicator={() => (
      <Text
        className="text-black"
        style={{...fontStyle.bold, fontSize: toggleSize / 2}}>
        off
      </Text>
    )}
    renderOnIndicator={() => (
      <Text
        className="text-black"
        style={{...fontStyle.bold, fontSize: toggleSize / 2}}>
        on
      </Text>
    )}
  />
)

export default Toggle
