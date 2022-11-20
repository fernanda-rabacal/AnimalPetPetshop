import { Funnel } from "phosphor-react";
import { useContext, useState } from "react";
import { FormerTitle } from "../../../../components/tipography";
import { CartContext } from "../../../../contexts/CartContext";
import { FilterContainer, FilterOption } from "./styles";

const checkboxValues = [
  {
    value: 1,
    name: "Rações e petiscos"
  },
  {
    value: 2,
    name: "Medicamentos"
  }
]

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

        {checkboxValues.map(checkbox => {
          return(
            <FilterOption>
              <label htmlFor={checkbox.name}>
                <input
                  type="checkbox"
                  value={checkbox.value}
                  onChange={(e) => handleToggle(Number(e.target.value))}
                  />
                <span className="checkmark"></span>
                {checkbox.name}
              </label>
            </FilterOption>
          )
        })}
    </FilterContainer>
  )
}