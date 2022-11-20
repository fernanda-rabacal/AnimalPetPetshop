import { FormerSubtitle, FormerTitle } from "../../components/tipography";
import { OurProductsContainer, ProductsAndFilters, ProductsContainer } from "./styles";
import { ProductCard } from "./components/ProductCard";
import { useContext, useEffect, useMemo, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { FilterOptionsContainer } from "./components/Filter";
import { CartContext } from "../../contexts/CartContext";

export function OurProducts(){
  const [currentPage, setCurrentPage] = useState(1);
  const { checked, filterProductsPerCategory, products } = useContext(CartContext)
  const itemsPerPage =  window.innerWidth < 550 ? 10 
  : window.innerWidth < 1024 ? 9 : 12;
  
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