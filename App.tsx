import React from 'react';
import {RecoilRoot} from 'recoil';
import {MAIN_PATH, START_PATH} from '@screens/screenPath.ts';
import {NavigationContainer} from '@react-navigation/native';
import {useInitialStartAppPath} from '~/hooks/commonHooks.ts';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import MainScreen from '@screens/Main/MainScreen.tsx';
import StartScreen from '@screens/Start/StartScreen.tsx';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const {startPath} = useInitialStartAppPath();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={startPath}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={START_PATH} component={StartScreen} />
        <Stack.Screen name={MAIN_PATH} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <Navigator />
    </RecoilRoot>
  );
}

export default App;
