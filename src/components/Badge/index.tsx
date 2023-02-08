import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaComment,
  FaCalendarDay,
} from 'react-icons/fa'

import { BadgeWrapper } from './styles'

type VariantIcons =
  | 'FaExternalLinkAlt'
  | 'FaGithub'
  | 'FaBuilding'
  | 'FaUserFriends'
  | 'FaComment'
  | 'FaCalendarDay'

interface IBadgeProps {
  icon: VariantIcons
  text: string
}

const icons: { [key: string]: any } = {
  FaExternalLinkAlt: <FaExternalLinkAlt size={18} />,
  FaGithub: <FaGithub size={18} />,
  FaBuilding: <FaBuilding size={18} />,
  FaUserFriends: <FaUserFriends size={18} />,
  FaComment: <FaComment size={18} />,
  FaCalendarDay: <FaCalendarDay size={18} />,
}

export function Badge({ icon, text }: IBadgeProps) {
  return (
    <BadgeWrapper>
      {icons[icon]}
      {text}
    </BadgeWrapper>
  )
}
