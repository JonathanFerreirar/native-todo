import React from 'react'
import { View } from 'react-native'
import { RadioButtons } from 'rn-inkpad'

type Radios = React.ComponentPropsWithoutRef<typeof RadioButtons>

type CreateCheckProps = Omit<Radios, 'values'>

const CreateCheck = ({ ...props }: CreateCheckProps) => {
  return (
    <View className="flex-row items-center justify-center gap-3">
      <RadioButtons
        {...props}
        iconColor="#F6640A"
        orientation="horizontal"
        gapHorizontal={70}
        iconSize={25}
        textColor="white"
        textStyle={{
          fontSize: 16,
          fontWeight: '500',
        }}
        defaultChecked={0}
        values={[
          { text: 'Work', value: 'work' },
          { text: 'Project', value: 'project' },
        ]}
      />
    </View>
  )
}

export default CreateCheck
