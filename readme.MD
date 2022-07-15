<h1 align="center">DROPSPY</h1>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-16.x-blue.svg" />
  <a href="https://github.com/instigaremidia/dropspy-typescript#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/instigaremidia/dropspy-typescript/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Aplicação feita para espionar lojas da shopify por meio de instâncias hospedados no Heroku.

## SUMÁRIO
 - <a href="#page_with_curl-descrição"> :page_with_curl: Descrição</a>
 - <a href="#bulb-funcionalidades"> :bulb: Funcionalidades</a>
 - <a href="#mag_right-atalhos">:mag_right: Rotas do servidor</a>
 - <a href="#camera-ilustrações"> :camera: Ilustrações</a>
 - <a href="#thought_balloon-resumo-da-operação">:thought_balloon: Resumo da operação</a>
 - <a href="#trumpet-indicação-da-operação-atual-do-bot">:trumpet: Configurações de operação</a>
 - <a href="#computer-desenvolvimento">:computer: Desenvolvimento</a>
 - <a href="#rocket-tecnologias-utilizadas">:rocket: Tecnologias utilizadas</a>
<br>

## :page_with_curl: DESCRIÇÃO

#### Ecossistema dropspy
Esse projeto faz parte de um ecossistema de projetos, que em conjunto permitem a espionagem de lojas, composto por:

<p align="center">

Projeto                                                                                                                 | Função
----------------------------------------------------------------------------------------------------------------------- | ---------------
<a href="https://github.com/instigaremidia/dropspy" target="_blank"><b style="color:red">dropspy</b></a>                | Instância do bot disponibilizado para `N` aplicações na cloud.
<a href="https://github.com/instigaremidia/dropspy-spy-sheets-api" target="_blank">dropspy-spy-sheets-api</a>           | API do google sheets feita para obtenção e edição de informações.
<a href="https://github.com/instigaremidia/dropspy-add-bots" target="_blank">dropspy-add-bots</a>                       | Aplicação feita para cirar instâncias de bots de forma automática.
<a href="https://github.com/instigaremidia/dropspy-database-validation" target="_blank">dropspy-database-validation</a> | Aplicação feita para validação de 3 vias dos dados no banco de dados.
<a href="https://github.com/instigaremidia/instigaremidia" target="_blank">instigaremidia</a>                           | Aplicação onde os dados são mostrados de forma visual.
</p>

#### Clusterização

A aplicação é permeada por um processo de clusterização que permite um controle maior sobre a instância por meio do acesso de rotas específicas, sendo a aplicação dividida em:

<p align="center">

Rota     | Função
-------- | ---------------
`MASTER` | Cluster principal responsável por criar o servidor do site.
`WORKER` | Cluster secundário responsável por criar e fazer a manutenção do bot de espionagem.

</p>

Em tese, uma instância do `DROPSPY` pode criar `N` bots para espionar `Y` lojas, contudo no `servidor da heroku` há uma limitação de memória RAM, em que o indicado é utilizar somente uma instância mesmo.

#### Estrutura do projeto

O projeto foi estruturado da seguinde forma:

```
./dropspy
|-- src        # Pasta onde fica o código
|-- utils      # Funções e bibliotecas reutilizáveis de código
|-- scripts    # Scripts auxiliares para build do projeto
|-- extensions # Extensões que o chrome irá carregar
|-- tests      # Testes para garantir que a aplicação está funcionando corretamente

|-- configs    # Pasta de configuração da aplicação
|   |-- app-configs.json        # Arquivo de configurações da aplicação
|-- .env                        # Arquivo de configuração de variáveis de ambiente
```

De todos os arquivos, incluindo os que não foram mostrados na lista acima, os únicos que tem necessidade de alteração do usuário são os 2 últimos da lista acima, a fim de adequar a aplicação para as especificidades de sua operação.

## :bulb: FUNCIONALIDADES

* Espionagem de lojas da shopify que não possuam bloqueador da extensão alihunter.
* Permite a manutenção do bot a partir do acesso de rotas específicas.
* Faz um ping automático no servidor para evitar o idle-automático do heroku.
* Release-automático a cada commit do projeto, a partir do `github-actions`.
* API que mostra informações de espionagem da instância autal.

## :mag_right: ROTAS DA APLICAÇÃO

O `DROPSPY` permite o controle de forma interativa a partir do acesso das seguintes rotas:

<p align="center">

