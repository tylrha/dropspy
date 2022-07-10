- package-by-feature -> tudo que depende de uma funcionalidade, colocar numa mesma pasta.
  ex: testes, controllers. views, etc

RECURSOS FUNCIONAIS
- Importar una lista em CSV e relacionar ela com um tag
- enviar mensagem para uma ou mais tags

RECURSOS NAO FUNCIONAIS
- Utilizar amazon SES (1$ - 10.000 emails)
- Utilizar o mongo db
- Utilizar express

REGRAS DE NEGÓCIOS
- na importação, se a tag nao existir ela deve ser criada
- Na importacao, se o usuario ja existir, so vamos veicula-lo com a tag
- a importacao deve permitir multiplas tags

SOBRE TESTES: RED - GREEN - REFACTOR

MACK do banco de dados -> um fake do banco de dados pra testes, pra n criar usuarios a toa

scripts
