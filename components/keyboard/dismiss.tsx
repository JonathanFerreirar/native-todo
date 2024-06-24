import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

type DismissKeyboardProps = {
  children: React.ReactNode
}

export const dismissKeyboard = () => {
  Keyboard.dismiss()
}

const DismissKeyboard = ({ children }: DismissKeyboardProps) => {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboard
