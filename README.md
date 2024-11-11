# Plataforma de Compartilhamento de IRs e Capturas para Pedais de Guitarra 🎸

Este projeto é uma plataforma comunitária onde usuários podem se cadastrar, seguir uns aos outros e compartilhar arquivos de IRs e capturas para pedais de guitarra, promovendo uma troca rica de experiências e arquivos entre músicos e entusiastas de pedais. A aplicação foi desenvolvida com foco em facilitar a troca e interação dentro da comunidade.

## Índice
- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Recursos
- **Autenticação e Cadastro de Usuários**: Cadastro e login seguros, permitindo que usuários personalizem seus perfis e interajam uns com os outros.
- **Seguir e Interagir**: Sistema de seguidores para acompanhar os perfis e atividades de outros membros da comunidade.
- **Compartilhamento de Arquivos**: Upload e compartilhamento de arquivos de IRs e capturas para pedais de guitarra, permitindo fácil acesso e troca de configurações e sons.
- **Biblioteca de Arquivos**: Visualização de arquivos compartilhados, com fácil navegação para explorar e baixar arquivos de outros usuários.

## Tecnologias Utilizadas
- **Next.js**: Framework de React para renderização do lado do servidor e SEO otimizado.
- **TypeScript**: Adiciona tipos ao código, facilitando a manutenção e reduzindo erros.
- **Material UI**: Biblioteca de componentes para um design visual atraente e funcional.
- **Supabase**: Utilizado para autenticação e armazenamento de arquivos.
- **PostgreSQL**: Banco de dados relacional para armazenamento dos dados de usuários, conexões e arquivos.

## Instalação
1. Clone este repositório:
    ```bash
    git clone https://github.com/leonardo-marley/ir-and-captures.git
    cd ir-and-captures
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure suas variáveis de ambiente para autenticação e banco de dados:
   - Crie um arquivo `.env.local` e adicione:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=sua-url-supabase
     NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
     POSTGRES_DB_URL=sua-url-postgres
     ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5. Acesse `http://localhost:3000` no navegador para explorar a plataforma.

## Como Usar
1. **Cadastro e Login**: Crie uma conta ou faça login.
2. **Explorar a Comunidade**: Navegue pela plataforma e siga outros usuários para acompanhar seus uploads.
3. **Upload de Arquivos**: Compartilhe seus próprios arquivos de IRs e capturas.
4. **Interaja com Outros Músicos**: Explore e faça download de arquivos de outros membros, expandindo seu acervo de configurações.

## Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch com a sua feature (`git checkout -b feature/nova-feature`).
3. Comite suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença
Este projeto é licenciado sob a licença MIT.
