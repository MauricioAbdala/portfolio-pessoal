import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Mauricio Abdala</Name><br />
          <Intro>Desenvolvedor FullStack com sólidas bases em JavaScript,
            HTML5, CSS3 e Node.js, domínio em tecnologias como diversos frameworks e libs, controle de versão Git ,
            Git Hub, criação de APIs Restfull, noções de UI/UX, PowerBI e criação de conteúdo para o YouTube.
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/foto.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}
