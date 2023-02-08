import { FaChevronLeft, FaExternalLinkAlt } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { Badge } from '../../components/Badge'

import {
  LinkBtn,
  InsideWrapper,
  PostCard,
  PostContainer,
  WrapperLinks,
  Title,
  BadgeContainer,
  PostTextContainer,
  FormatterMarkdown,
} from './styles'

export function Post() {
  const markdown = `### Projeto 03 - Módulo 03 - Trilha ReactJS Ignite 2022/2023 ### ***DT-Money*** #### Sobre o projeto:
   * DT-Money é um site que tem como objetivo facilitar a gestão de dinheiro tanto de entradas quanto de saídas, focando em API com JSON Server, performace e Context API
  
  
  ### Principais tecnologias usadas no desenvolvimento:
  
  * TypeScript
  * ReactJS(Vite)
  * react-hook-form
  * JSON Server
  * styled-components
  
  ### Bibliotecas em destaque:
  
  * zod
  * JSON Server
  * use-context-selector
  
  ### API usada:
  #### Front-end:
  * JSON Server (Biblioteca para criação de uma Full Fake API)
  
  ### Passo-a-passo para rodar a aplicação:
  1. Entre na pasta dt-money;
  2. use o comando: ***yarn*** ou ***npm install/i*** para instalar os pacotes;
  3. use o comando: ***yarn dev*** ou ***npm run dev*** para rodar a aplicação.
  `

  return (
    // container Post
    <PostContainer>
      {/* Card Post */}
      <PostCard>
        {/* inside div with padding */}
        <InsideWrapper>
          {/* Options backbutton and see github link */}
          <WrapperLinks>
            <LinkBtn to="/">
              <FaChevronLeft size={12} />
              VOLTAR
            </LinkBtn>
            <LinkBtn to={'/'}>
              VER NO GITHUB
              <FaExternalLinkAlt size={12} />
            </LinkBtn>
          </WrapperLinks>
          <Title>JavaScript data types and data structures</Title>
          {/* Wrapper badges */}
          <BadgeContainer>
            <Badge icon="FaGithub" text="MaxiiXx23" />
            <Badge icon="FaCalendarDay" text="Há 1 dia" />
            <Badge icon="FaComment" text="5 comentários" />
          </BadgeContainer>
        </InsideWrapper>
      </PostCard>
      {/* Post */}
      <PostTextContainer>
        {/* Inside Container */}
        <FormatterMarkdown>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {markdown}
          </ReactMarkdown>
        </FormatterMarkdown>
      </PostTextContainer>
    </PostContainer>
  )
}
