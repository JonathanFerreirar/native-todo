import React from 'react'
import { StyleSheet } from 'react-native'
import { Link, Stack } from 'expo-router'

import ThemedText from '@/primitive/ThemedText'
import ThemedView from '@/primitive/ThemedView'

const NotFoundScreen = () => {
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesnt exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </React.Fragment>
  )
}

export default NotFoundScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