Rota       | Função
---------- | ---------------
`/`        | Tela inicial do servidor da instância do dropspy-bot.
`/api`     | API onde mostra informações de relevância sobre a instância do dropspy-bot.
`/restart` | Manda o comando para o bot reiniciar.
`/quit`    | Manda o comando para o bot fechar.

</p>
<br>


## :mag_right: DETALHES DO PROJETO

#### Dependências do projeto
Para o `DROPSPY` funcionar de maneira adequada, são necessários os seguintes itens:

<p align="center">

Rota       | Função
---------- | ---------------
`dropspy-spy-sheets-api`    | API do google sheets feita para obtenção e edição de informações.
`Planilha do google sheets` | Onde serão controlados as `N` instâncias do `DROPSPY`
`Heroku`                    | Usado para armazenar as `N` instâncias do `DROPSPY`
`Github`                    | Usado para guardar o código e fazer o deploy automático das `N` instâncias do `DROPSPY`
`Mongodb`                   | Usado para armazenar informações de espionagem das `N` instâncias do `DROPSPY`

</p>

#### Ferramentas utilizadas

<p align="center">

Tipo        | Rota                                                                                                                                                         | Função
----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------
development | <a href="https://nodejs.org/en/" target="_blank">nodejs</a>                                                                                                  | Engine responsável por executar o código.
development | <a href="https://git-scm.com/" target="_blank">git</a>                                                                                                       | Versionamento do código.
development | <a href="https://editorconfig.org/" target="_blank">editorconfig</a>                                                                                         | Padronização do código para multi-plataformas.
dev package | <a href="https://www.typescriptlang.org/" target="_blank">typescript</a>                                                                                     | Tipagem avançada para nodejs.
dev package | <a href="https://jestjs.io/pt-BR/" target="_blank">jest</a>                                                                                                  | Testes da aplicação.
dev package | <a href="https://github.com/typicode/husky" target="_blank">husky</a>                                                                                        | Automação de tarefas ao realizar commits.
dev package | <a href="https://github.com/conventional-changelog/commitlint" target="_blank">commitlint</a>                                                                | Padronização das mensagens de commit.
dev package | <a href="https://github.com/commitizen/cz-cli" target="_blank">commitizen</a>                                                                                | Criação de commits no padrão de forma auxiliada.
production  | <a href="https://www.docker.com/" target="_blank">docker</a>                                                                                                 | Conteinerização da aplicação.
package     | <a href="https://github.com/axios/axios" target="_blank">axios</a>                                                                                           | Consumo de rotas em nodejs.
package     | <a href="https://github.com/medikoo/cli-color" target="_blank">cli-color</a>                                                                                 | Colorir mensagens no terminal.
package     | <a href="https://nodejs.org/api/cluster.html" target="_blank">cluster</a>                                                                                    | Clusterização da aplicação.
package     | <a href="https://github.com/motdotla/dotenv" target="_blank">dotenv</a>                                                                                      | Utilização de variáveis de ambiente (`process.env`).
package     | <a href="https://github.com/mde/ejs" target="_blank">ejs</a>                                                                                                 | Criação de componentes reutilizáveis de html.
package     | <a href="https://github.com/expressjs/express" target="_blank">express</a>                                                                                   | Criação de um servidor em nodejs.
package     | <a href="https://github.com/Automattic/mongoose" target="_blank">mongoose</a>                                                                                | Modelagem de objetos do mongodb.
package     | <a href="https://github.com/SunilWang/node-os-utils" target="_blank">node-os-utils</a>                                                                       | Obtém informações de CPU e memória da máquina atual.
package     | <a href="https://github.com/berstend/puppeteer-extra" target="_blank">puppeteer-extra</a>                                                                    | Browser que permite automações, baseado no `puppeteer`.
package     | <a href="https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth" target="_blank">puppeteer-extra-plugin-stealth</a> | Mascarar utilização de chromium, fazendo sites não descobrirem que é uma automação.

</p>

<br>


## :mag_right: AUTORIA

👤 **Lucas Vieira**

* Website: instigaremidia.com
* Github: [@instigaremidia](https://github.com/instigaremidia)


## :mag_right: CHANGE-LOG

- 0.2.0
  - CHANGE: Remove function
  - ADD: Add init()
- 0.1.1
  - FIX: Crash when calling baz()
- 0.1.0
  - CHANGE: Rename foo() to bar()
- 0.0.1
  - Init the project
