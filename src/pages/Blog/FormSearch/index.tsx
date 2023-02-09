import {
  SearchContainer,
  WrapperTitleAmount,
  Title,
  AmountPubli,
  WrapperInput,
  InputSearch,
} from './styles'

import { useFormContext } from 'react-hook-form'

interface IFormSearchProps {
  totalCountPublic: string
}

export function FormSearch({ totalCountPublic }: IFormSearchProps) {
  const { register } = useFormContext()

  const totalPublications = totalCountPublic || '0'

  return (
    <SearchContainer>
      {/* Title and amount publications */}
      <WrapperTitleAmount>
        <Title>Publicações</Title>
        <AmountPubli>{totalPublications} publicações</AmountPubli>
      </WrapperTitleAmount>
      {/* WrapperForm and Input */}
      <WrapperInput>
        <InputSearch
          type="text"
          {...register('search')}
          placeholder="Buscar conteúdo"
          autoComplete="off"
        />
      </WrapperInput>
    </SearchContainer>
  )
}
