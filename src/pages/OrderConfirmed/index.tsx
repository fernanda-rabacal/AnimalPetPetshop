import { OrderConfirmedContainer, OrderDetails } from "./styles";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { RegularText, TitleText } from "../../components/tipography";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { useTheme } from "styled-components";

export function OrderConfirmedPage(){
  const { colors } = useTheme()

  return(
    <OrderConfirmedContainer>
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>
      <section>
        <OrderDetails>
       {/*  <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["green-primary"]}
            text={
              <RegularText>
                Entrega em <strong>{state.street}</strong>, {state.number}
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
 */}
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["base-blue"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["green-primary-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetails>
        <img src={confirmedOrderIllustration} />
      </section>

    </OrderConfirmedContainer>
  )
}