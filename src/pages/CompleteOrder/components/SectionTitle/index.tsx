import { ReactNode } from "react";
import { RegularText } from "../../../../components/tipography";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText size="l">{title}</RegularText>
        <RegularText>{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  );
}
