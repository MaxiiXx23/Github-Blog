import { useState, useEffect } from 'react'

import { FaChevronLeft, FaExternalLinkAlt } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { AxiosResponse } from 'axios'

import { useParams } from 'react-router-dom'

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

import { apiAxios } from '../../lib/axios'
import { formatterDate } from '../../utils/formatterDate'

interface IIssueResponse {
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: string
  created_at: string
  body: string
}

interface IIssue {
  htmlUrl: string
  title: string
  login: string
  comments: string
  created_at: string
  body: string
}

export function Post() {
  const [issue, setIssue] = useState<IIssue>({} as IIssue)
  const { idIssue } = useParams()

  async function fetchIssue() {
    const response: AxiosResponse<IIssueResponse> = await apiAxios.get(
      `/repos/MaxiiXx23/Github-Blog/issues/${idIssue}`,
    )

    const {
      html_url: htmlUrl,
      title,
      user,
      comments,
      created_at: createdAt,
      body,
    } = response.data

    setIssue({
      htmlUrl,
      title,
      login: user.login,
      comments,
      created_at: createdAt,
      body,
    })
  }

  useEffect(() => {
    fetchIssue()
  }, [])

  const dateFormatted = formatterDate(issue.created_at)
  const totalComments = `${issue.comments} comentários.`

  return (
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
            <LinkBtn to={issue.htmlUrl} target="_blank">
              VER NO GITHUB
              <FaExternalLinkAlt size={12} />
            </LinkBtn>
          </WrapperLinks>
          <Title>{issue.title}</Title>
          {/* Wrapper badges */}
          <BadgeContainer>
            <Badge icon="FaGithub" text={issue.login} />
            <Badge icon="FaCalendarDay" text={dateFormatted} />
            <Badge icon="FaComment" text={totalComments} />
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
            {issue.body}
          </ReactMarkdown>
        </FormatterMarkdown>
      </PostTextContainer>
    </PostContainer>
  )
}
