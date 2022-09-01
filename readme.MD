<h1 align="center">
  Dropspy
</h1>

<p align="center">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucasvtiradentes/dropspy.svg">
  <a href="https://github.com/lucasvtiradentes/dropspy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasvtiradentes/dropspy.svg">
  </a>

  <a href="https://github.com/lucasvtiradentes/dropspy/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/lucasvtiradentes/dropspy.svg">
  </a>

</p>

<p align="center">
  <a href="#information_source-description">Description</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <a href="#information_source-features">Features</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-edit-it">How to edit it?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-it-works">How it works?</a>
</p>

## :information_source: Description

This is a bot for spying sales on [shopify](https://www.shopify.com/) stores, using [alihunter chrome extension](https://chrome.google.com/webstore/detail/ali-hunter-aliexpress-pro/mpajidobdpdigheplhpfggmeldjcpgfh) and saving the results in a [MongoDB](https://www.mongodb.com/) database for latter consultation.

<p align="center">
<img style="width: 80%" src="https://i.giphy.com/media/Q5iEjc8F3YTlNjsM1U/giphy.webp">
</p>

## :information_source: Features

- [x] Spying on shopify stores that do not have an alihunter extension blocker.
- [x] Allows bot maintenance by accessing specific routes.
- [x] API that show important informations of current instance.
- [x] Automatic-release at each project commit, from github-actions.
- [x] Automatically ping the server to avoid heroku auto-idle.

## :information_source: Technologies

This project uses the following technologies and tools:

<div align="center" style="text-align: center;">
  <table>
    <tr>
      <th>Scope</th>
      <th>Technologies</th>
    </tr>
    <tr>
      <td>engine</td>
      <td align="center">
        <a target="_blank" href="https://nodejs.org"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <td>secondary</td>
      <td align="center">
        <a target="_blank" href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"></a>
        <a target="_blank" href="https://www.docker.com/"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"></a>
        <a target="_blank" href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"></a>
      </td>
    </tr>
    <tr>
      <td>dev tools</td>
      <td align="center">
        <a target="_blank" href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"></a>
        <a target="_blank" href="https://editorconfig.org/"><img src="https://img.shields.io/badge/editorconfig-gray?style=for-the-badge&logo=editorconfig&logoColor=white"></a>
      </td>
    </tr>
  </table>
</div>

## :information_source: How to edit it

To clone this repository and make changes in the source code, you'll need [Git](https://git-scm.com) and  [Nodejs](https://nodejs.org/en/) in your computer.

```bash
# Clone this repository
$ git clone https://github.com/lucasvtiradentes/dropspy

# Go into the repository folder
$ cd dropspy

# Install dependencies
$ npm install

# Run the code in devlopment mode
$ npm run dev
```

## :information_source: How it works

__Clustering__

The application is permeated by a clustering process that allows greater control over the instance through the access of specific routes, the application being divided into:

<div align="center" style="text-align: center;">
  <table>
    <tr>
      <th>Cluster</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>MASTER</td>
      <td align="left">Main cluster responsible for creating the website server.</td>
    </tr>
    <tr>
      <td>WORKER</td>
      <td align="left">Secondary cluster responsible for creating and maintaining the spy bot.</td>
    </tr>
  </table>
</div>

In theory, an instance of `DROPSPY` can create `N` bots to spy on `Y` stores, however the `heroku server` has a RAM memory limitation, in which the recommended thing is to use only one instance.

__Project files structure__

The project was structured as it follows:

```
./dropspy
|-- src        # main sorce code folder
|-- utils      # utils functions folder
|-- scripts    # aux scripts to build and release
|-- configs/   # configs files folder
|   |-- app-configs.json   # main app config file
|-- .env       # environmental variable file setup
```

The only files that need to be changed by the user are the last 2 in the list above, in order to adapt the application to the specifics of its operation.

__App routes__

`DROPSPY` allows interactive control from the access of the following routes:

<div align="center" style="text-align: center;">
  <table>
    <tr>
      <th>Route</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>/</td>
      <td>Droppy-bot instance server splash screen.</td>
    </tr>
    <tr>
      <td>/api</td>
      <td>API where it shows relevance information about dropspy-bot instance.</td>
    </tr>
    <tr>
      <td>/restart</td>
      <td>Send the command for the bot to restart.</td>
    </tr>
    <tr>
      <td>/quit</td>
      <td>Send the command for the bot to close.</td>
    </tr>
  </table>
</div>

---

Made with ♥ by Lucas Vieira.

Get it touch: [github](https://github.com/lucasvtiradentes) | [linkedin](https://www.linkedin.com/in/lucasvtiradentes) | lucasvtiradentes@gmail.com
