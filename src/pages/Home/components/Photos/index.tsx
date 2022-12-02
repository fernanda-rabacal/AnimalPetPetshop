import { InfinityCarousel } from "../../../../components/InfinityCarrousel/Carousel";
import { FormerTitle } from "../../../../components/tipography";
import { productsTypeData } from "../../../../data/products/productsTypeData";
import { PhotosAndProductsContainer, ProductsDisplay, ProductsDisplayItem } from "./styles";

export function PhotoSection(){
  return(
    <PhotosAndProductsContainer className="container">
      <FormerTitle size="l">Favoritos</FormerTitle>
      <ProductsDisplay>
        {productsTypeData.map(item => {
          return(
            <ProductsDisplayItem key={item.id}>
              <img src={item.image}/>
              <p>{item.name}</p>
            </ProductsDisplayItem>
          )
        })}
      </ProductsDisplay>

      <InfinityCarousel />
    </PhotosAndProductsContainer>
  )
}