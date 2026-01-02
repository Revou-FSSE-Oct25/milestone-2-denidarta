# Revo Fun Gaming Hub

Milestone 2 - RevoU Fullstack Software Engineering Program. This project is a collection of mini-games built with modern web technologies, showcasing a component-based architecture and a sleek, interactive user experience.

## 🚀 Demo

Experience the games live: [Live Demo](https://astounding-shortbread-4bfeb2.netlify.app/)

## 🛠 Tech Stack

- **Core Framework:** [Lit](https://lit.dev/) (Web Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Testing:** [Vitest](https://vitest.dev/)
- **Code Quality:** [Prettier](https://prettier.io/)

## 🎮 Key Features

- **Bulls and Cows:** A logic-based code-breaking game where you guess a 4-digit secret number.
- **Memory Flip Card:** Challenge your memory by finding pairs of matching cards.
- **Rock Paper Scissors:** A classic game against the AI with smooth animations and score tracking.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Interactive UI:** Dynamic feedback and micro-animations for an engaging experience.

## 🏗 Project Architecture

The project follows a modular, component-based architecture:

- **src/components:** Reusable UI elements built as Lit components (e.g., buttons, navigation, game boards).
- **src/scripts:** Game logic separated from the UI for better maintainability and testability.
- **src/pages:** HTML entry points for different games.
- **src/styles:** Global and component-specific styling using CSS variables and Tailwind.
- **assets:** Static assets like images and icons.

## 💻 How to Run Locally

### 1. Clone the repository

```bash
git clone <repository-url>
cd milestone-2-denidarta
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🤝 How to Contribute

1. **Fork** the project.
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`).
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4. **Push** to the branch (`git push origin feature/AmazingFeature`).
5. **Open** a Pull Request.

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.
