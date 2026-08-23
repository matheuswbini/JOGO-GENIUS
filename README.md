# 🧠 Jogo Gênios

Um jogo da memória inspirado no clássico **Genius/Simon**, desenvolvido em **React Native** com **Expo**.

O jogador precisa memorizar e repetir sequências de quadrados que piscam na tela. A cada acerto, a dificuldade aumenta — sequências mais longas e mais rápidas.

## 🎮 Funcionalidades

- Grid interativo 3x3
- Três níveis de dificuldade (Fácil, Médio, Difícil), com aumento automático de velocidade e tamanho da sequência
- Contador de pontuação e recorde (highscore) da sessão
- Botões para iniciar e reiniciar a partida

## 🛠️ Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- JavaScript (ES6+)

## 🚀 Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado e o app **Expo Go** no celular (ou um emulador Android/iOS configurado).

```bash
# Clone o repositório
git clone https://github.com/matheuswbini/JOGO-GENIUS.git
cd JOGO-GENIUS

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

Isso abrirá o Metro Bundler no navegador. Escaneie o QR Code com o app **Expo Go** para rodar no celular, ou pressione `a`/`i` no terminal para abrir em um emulador Android/iOS.

## 📂 Estrutura do projeto

```
JOGO-GENIUS/
├── App.js                     # Ponto de entrada do app
├── app.json                   # Configurações do Expo
├── babel.config.js
├── package.json
└── src/
    └── components/
        ├── Game.js            # Lógica e interface do jogo
        └── Game.styles.js     # Estilos do componente
```

## 📌 Melhorias futuras

- [ ] Salvar o recorde de forma persistente (AsyncStorage)
- [ ] Adicionar sons para cada quadrado e feedback de erro/acerto
- [ ] Animações de transição entre níveis
- [ ] Tela inicial com nome do jogador

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
