import styled from "styled-components";

interface TitleTextProps {
  color?: "headline" | "green-primary" | 'bg-dark'
  size?: "s" | "m" | "l"
  weight?: "400" | "700"
}

interface RegularTextProps {
  color?: "white" | "paragraph"
  size?: "m" | "l" | "xl"
  weight?: "400" | "700"
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({theme, color}) => theme.colors[`${color ?? "headline"}`]};
  font-size: ${({theme, size}) => theme.textSizes[`title-${size ?? "m"}`]};
  line-height: 150%;
`


export const RegularText = styled.p<RegularTextProps>`
  color: ${({theme, color}) => theme.colors[`${color ?? "paragraph"}`]};
  font-size: ${({theme, size}) => theme.textSizes[`text-regular-${size ?? "m"}`]};
  line-height: 130%;
  letter-spacing: 0.05rem;
  font-weight: ${({weight}) => weight ?? "400" };
`

export const FormerTitle = styled(TitleText)`
  margin-bottom: 0; 
  text-transform: uppercase;
  letter-spacing: 0.08rem;
`
export const FormerSubtitle = styled(TitleText)`
  margin-top: 0;
  line-height: 3.9rem;
  margin-bottom: 5rem;
`