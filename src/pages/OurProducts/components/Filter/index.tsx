import { Funnel } from "phosphor-react";
import { useContext, useState } from "react";
import { FormerTitle } from "../../../../components/tipography";
import { CartContext } from "../../../../contexts/CartContext";
import { FilterContainer, FilterOption } from "./styles";

const categoryCheckbox = [
  {
    value: 1,
    name: "Rações e petiscos"
  },
  {
    value: 2,
    name: "Medicamentos"
  }
]

const priceCheckbox = [
  {
    value: 3,
    name: "Até R$ 25,00"
  },
  {
    value: 4,
    name: "R$ 25,00 a R$ 50,00"
  },
  {
    value: 5,
    name: "R$ 50,00 a R$ 100,00"
  },
  {
    value: 6,
    name: "R$ 100,00 a R$ 200,00"
  },
  {
    value: 7,
    name: "Mais de R$ 200,00"
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

    <div>
      <FormerTitle>
        Por categorias
      </FormerTitle>

        {categoryCheckbox.map(checkbox => {
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
    </div>

    <div>
      <FormerTitle>
        Por preço
      </FormerTitle>

      {priceCheckbox.map(checkbox => {
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
      </div>
    </FilterContainer>
  )
}