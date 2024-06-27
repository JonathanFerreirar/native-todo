import { ScrollView, ScrollViewProps, View } from 'react-native'

import DismissKeyboard from '@/components/keyboard/dismiss'
import { useThemeColor } from '@/hooks/useThemeColor'

export type ThemedViewProps = ScrollViewProps & {
  lightColor?: string
  darkColor?: string
}

const ThemedView = ({
  lightColor,
  darkColor,
  style,
  ...otherProps
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return (
    <DismissKeyboard>
      <View style={[{ backgroundColor, padding: 5 }, style]} {...otherProps} />
    </DismissKeyboard>
  )
}

export default ThemedView
