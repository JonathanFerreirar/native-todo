import React from 'react'
import { Image, Text, View } from 'react-native'

import cn from '@/utils/cn'

type ProfileProps = {
  url: string
  alt: string
  size?: 'default' | 'big'
}

const Profile = ({ url, alt, size = 'default' }: ProfileProps) => {
  const isBig = size === 'big'

  const imgSize = isBig ? 'h-60 w-60' : 'h-8 w-8'

  return url ? (
    <Image
      source={{
        uri: url,
      }}
      alt="User profile foto"
      className={cn(imgSize, 'ml-5  rounded-full', 'border-primary border')}
    />
  ) : (
    <View
      className={cn(
        'ml-5 items-center justify-center rounded-full bg-white',
        imgSize,
      )}
    >
      {alt && (
        <Text className={cn('text-xl font-bold', isBig && 'text-8xl')}>
          {alt.charAt(0).toLocaleUpperCase()}
        </Text>
      )}
    </View>
  )
}

export default Profile
