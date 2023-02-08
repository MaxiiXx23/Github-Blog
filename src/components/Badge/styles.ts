import styled from 'styled-components'

export const BadgeWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;

  line-height: 1.6;
  color: ${({ theme }) => theme['slate-300']};

  svg {
    color: ${({ theme }) => theme.white};
    opacity: 0.5;
  }
`
