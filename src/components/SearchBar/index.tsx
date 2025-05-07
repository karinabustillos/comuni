import { Container, SearchInput, SearchIconButton, SearchIcon } from "./styles";

export function SearchBar() {
  return (
    <Container>
      <SearchInput placeholder="Buscar..." placeholderTextColor="#A9A9A9" />
      <SearchIconButton>
        <SearchIcon />
      </SearchIconButton>
    </Container>
  );
}
