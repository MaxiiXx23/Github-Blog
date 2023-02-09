import styled from 'styled-components'

export const ContainerBlog = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerMain = styled.div`
  width: 100%;
`

export const CardApresentacion = styled.div`
  margin-top: -5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background-color: ${({ theme }) => theme['gray-800']};
  border: 0;
  border-radius: 10px;
`

export const WrapperAvatar = styled.div`
  width: 9.25rem;
  height: 9.25rem;

  border: 0;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`

export const PrincipalInfos = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`
export const WrapperNameLink = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
`
export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${({ theme }) => theme['slate-100']};
`

export const LinkGit = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${({ theme }) => theme['blue-500']};
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  line-height: 1.6;
  color: ${({ theme }) => theme['slate-400']};
`

export const FormContainerMain = styled.form`
  width: 100%;
`

export const BadgeContainer = styled.div`
  // width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1.5rem;
`
