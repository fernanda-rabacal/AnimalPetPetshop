import ShopFront from "../../assets/Fachada-antiga-da-loja.jpg"
import Quote from '../../assets/quote-marks.svg'
import { AboutContainer, AboutContent, Card, Cards, HistoryText, Testimonials } from './styles'
import { FormerSubtitle, FormerTitle } from '../../components/tipography'


export function About(){
  return(
    <AboutContainer className="container">
      <AboutContent>
        <div>
          <FormerTitle color="green-primary">SOBRE NÓS</FormerTitle>
          <FormerSubtitle size="s">Nossa História</FormerSubtitle>
          <HistoryText size="xl">
            Nossa história começa em 2016, com apenas uma sala pequena e um espaço de tosa. Apesar das dificuldades iniciais, aos poucos nossa loja foi tomando forma, contratamos mais e mais funcionários, ampliamos o espaço, construímos o consultório veterinário e reformamos o espaço de tosa. Hoje contamos com 3 veterinários, 3 profissionais de banho e tosa, alem de um espaço quase 3 vezes maior do que o inicial. Aumentamos também a variedade de produtos vendidos, desde acessórios, produtos higiênicos, medicamentos, rações, petiscos, camas e muito mais. Mas não paramos por aqui, estamos sempre trabalhando para traer o maior conforto para nossos clientes e pretendemos aumentar mais ainda nossa marca!
          </HistoryText>
        </div>
        
        <img src={ShopFront} alt='antiga fachada da loja Animal Pet'/>
      </ AboutContent>
      
        <Testimonials>
          <FormerTitle color="green-primary" as="h4">Depoimentos</FormerTitle>
          <FormerSubtitle size="s" as="h2">Opiniões de nossos clientes</FormerSubtitle>

          <Cards>
            <Card>
              <img src={Quote} alt='quotation marks'/>
              <p><i>O espaço é aconchegante, arejado, bom atendimento e grande variedade de produtos. Recomendo também o banho e tosa pra seu pet.</i></p>
              <cite>
                <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Foto de um uma pessoa em seu perfil de rede social" />
                George Ribeiro
              </cite>
            </Card>

            <Card>
              <img src={Quote} alt='quotation marks'/>
              <p><i>Gosto muito dessa loja, todos trabalham com empenho e dedicação. O preço é ótimo e o banho e tosa é perfeito, o pet volta brincalhão e feliz pra casa. Super indico!!</i></p>
              <cite>
                <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="Foto de um uma pessoa em seu perfil de rede social" />
                Telma Leal
              </cite>
            </Card>
            
            <Card>
              <img src={Quote} alt='quotation marks'/>
              <p><i>Adorei o lugar, todos são muito educados, o espaço é confortável. Tem realmente uma grande variedade de opções, a tosa é muito boa e meu gato  é sempre muito bem cuidado pelos veterinarios!!</i></p>
              <cite>
                <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="Foto de um uma pessoa em seu perfil de rede social" />
                Fernanda Rabaçal
              </cite>
            </Card>
          </Cards>
        </Testimonials>
      </AboutContainer>
  )
}