import * as ImagePicker from 'expo-image-picker'

type PickImage = {
  setImage: (value: string) => void
}

export const pickImage = async ({ setImage }: PickImage) => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  })

  if (!result.canceled) {
    setImage(result.assets[0].uri)
  }
}
