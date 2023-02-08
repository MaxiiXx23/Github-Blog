import { FaExternalLinkAlt } from 'react-icons/fa'

import {
  CardApresentacion,
  ContainerBlog,
  WrapperAvatar,
  ContainerInfos,
  PrincipalInfos,
  WrapperNameLink,
  Name,
  LinkGit,
  Description,
  BadgeContainer,
  ContainerMain,
} from './styles'
import { SearchForm } from './SearchForm'
import { Badge } from '../../components/Badge'
import { Issues } from './Issues'

export function Blog() {
  return (
    <ContainerBlog>
      {/* Card Apresentacion */}
      <ContainerMain>
        <CardApresentacion>
          {/* Avatar User */}
          <WrapperAvatar>
            <img
              src="https://avatars.githubusercontent.com/u/48772842?v=4"
              alt=""
            />
          </WrapperAvatar>
          {/* Infos User */}
          <ContainerInfos>
            {/* Principals infos */}
            <PrincipalInfos>
              {/* Name and Link Github */}
              <WrapperNameLink>
                <Name>Max Jônatas</Name>
                <LinkGit href="#">
                  GITHUB <FaExternalLinkAlt size={12} />
                </LinkGit>
              </WrapperNameLink>
              <Description>
                Olá meu nome é Max Jonatas. Sou um programador focado no
                desenvolvimento FullStack Javascript/Typescript(Node.js, React e
                React Native).
              </Description>
            </PrincipalInfos>
            {/* Badge Infos User */}
            <BadgeContainer>
              <Badge icon="FaGithub" text="MaxiiXx23" />
              <Badge icon="FaBuilding" text="Rocketseat" />
              <Badge icon="FaUserFriends" text="9 seguidores" />
            </BadgeContainer>
          </ContainerInfos>
        </CardApresentacion>
      </ContainerMain>
      <SearchForm />
      {/* Issues Container (List grid with two columns) */}

      <ContainerMain>
        <Issues />
      </ContainerMain>
    </ContainerBlog>
  )
}
