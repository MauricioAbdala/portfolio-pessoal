import React from 'react'
import { Container, Content } from '../../../styles/perfil_styles'



export default function Perfil() {
    return (
        <Container>
            <Content>
                <div>
                    <h2>Sobre Mim</h2><br />
                    <h3>Formação Curso Profissionalizante</h3>
                    <p>Kenzie Academy Brasil, Desenvolvimento-Web Full-Stack | FEV DE 2023- FEV DE 2024
                        Curso livre com 2.000h.</p><br />
                    <h3>Experiência</h3>
                    <p>Bootcamp na Kenzie Academy em web desenvolvimento FullStack </p><br />
                    <h3>Síntese de qualificações</h3>
                    <ul>
                        <li>Domínio em: HTML5, CSS3, JavaScriptVanilla, (ES6+), Node.js e noções de UX\UI</li>
                        <li>Bibliotecas mais utilizadas : React, Sass, Bootstrap, Handlebars, Axios</li>
                        <li>Frameworks: Vite, Express, Next.js, Nest.js, Jango</li>
                        <li>Linguagens de programação: JavaScript, TypeScript, Python</li>
                        <li>Bancos de dados: PostgreSQL, MySQL</li>
                        <li>Sistema operacional: Windows</li>
                        <li>Programação orientada a objeto: OOP</li>
                        <li>Análise de dados PowerBI, criação de Dashboards interativos</li>
                        <li>Inglês básico</li>
                        <li> Espanhol intermediário</li>
                    </ul><br />
                    <h3>Cursos e Certificados</h3>
                    <ul>
                        <li>Simplifica Treinamentos, Power BI Express</li>
                        <li>Comunidade Data Driven, Power BI Discovery</li>
                        <li>Udemy, JavaScript do básico ao avançado(c/Node.js e projetos)</li>
                        <li>Kenzie Academy, Soft Skills</li>
                    </ul><br />
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
