# Usage
https://expo.io/@fslucasfs/projects/epm
- HIGHLY RECOMMENDED OPTION: Install Expo on your cellphone and scan the QRcode.
- Alternative: Use the option below QRCode "Open project in the browser", that will open a window with a android simulator. You will need open a navigator on phone and paste the url of project, after this click on the button "open with expo".

# Compile for yourself
To compile this project on your pc, clone the repository and type on terminal:

- This command will install all the dependencies
 $ yarn
- After install all the depencies run:
$ yarn start
- Follow the instructions showed on your terminal to open the app on Expo

# Possible problems
- If the app don't load informations, this means a server are not online.

- If you wanna use a local db, look for commit f377478 and use docker-compose.


# Layout
https://www.figma.com/file/Z5If19g2xDGVp6UE88QP3d/e-Precise?node-id=0%3A1&viewport=311%2C240%2C0.6794678568840027

# Teste para Estágio em React Native

[![e-Precise Logo](https://www.e-precise.com.br/assets/images/logo_com_sombra.png)](https://www.e-precise.com.br/)

### Visão Geral

App de gestão de pessoas com listagem e cadastro de pessoas. Ao inserir o endereço da pessoa, os detalhes do endereço
devem ser buscados através de uma API publica gratuíta através do CEP (Ex: https://viacep.com.br/).

### Requisitos

- React Native
- Inserção de registros em banco de dados mobile SQL ou NoSQL (à critério do desenvolvedor)

## Detalhes do teste

### Critérios de avaliação

- Arquitetura do projeto (DDD ou MVC)
- Aplicação de orientação a objetos
- Funcionalidades e funcionamento

### Funcionalidades

O App deve conter as seguintes funcionalidades:

1. Pessoas - Listagem.
    1. Dados: Nome, idade, cpf
    2. Ações: 
        1.Abrir detalhes: ao clicar em registro, deve abrir os detalhes da pessoa para edição
2. Pessoas - Formulário
    1. Dados: Nome, idade, cpf, rg, endereço (rua, número, bairro, cidade, estado, cep)
    2. Ações:
        1. Inserir: incluir registro de pessoa em banco de dados mobile
            1. O endereço deve ser preenchido mediante a inserção do CEP e consulta em API publica.
        2. Remover: remover registro de pessoa em banco de dados mobile

### Diferencial

- Aplicação de padrão de apresentação (à critério do desenvolvedor). Ex: material design. 
- Qualidade de código (separação de responsabilidades em trechos de código do app e nomenclatura adequada para classes, 
 fuções e atributos)
- Usabilidade (interface e funcionalidades intuitivas)
- Testes unitários
- Criar menu home e pessoas. Em "home", apresentar relatório estatístico de pessoas (à critério do desenvolvedor), 
em "pessoas", apresentar listagem de pessoas (vide Funcionalidades) 

### Especificações técnicas

- Criar um fork do projeto
- Descrever suas facilidades e dificuldades encontradas no processo de desenvolvimento.
- Apresentar descritivo detalhado de como rodar sua aplicação (a ausência deste documento pode caracterizar a 
desqualificação nesta etapa de avaliação)

## Contato e Informações

### Dúvidas?
`desenvolvimento@eprecise.com.br` com título `Teste para Estágio em React Native - Dúvida`

### Envio da prova?
`desenvolvimento@eprecise.com.br` com título `Teste para Estágio em React Native - Finalização`. 
Incluir link com fork do repositório. 

### Prazo?
1 semana após o recebimento do teste.