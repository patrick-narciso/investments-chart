<div align="center">
<h1>Gráfico de Rendimentos</h1>

<p>Aplicação para acompanhar rendimentos de um investimento por período<p>

[![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/patrick-narciso/investments-chart/blob/master/LICENSE)

</div>

## Desenvolvimento

### Tecnologias Utilizadas

- HTML 5
- CSS3
- Styled components
- React
- React Hooks
- Apexcharts
- [Jest](https://jestjs.io/)
- [Webpack](https://webpack.js.org/)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Babel](https://babeljs.io/)

### Pré-requisitos

Para execução e desenvolvimento do projeto é necessário possuir o [Node](https://nodejs.org/en/)instalado em sua máquina.

### Setup Dev

Para ver o projeto rodando, primeiro clone o repositório.

```shell
git clone https://github.com/patrick-narciso/investments-chart.git
```

Navegue até o diretório e instale as dependências do projeto.

```shell
cd investments-chart/
yarn install:all
```

Feito isso, as dependências do projeto e do proxy (o proxy está no diretório server, para evitar problemas de CORS) estarão instaladas. Agora, bastar executar o comando abaixo e abrirá uma aba no seu browser principal na porta 3000 com o projeto rodando (o proxy estará servido na porta 8000).

```shell
yarn start
```

### Release

Para gerar uma versão basta executar

```shell
yarn run release
```

Feito isso, abrirá uma CLI interativa com algumas perguntas, após respondê-las será
feito um commit de release, gerada uma tag no repositório e lançado um release com a tag.

## Versionamento

Para versionamento está sendo utilizada semantic version [SemVer](http://semver.org/).

## Testes

Para execução de testes automatizados, basta executar

```shell
yarn test ou yarn test:watch
```

## Licensing

[MIT](LICENSE)
