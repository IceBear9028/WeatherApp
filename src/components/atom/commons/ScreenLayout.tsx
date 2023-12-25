import {View, ViewStyle} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenLayoutType extends React.ComponentProps<typeof View> {
  style?: ViewStyle;
}

export const ScreenLayout = (props: ScreenLayoutType) => {
  const insets = useSafeAreaInsets();
  const customStyle = props.style ? props.style : {};
  return (
    <View
      {...props}
      style={{
        ...customStyle,
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}></View>
  );
};
