import { FormerSubtitle, FormerTitle } from "../../components/tipography";
import { OurProductsContainer, ProductsContainer } from "./styles";
import { ProductCard } from "./components/ProductCard";
import { petFoods } from "../../data/products/petFoods"; 
import { medicines } from "../../data/products/medicines";
import { useMemo, useState } from "react";
import { Pagination } from "../../components/Pagination";


export function OurProducts(){
  const products = [...petFoods, ...medicines];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =  window.innerWidth < 550 ? 10 
  : window.innerWidth < 1024 ? 9 
  : window.innerWidth < 1244 ? 12 : 15;

  console.log(window.innerWidth)
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;

    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return(
    <OurProductsContainer className="container">
      <FormerTitle size="l" color="green-primary">
        NOSSOS PRODUTOS
      </FormerTitle>

      <FormerSubtitle size="l">
        Seleção dos melhores produtos
      </FormerSubtitle>

      <ProductsContainer>
        {currentTableData.map(product => {
          return(
            <ProductCard product={product} />
          )
        })}        
      </ProductsContainer>
      <Pagination
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={page => setCurrentPage(page)}
      />
    </OurProductsContainer>
  )
}