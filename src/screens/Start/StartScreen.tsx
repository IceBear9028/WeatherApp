import {Button, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useInitialStartAppPath} from '~/hooks/commonHooks.ts';
import {MAIN_PATH} from '@screens/screenPath.ts';
import {style} from './style.ts';

const StartScreen = ({navigation}: any) => {
  const insets = useSafeAreaInsets();
  const {startApp} = useInitialStartAppPath();

  function buttonEvent() {
    startApp();
    navigation.navigate(MAIN_PATH);
  }
  return (
    <View
      style={{
        ...style.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Image
        style={style.mainImg}
        source={require('@assets/image/MainWeatherImg.png')}
      />
      <View style={style.textContainer}>
        <Text style={style.title}>오늘의 날씨를 {'\n'}한눈에 확인하세요!</Text>
      </View>
      <View style={style.buttonContainer}>
        <Button title={'Get Start'} onPress={buttonEvent} />
      </View>
    </View>
  );
};

export default StartScreen;
