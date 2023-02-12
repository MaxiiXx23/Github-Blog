import styled from 'styled-components'

export const ContainerMain = styled.main``

export const Content = styled.section`
  padding: 0rem 16rem 14.625rem 16rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.device.laptop} {
    padding: 0rem 8rem 14.625rem 8rem;
  }

  @media ${({ theme }) => theme.device.tabletM} {
    padding: 0rem 6rem 10rem 6rem;
  }

  @media ${({ theme }) => theme.device.tabletS} {
    padding: 0rem 4rem 8rem 4rem;
  }

  @media ${({ theme }) => theme.device.mobileL} {
    padding: 0rem 3.5rem 7rem 3.5rem;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    padding: 0rem 2.5rem 5rem 2.5rem;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    padding: 0rem 1.5rem 3rem 1.5rem;
  }
`
