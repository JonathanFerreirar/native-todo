import React from 'react'
import { TextInput } from 'react-native'

import cn from '@/utils/cn'

type InputProps = {
  customStyle?: string
} & React.ComponentPropsWithoutRef<typeof TextInput>

const Input = React.forwardRef<TextInput | null, InputProps>(
  ({ customStyle, ...inputProps }, ref) => {
    return (
      <TextInput
        ref={ref}
        placeholderTextColor="#00000033"
        {...inputProps}
        className={cn(
          'w-full rounded-md text-base font-medium bg-white py-3 text-black px-2',
          customStyle,
        )}
      />
    )
  },
)
export default Input
