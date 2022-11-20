import { Funnel } from "phosphor-react";
import { useContext, useState } from "react";
import { FormerTitle } from "../../../../components/tipography";
import { CartContext } from "../../../../contexts/CartContext";
import { FilterContainer, FilterOption } from "./styles";

export function FilterOptionsContainer() {
  const { handleToggle } = useContext(CartContext)

  return(
    <FilterContainer>
      <p>
        <Funnel size={28} weight="bold"/>
        Filtros
      </p>

      <FormerTitle>
        Por categorias
      </FormerTitle>

      <FilterOption className="form-check">
        <label htmlFor="alcoholic">
          <input
            type="checkbox"
            value="1"
            onChange={(e) => handleToggle(Number(e.target.value))}
            />
          <span className="checkmark"></span>
          Rações e petiscos
        </label>
      </FilterOption>

      <FilterOption className="form-check">
        <label htmlFor="alcoholic">
          <input
            type="checkbox"
            value={2}
            onChange={(e) => handleToggle(Number(e.target.value))}
            />
            <span className="checkmark"></span>
            Medicamentos
        </label>
      </FilterOption>
    </FilterContainer>
  )
}