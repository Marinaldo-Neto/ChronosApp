<h1 align="center">⏳ CHRONOS APP</h1>
<p align="center">Aplicativo mobile para acompanhamento de treinos, desenvolvido com Expo e React Native.</p>

<p align="center" gap="8px">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height="128" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg" height="128" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height="128" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" height="128" />
  
</p>

---

## 🚀 Tecnologias Utilizadas

- React Native 0.81.x
- Expo SDK 54
- React 19.x
- react-native-screens
- react-native-safe-area-context
- @expo/vector-icons

---

## ✨ Funcionalidades

- Menu inicial com navegação entre telas
- Login e cadastro (fluxos simulados)
- Home com “treino do dia” e ações rápidas
- Criar treino: objetivo, divisão e exercícios
- Editar treino existente
- UI dark com foco em acessibilidade
- Estado local; sem backend/persistência no momento

---

## ⚙️ Pré-requisitos

- Node.js 18+
- npm 9+
- Expo CLI (via `npx expo`)
- Dispositivo com app Expo Go ou emulador Android/iOS

---

## 🛠️ Instalação e Execução

1. Acesse o diretório do app:

```bash
cd chronos
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm start
# ou:
npm run android   # Android
npm run ios       # iOS
npm run web       # Web (Expo)
```

4. Em mobile, abra o app Expo Go e escaneie o QR Code exibido no terminal/Expo DevTools.

---

## 🧭 Telas e Navegação

- Menu inicial: atalho para todas as telas
- Login e Cadastro: formulários simulados (sem backend)
- Home: resumo do treino do dia + ações rápidas
- Criar Treino: define objetivo, divisão e exercícios
- Editar Treino: ajusta informações de um treino existente

Arquivos principais:

- `chronos/App.js`: navegação simples controlada por estado local
- `chronos/pages/Home.js`, `Login.js`, `Register.js`, `CreateWorkout.js`, `EditWorkout.js`

---

## 📁 Estrutura de Pastas

```
chronos/
├─ assets/   # Ícones, logos e imagens
├─ pages/
│  ├─ Home.js
│  ├─ Login.js
│  ├─ Register.js
│  ├─ CreateWorkout.js
│  └─ EditWorkout.js
├─ App.js
├─ index.js
├─ app.json
├─ package.json
└─ package-lock.json
```

---

## 🔌 Integração com API (futuro)

- Integração planejada com a CHRONOS API (Django REST + JWT)
- Autenticação via JWT (ex.: `/api/token/` e `/api/token/refresh/`)
- Consumo de endpoints de usuários, exercícios, treinos e dietas

Enquanto isso, o app funciona como protótipo sem persistência.

---

## 🧪 Scripts

- `npm start`: inicia o Expo Dev Server
- `npm run android`: abre no Android
- `npm run ios`: abre no iOS
- `npm run web`: executa no navegador

---

## 🗺️ Roadmap

- Navegação com React Navigation
- Persistência local (AsyncStorage/SQLite)
- Integração real com API (JWT)
- Validações e máscaras nos formulários
- Internacionalização (pt-BR / en-US)
- Melhorias de acessibilidade
- Estado global (Zustand/Redux)
- Testes unitários/UX + CI/CD

---

## 📄 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais detalhes.


© GO+ Group. Todos os direitos reservados.

