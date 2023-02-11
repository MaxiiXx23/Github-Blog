import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const IssuesContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
  row-gap: 2rem;
`

export const IssueCard = styled.li`
  width: 100%;
`

export const WrapperIssue = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  row-gap: 2rem;

  border: 0;
  border-radius: 10px;

  background-color: ${({ theme }) => theme['gray-700']};
`

export const IssueHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  // gap: 1rem;
`

export const WrapperTitle = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled.span`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${({ theme }) => theme['slate-100']};
`
export const WrapperDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IssueDate = styled.span`
  margin-top: 0.875rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme['slate-500']};
`

export const FormatterMarkdown = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  text-align: left;
  line-height: 1.6;
  color: ${({ theme }) => theme['slate-400']};

  ul {
    padding-left: 2rem;
  }
  ol {
    padding-left: 2rem;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme['blue-500']};
  }

  a:hover {
    text-decoration: underline;
    transition: 0.3s;
  }
  img {
    width: 100%;
    height: 100%;
  }
`
