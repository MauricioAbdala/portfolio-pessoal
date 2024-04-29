import React from 'react'
import { Container, Content } from '../../../styles/perfil_styles'



export default function Perfil() {
    return (
        <Container>
            <Content>
                <div>
                    <h2>Sobre Mim</h2><br />
                    <h3>Formação</h3>
                    <p>Kenzie Academy Brasil, Desenvolvimento-Web Full-Stack | FEV DE 2023- FEV DE 2024
                        Curso livre com 2.000h.</p><br />
                    <h3>Experiência</h3>
                    <p>Atualmente estou em transição de carreira para a área da tecnologia  </p>
                    <ul>
                        <li>Domínio em: HTML5, CSS3, Vanilla Js, JavaScript(ES6+), noções de UX, React, Next.js, TypeScript, Express, consumo de APIs,Python, Django, Node.js</li>
                        <li>Conhecimento em banco de dados: PostgreSQL, MySQL</li>
                        <li>Inglês básico</li>
                        <li> Espanhol intermediário</li>
                    </ul>
                    <h3>Principais projetos</h3>
                    <a href="https://react-entrega-kenzie-hub-mauricio-abdala.vercel.app/">Kenzie Hub</a>
                    <p>O objetivo deste projeto foi criar uma aplicação completa com formulário, validação de cadastro,
                        autenticação e Login, permissão e bloqueio de rotas, estilização em CSS3.<br />
                        Tecnologias utilizadas:<br />                        React + Vite</p>
                    <a href="https://react-entrega-s1-template-nukenzie-mauricio-abdala-demlngzd6.vercel.app/">Nu Kenzie</a>
                    <p>O objetivo deste projeto foi criar uma aplicação de controle financeiro em React e fazer a configuração
                        para que ele pudesse funcionar no Vite com HMR e regras ESlist.<br />
                        Tecnologias utilizadas.
                        React + Vite</p>
                    <a href="https://react-entrega-s3-template-hamburgueria-mauricio-abdala.vercel.app/">Burguer Kenzie</a>
                    <p>O objetivo deste projeto foi implementar um conjunto de funcionalidades e estilização a um projeto existente,
                        colocando em prática os conhecimentos para acessar a lista de produto desta API , simulação de um carrinho de
                        compras com React. Além disso foi utilizada a estilização em CSS3 com o SASS.<br />
                        Tecnologias utilizadas.
                        React, CSS3</p>
                </div>
            </Content>
        </Container>
    )
}
