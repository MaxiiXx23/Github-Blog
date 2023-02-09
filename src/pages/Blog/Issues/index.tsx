import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import {
  IssuesContainer,
  List,
  IssueCard,
  IssueHeader,
  Title,
  IssueDate,
  WrapperTitle,
  WrapperDate,
  FormatterMarkdown,
} from './styles'

import { formatterDate } from '../../../utils/formatterDate'

interface ICardAPI {
  number: number
  title: string
  created_at: string
  body: string
}
interface IIssuesProps {
  listIssues: ICardAPI[]
}

export function Issues({ listIssues }: IIssuesProps) {
  return (
    <IssuesContainer>
      <List>
        {/* Item Card Issue */}
        {listIssues.map((issue) => {
          return (
            <IssueCard key={issue.number}>
              {/* Header */}
              <IssueHeader>
                <WrapperTitle>
                  <Title>{issue.title}</Title>
                </WrapperTitle>
                <WrapperDate>
                  <IssueDate>{formatterDate(issue.created_at)}</IssueDate>
                </WrapperDate>
              </IssueHeader>
              {/* Container  text Issue  */}
              <FormatterMarkdown>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {issue.body}
                </ReactMarkdown>
              </FormatterMarkdown>
            </IssueCard>
          )
        })}
      </List>
    </IssuesContainer>
  )
}
