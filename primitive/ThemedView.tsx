import { ScrollView, ScrollViewProps } from 'react-native'

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
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[{ backgroundColor, padding: 5 }, style]}
      {...otherProps}
    />
  )
}

export default ThemedView
