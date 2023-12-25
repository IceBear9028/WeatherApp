import {Button, Image, Text, View} from 'react-native';
import {useInitialStartAppPath} from '~/hooks/commonHooks.ts';
import {MAIN_PATH} from '@screens/screenPath.ts';
import {style} from './style.ts';
import {ScreenLayout} from '@components/atom/commons/ScreenLayout.tsx';

const StartScreen = ({navigation}: any) => {
  const {startApp} = useInitialStartAppPath();

  function buttonEvent() {
    startApp();
    navigation.navigate(MAIN_PATH);
  }
  return (
    <ScreenLayout style={style.container}>
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
    </ScreenLayout>
  );
};

export default StartScreen;
