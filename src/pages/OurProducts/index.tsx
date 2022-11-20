import { FormerSubtitle, FormerTitle } from "../../components/tipography";
import { OurProductsContainer, ProductsAndFilters, ProductsContainer } from "./styles";
import { ProductCard } from "./components/ProductCard";
import { petFoods } from "../../data/products/petFoods"; 
import { medicines } from "../../data/products/medicines";
import { useContext, useEffect, useMemo, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { FilterOptionsContainer } from "./components/Filter";
import { CartContext } from "../../contexts/CartContext";

export function OurProducts(){
  const productTest = [...petFoods, ...medicines]
  const [products, setProducts] = useState(productTest)
  const [currentPage, setCurrentPage] = useState(1);
  const { checked } = useContext(CartContext)
  const itemsPerPage =  window.innerWidth < 550 ? 10 
  : window.innerWidth < 1024 ? 9 : 12;

  function filterProductsPerCategory(checked: number[]) {
    let newProducts = []

    if(checked.includes(1)) {
      const petfoods = productTest.filter((product) => {
        return product.category === "petfood"
      })

      console.log(petfoods)
      newProducts.push(...petfoods)
    }

    if(checked.includes(2)) {
      const medicine = productTest.filter((product) => {
        return product.category === "medicine"
      })

      console.log(medicine)
      newProducts.push(...medicine)
    }

    if(checked.length === 0) {
      return setProducts(productTest)
    }

    console.log(newProducts, "teste")
    setProducts(newProducts)
  }

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;

    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);

  useEffect(() => {
    filterProductsPerCategory(checked)
  }, [checked])

  return(
    <OurProductsContainer className="container">
      <FormerTitle size="l" color="green-primary">
        NOSSOS PRODUTOS
      </FormerTitle>

      <FormerSubtitle size="l">
        Seleção dos melhores produtos
      </FormerSubtitle>

      <ProductsAndFilters>
        <FilterOptionsContainer />

        <ProductsContainer>
          {currentTableData.map(product => {
            return(
              <ProductCard key={product.id} product={product} />
            )
          })}        
        </ProductsContainer>
      </ProductsAndFilters>

      <Pagination
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={page => setCurrentPage(page)}
      />
    </OurProductsContainer>
  )
}