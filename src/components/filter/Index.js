import {InputSearch, FiltersContainer, SelectSearch, SelectOrder} from "../filter/Styled";

function Filters(props) {

  return <FiltersContainer>
      <InputSearch
        placeholder="Pesquisar"
        value={props.query}
        onChange={(ev) => props.setQuery(ev.target.value)}
      />

      <InputSearch
        type="number"
        placeholder="Preço mínimo"
        value={props.minPrice}
        onChange={(ev) => props.setMinPrice(ev.target.value)}
      />

      <InputSearch
        type="number"
        placeholder="Preço máximo"
        value={props.maxPrice}
        onChange={(ev) => props.setMaxPrice(ev.target.value)}
      />

      <span>
        <label htmlFo="sortingParameter">Ordenar por: </label>
        <SelectSearch
          name="sortingParameter"
          value={props.sortingParameter}
          onChange={(ev) => props.setSortingParameter(ev.target.value)}
        >
          <option value="">Título</option>
          <option value="price">Preço</option>
        </SelectSearch>
      </span>

      <SelectOrder
        value={props.order}
        onChange={(ev) => props.setOrder(ev.target.value)}
      >
        <option value={"asc"}>Crescente</option>
        <option value={"desc"}>Decrescente</option>
      </SelectOrder>

    </FiltersContainer> 
}
export default Filters;