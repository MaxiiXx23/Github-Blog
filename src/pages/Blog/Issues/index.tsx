import {
  IssuesContainer,
  List,
  IssueCard,
  IssueHeader,
  Title,
  IssueDate,
  TextIssueContainer,
  TextIssue,
  WrapperTitle,
  WrapperDate,
} from './styles'

export function Issues() {
  return (
    <IssuesContainer>
      <List>
        {/* Item Card Issue */}
        <IssueCard>
          {/* Header */}
          <IssueHeader>
            <WrapperTitle>
              <Title>JavaScript data types and data structures</Title>
            </WrapperTitle>
            <WrapperDate>
              <IssueDate>Há 1 dia</IssueDate>
            </WrapperDate>
          </IssueHeader>
          {/* Container  text Issue  */}
          <TextIssueContainer>
            <TextIssue>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = ; // foo is now a string foo = true; //
              foo is now a boolean
            </TextIssue>
          </TextIssueContainer>
        </IssueCard>
        <IssueCard>
          {/* Header */}
          <IssueHeader>
            <WrapperTitle>
              <Title>JavaScript data types and data structures</Title>
            </WrapperTitle>
            <WrapperDate>
              <IssueDate>Há 1 dia</IssueDate>
            </WrapperDate>
          </IssueHeader>
          {/* Container  text Issue  */}
          <TextIssueContainer>
            <TextIssue>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = ; // foo is now a string foo = true; //
              foo is now a boolean
            </TextIssue>
          </TextIssueContainer>
        </IssueCard>
        <IssueCard>
          {/* Header */}
          <IssueHeader>
            <WrapperTitle>
              <Title>JavaScript data types and data structures</Title>
            </WrapperTitle>
            <WrapperDate>
              <IssueDate>Há 1 dia</IssueDate>
            </WrapperDate>
          </IssueHeader>
          {/* Container  text Issue  */}
          <TextIssueContainer>
            <TextIssue>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = ; // foo is now a string foo = true; //
              foo is now a boolean
            </TextIssue>
          </TextIssueContainer>
        </IssueCard>
        <IssueCard>
          {/* Header */}
          <IssueHeader>
            <WrapperTitle>
              <Title>JavaScript data types and data structures</Title>
            </WrapperTitle>
            <WrapperDate>
              <IssueDate>Há 1 dia</IssueDate>
            </WrapperDate>
          </IssueHeader>
          {/* Container  text Issue  */}
          <TextIssueContainer>
            <TextIssue>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = ; // foo is now a string foo = true; //
              foo is now a boolean
            </TextIssue>
          </TextIssueContainer>
        </IssueCard>
      </List>
    </IssuesContainer>
  )
}
