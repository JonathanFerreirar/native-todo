import React from 'react'
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native'

import cn from '@/utils/cn'

type ButtonProps = {
  children: React.ReactNode
  customStyle?: string
  variant?: 'primary' | 'outline' | 'link'
} & React.ComponentPropsWithoutRef<typeof Pressable>

const Button = React.forwardRef<View | null, ButtonProps>(
  (
    { children, style, customStyle, variant = 'primary', ...pressableProps },
    ref,
  ) => {
    const variantTypes = {
      primary:
        'w-full items-center justify-center rounded-md bg-primary p-3 active:bg-primary/60',
      outline:
        'w-full items-center justify-center rounded-md bg-transparent border-primary  border p-3 active:border-primary/60',
      link: 'w-full items-center justify-center rounded-md bg-transparent border-b-primary  border-b p-3 active:border-b-primary/60',
    }
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        className={cn(variantTypes[variant], customStyle)}
      >
        <Text className="text-xl font-semibold text-white">{children}</Text>
      </Pressable>
    )
  },
)
export default Button
