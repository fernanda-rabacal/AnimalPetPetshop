import { TitleText } from "../../../../components/tipography";
import { formatMoney } from "../../../../utils/formatMoney";
import { Image, Info, Item } from "./styles";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
}

interface ProductProps {
  product: Product;
}

export function ProductCard({ product } : ProductProps){


  const formattedPrice = formatMoney(product.price);

  return(
    <Item key={product.id} to={`/products/${product.id}`}>
      <Image>
        <img src={product.image} alt={product.name} />
      </Image>

      <Info>
        <span className="name">{product.name}</span>
          <div>
            <TitleText size="m" color="green-primary" as="strong">
              R$ {formattedPrice}
            </TitleText>
          </div>
      </Info>
    </Item>        
  )
}