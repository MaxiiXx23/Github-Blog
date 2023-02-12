import { FaChevronLeft, FaExternalLinkAlt } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

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

import { Badge } from '../../components/Badge'

import { formatterDate } from '../../utils/formatterDate'
import { useGetIssueGit } from '../../hooks/useGetIssueGit'

export function Post() {
  const issue = useGetIssueGit()

  const dateFormatted = formatterDate(issue.created_at)
  const totalComments = `${issue.comments} comentários.`

  return (
    <PostContainer>
      <PostCard>
        <InsideWrapper>
          <WrapperLinks>
            <LinkBtn to="/">
              <FaChevronLeft size={12} />
              VOLTAR
            </LinkBtn>
            <LinkBtn to={issue.htmlUrl} target="_blank">
              VER NO GITHUB
              <FaExternalLinkAlt size={12} />
            </LinkBtn>
          </WrapperLinks>
          <Title>{issue.title}</Title>
          <BadgeContainer>
            <Badge icon="FaGithub" text={issue.login} />
            <Badge icon="FaCalendarDay" text={dateFormatted} />
            <Badge icon="FaComment" text={totalComments} />
          </BadgeContainer>
        </InsideWrapper>
      </PostCard>
      <PostTextContainer>
        <FormatterMarkdown>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {issue.body}
          </ReactMarkdown>
        </FormatterMarkdown>
      </PostTextContainer>
    </PostContainer>
  )
}
