# Portfolio

A modern, high-performance developer portfolio built with **Next.js 15**, **React 19**, and **Storybook**. This project follows **Atomic Design** principles to ensure components are modular, testable, and scalable.

## 🔗 Live Links
- **Portfolio:** [https://eugenermondrealw-source.github.io/portfolio/](https://eugenermondrealw-source.github.io/portfolio/)
- **Storybook UI:** [https://eugenermondrealw-source.github.io/portfolio/storybook/](https://eugenermondrealw-source.github.io/portfolio/storybook/)

## 🛠️ Tech Stack
- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI Documentation:** [Storybook 10](https://storybook.js.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Package Manager:** [pnpm 10](https://pnpm.io)
- **Type Safety:** [TypeScript 5.9](https://www.typescriptlang.org)
- **Runtime:** [Node.js 24](https://nodejs.org)
- **CI/CD:** [GitHub Actions](https://github.com)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [Lucide React](https://lucide.dev)

## 📁 Project Structure
The project uses **Atomic Design** to organize UI components:
- `components/atoms`: Smallest building blocks (e.g., `RichText`).
- `components/molecules`: Simple combinations of atoms (e.g., `PrimaryNav`).
- `components/organisms`: Complex UI sections (e.g., `Header`, `FooterNav`, `Hero`).

## 🚀 Local Development

### 1. Prerequisites (Install pnpm)
Ensure you have **Node.js 20+** installed. If you don't have `pnpm` yet, install it using **one** of these methods:
- **Corepack (Recommended):** `corepack enable pnpm`
- **npm:** `npm install -g pnpm`
- **Homebrew (macOS):** `brew install pnpm`

### 2. Setup Project
```bash
# Clone the repository
git clone https://github.com/eugenermondrealw-source/portfolio.git

# Enter the directory
cd portfolio

# Install dependencies
pnpm install
```


### 3. Run Servers
- **Main App:** `pnpm dev` (Local: [http://localhost:3000](http://localhost:3000))
- **Storybook:** `pnpm storybook` (Local: [http://localhost:6006](http://localhost:6006))

### 4. Available Commands

| Command | Action |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server at [http://localhost:3000](http://localhost:3000) |
| `pnpm storybook` | Starts the Storybook UI library at [http://localhost:6006](http://localhost:6006) |
| `pnpm build` | Creates a production-ready build of the app and Storybook |
| `pnpm lint` | Runs ESLint to check for code quality issues |


## 📦 Deployment
This project is automatically deployed to **GitHub Pages** via **GitHub Actions** whenever changes are pushed to the `main` branch.

**The workflow:**
1. **Exports** the Next.js app to static HTML (`/out`).
2. **Builds** the Storybook static site into a subfolder (`/out/storybook`).
3. **Deploys** the entire bundle to the `gh-pages` branch.
