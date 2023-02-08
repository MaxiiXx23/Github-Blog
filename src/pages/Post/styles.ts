import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const PostCard = styled.div`
  width: 100%;
  border: 0;
  border-radius: 10px;
  margin-top: -5.25rem;
  background-color: ${({ theme }) => theme['gray-800']};
`

export const InsideWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`

export const WrapperLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1.25rem;
`

export const LinkBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.6;
  text-decoration: none;
  color: ${({ theme }) => theme['blue-500']};
`

export const WrapperTitle = styled.div`
  width: 100%;
  margin: 1.25rem 0.5rem;
`

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${({ theme }) => theme['slate-100']};
`

export const BadgeContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
`
export const PostTextContainer = styled.div`
  width: 100%;
`

// Formatter tags redenrs for ReactMarkdown

export const FormatterMarkdown = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  padding: 2.5rem 2rem;
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
