import { Funnel } from "phosphor-react";
import { useContext, useState } from "react";
import { FormerTitle } from "../../../../components/tipography";
import { CartContext } from "../../../../contexts/CartContext";
import { FilterContainer, FilterOption } from "./styles";

export enum FilterOptions {
  "PET_FOODS" = 1,
  "MEDICINES"= 2,
  "25_MINUS" = 3,
  "50_MINUS" = 4,
  "100_MINUS" = 5,
  "200_MINUS" = 6,
  "200_PLUS" = 7
}

const categoryCheckbox = [
  {
    value: FilterOptions.PET_FOODS,
    name: "Rações e petiscos"
  },
  {
    value: FilterOptions.MEDICINES ,
    name: "Medicamentos"
  }
]

const priceCheckbox = [
  {
    value: FilterOptions["25_MINUS"],
    name: "Até R$ 25,00"
  },
  {
    value: FilterOptions["50_MINUS"],
    name: "R$ 25,00 a R$ 50,00"
  },
  {
    value: FilterOptions["100_MINUS"],
    name: "R$ 50,00 a R$ 100,00"
  },
  {
    value: FilterOptions["200_MINUS"],
    name: "R$ 100,00 a R$ 200,00"
  },
  {
    value: FilterOptions["200_PLUS"],
    name: "Mais de R$ 200,00"
  }
]

export function FilterOptionsContainer() {
  const { handleToggle } = useContext(CartContext)

  return(
    <FilterContainer>
      <p>
        <Funnel size={28} weight="fill"/>
        Filtros
      </p>

    <div>
      <FormerTitle>
        Por categorias
      </FormerTitle>

        {categoryCheckbox.map(checkbox => {
          return(
            <FilterOption key={checkbox.value}>
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
            <FilterOption key={checkbox.value}>
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