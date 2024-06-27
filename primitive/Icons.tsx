import React from 'react'
import { Image } from 'react-native'

import Project from '@/assets/images/icons/project.png'
import Work from '@/assets/images/icons/work.png'

type IconProps = React.ComponentPropsWithoutRef<typeof Image>

const WorkIcon = ({ ...props }: IconProps) => {
  return <Image className="h-5 w-5" alt="work icon" source={Work} {...props} />
}

const ProjectIcon = ({ ...props }: IconProps) => {
  return (
    <Image className="h-5 w-5" alt="project icon" source={Project} {...props} />
  )
}

export default {
  WorkIcon,
  ProjectIcon,
}
