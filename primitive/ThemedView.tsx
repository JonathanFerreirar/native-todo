import { type ViewProps, View } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

const ThemedView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  )

  return (
    <View style={[{ backgroundColor, padding: 5 }, style]} {...otherProps} />
  )
}

export default ThemedView
