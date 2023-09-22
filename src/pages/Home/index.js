import {
    Container,
    Header,
    Section,
    Footer,
  } from './styles';
  
  // ...
  
  export default function HomePage() {
    return (
      <Container>
        <Header>
          <h1>Bem-vindo à Sintonia</h1>
          <p>Mundo da Músicas e Álbuns - Projeto DAC</p>
        </Header>
        <main>
          <Section className="about-section">
          <h2>Sobre o Projeto</h2>
          <p>
            Aqui na Sintonia, estamos mergulhando profundamente na mágica da música.
            Em nosso emocionante projeto para a disciplina de Desenvolvimento de Aplicações Corporativas (DAC),
            estamos explorando o vasto mundo da criação de músicas e álbuns, proporcionando uma experiência única
            para nossos usuários.
          </p>
          </Section>
        </main>
  
        <Footer>
          <p>&copy; {new Date().getFullYear()} Sintonia. Todos os direitos reservados.</p>
        </Footer>
      </Container>
    );
  }
  