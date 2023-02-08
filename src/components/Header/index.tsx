import CoverImg from '../../assets/Cover.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoverImg} alt="" title="Cover-Image" />
    </HeaderContainer>
  )
}
