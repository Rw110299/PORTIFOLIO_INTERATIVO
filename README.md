# Portfólio Interativo

## Descrição

O **Portfólio Interativo** é uma plataforma acadêmica e profissional que permite:

- Navegar por **108 projetos** divididos em grupos (Fundamentos, Frontend, Backend, Cloud/DevOps e Avançados)
- Visualizar, editar e testar código em **sandbox seguro** (JavaScript e Python)
- Interagir com um **chat AI +18** para aprendizado avançado
- Acompanhar o **progresso por projeto e usuário**
- Exportar o portfólio em **PDF** para apresentação profissional

O projeto combina funcionalidades de **portfólio profissional** e **documentação acadêmica**, permitindo exibição e execução prática de todos os projetos.

---

## **Funcionalidades Principais**

1. **Frontend**
   - Páginas: Home, Grupos, Projetos, Projeto Individual, Login, Registro, Sobre, Chat AI
   - Menu de navegação consistente
   - Sandbox de execução de código (JS e Python via Pyodide)

2. **Backend**
   - Servidor Python (Flask ou Django)
   - APIs para autenticação, progresso e chat AI
   - Scripts Python dos projetos armazenados em `backend/projetos/`

3. **Sandbox e Edição Controlada**
   - Código original em **read-only**
   - Sandbox separado para testar alterações sem modificar o projeto oficial
   - Execução de JS diretamente no navegador
   - Execução de Python via Pyodide

4. **Login Seguro +18**
   - Registro e login com validação de idade
   - Área restrita para usuários autorizados
   - Simulação de autenticação e sessão

5. **Chat AI +18**
   - Chat integrado ao site
   - Histórico privado por usuário
   - Avisos de conteúdo adulto

6. **Progresso do Usuário**
   - Controle de projetos concluídos
   - Registro de progresso por grupo e usuário
   - Exibição de progresso na interface

7. **Portfólio PDF**
   - Exportação simulada do portfólio em PDF
   - Inclui projetos concluídos, destaques e informações do usuário

---

## **Estrutura de Pastas**

portifolio_interativo/
│
├── backend/ # Backend Python
│ ├── main.py # Servidor principal
│ ├── api/ # APIs
│ └── projetos/ # Scripts Python dos projetos
│
├── dados/ # Armazenamento de dados
│ ├── projetos.json
│ └── usuarios.json
│
├── imagens/ # Capturas e GIFs dos projetos
│
├── web/ # Frontend
│ ├── css/ # Estilo
│ ├── js/ # Scripts JS
│ └── paginas/ # Páginas HTML
│
└── README.md


---

## **Instruções de Execução**

### 1. Abrir o Frontend
1. Abra o arquivo `web/index.html` no navegador.
2. Navegue pelas páginas usando o menu de navegação.

### 2. Testar Sandbox JS
1. Vá para uma página de projeto (`projeto_individual.html` ou `projeto_python.html`)
2. Edite o código JS no textarea
3. Clique em **Executar JS** para ver o resultado

### 3. Testar Sandbox Python
1. Edite o código Python no textarea
2. Clique em **Executar Python**
3. O resultado será exibido no `pre` correspondente

### 4. Chat AI
1. Vá para `chat.html`
2. Digite a mensagem e clique em **Enviar**
3. Veja a resposta simulada do AI

### 5. Login e Registro
1. Acesse `login.html` ou `registro.html`
2. Preencha os campos (simulação de autenticação)
3. Maior de 18 anos é obrigatório para acessar chat e sandbox

---

## **Próximos Passos / Funcionalidades Avançadas**

1. Implementar **login real com backend seguro**
2. Integrar chat AI com backend real e histórico persistente
3. Salvar progresso do usuário em arquivo ou banco de dados
4. Conectar execução Python ao backend para projetos complexos
5. Tornar o site totalmente **responsivo**
6. Gerar PDF real do portfólio com jsPDF ou ReportLab

---

## **Tecnologias Usadas**

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Python (Flask/Django)
- **Execução Python:** Pyodide
- **Persistência:** JSON (simulação), futuro banco de dados
- **Exportação PDF:** jsPDF (simulado)

---

## Autor

**Charles Day (Rw110299)**  
GitHub: [https://github.com/Rw110299](https://github.com/Rw110299)  
Formação: Engenharia de Computação – UNIVESP  

---

## Licença

Projeto livre para fins educacionais e portfólio pessoal.
