import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

export function AddressForm(){
  const { register, formState } = useFormContext();

  return(
    <AddressFormContainer>
      <Input 
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")} 
        />
      <Input 
        placeholder="Rua"
        type="text"
        className="street"
        {...register("street")}
        />
      <Input 
        placeholder="Número"
        type="number"
        {...register("number")}
        />
      <Input 
        placeholder="Complemento"
        className="complement"
        {...register("complement")} 
        />
      <Input 
        placeholder="Bairro" 
        {...register("district")}
        />
      <Input 
        placeholder="Cidade"
        {...register("city")}
        />
      <Input 
        placeholder="UF"
        {...register("uf")}
        />
    </AddressFormContainer>
  )

}