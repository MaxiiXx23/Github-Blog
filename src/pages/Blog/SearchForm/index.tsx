import {
  SearchContainer,
  WrapperTitleAmount,
  Title,
  AmountPubli,
  WrapperInput,
  InputSearch,
} from './styles'

export function SearchForm() {
  return (
    <SearchContainer>
      {/* Title and amount publications */}
      <WrapperTitleAmount>
        <Title>Publicações</Title>
        <AmountPubli>41 publicações</AmountPubli>
      </WrapperTitleAmount>
      {/* WrapperForm and Input */}
      <WrapperInput>
        <InputSearch
          type="text"
          placeholder="Buscar conteúdo"
          autoComplete="off"
        />
      </WrapperInput>
    </SearchContainer>
  )
}
