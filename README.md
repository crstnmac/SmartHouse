
# Smart House

[WIP] Convert (this)[https://dribbble.com/shots/15808474-Smart-House-App] concept to a real world proj


## Installation


<img src="https://github.com/crstnmac/SmartHouse/blob/main/preview.png" width=350 height=600>

Install dependencies with yarn

```bash
  cd SmartHouse
  yarn
```

Link assests to the project
    
```bash
  npx react-native-asset
```

To build svg assests

```bash
  yarn react-native-vector-image generate
```

Make sure you have a [react-native](https://reactnative.dev/docs/environment-setup) dev setup in your system
```bash
  yarn react-native run-android //android
  yarn react-native run-ios //ios
```


If styles dont work use the below cmd to hardclean the proj

`In Windows for Android`

```
del %appdata%\Temp\react-native-* & cd android & gradlew clean & cd .. & del node_modules/ & npm cache clean --force & yarn install & react-native run-android
```