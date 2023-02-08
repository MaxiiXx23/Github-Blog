import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4.5rem;
  gap: 0.75rem;
`

export const WrapperTitleAmount = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${({ theme }) => theme['slate-300']};
`
export const AmountPubli = styled.span`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme['slate-500']};
`
export const WrapperInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`

export const InputSearch = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme['gray-600']};
  border-radius: 6px;

  background-color: ${({ theme }) => theme['black-500']};

  color: ${({ theme }) => theme['slate-400']};
  line-height: 1.6;

  &::placeholder {
    line-height: 1.6;
    color: ${({ theme }) => theme['gray-500']};
  }

  &:focus {
    border-color: ${({ theme }) => theme['blue-500']};
  }
`
