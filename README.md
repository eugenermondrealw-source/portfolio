# Portfolio

A modern, high-performance developer portfolio built with **Next.js 15**, **React 19**, and **Storybook**. This project follows **Atomic Design** principles to ensure components are modular, testable, and scalable.

## 🔗 Live Links
- **Portfolio:** [https://eugenermondrealw-source.github.io](https://eugenermondrealw-source.github.io)
- **Storybook UI:** [https://eugenermondrealw-source.github.iostorybook/](https://eugenermondrealw-source.github.iostorybook/)

## 🛠️ Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org) (App Router)
- **UI Documentation:** [Storybook 10](https://storybook.js.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Package Manager:** [pnpm](https://pnpm.io)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org)
- **CI/CD:** [GitHub Actions](https://github.com)

## 📁 Project Structure
The project uses **Atomic Design** to organize UI components:
- `components/atoms`: Smallest building blocks (e.g., `RichText`).
- `components/molecules`: Simple combinations of atoms (e.g., `PrimaryNav`).
- `components/organisms`: Complex UI sections (e.g., `Header`, `FooterNav`, `Hero`).

## 🚀 Local Development

### 1. Clone & Install
```powershell
git clone https://github.com/eugenermondrealw-source/portfolio.git
cd portfolio
pnpm install
```

### 2. Run Servers
- **Main App:** `pnpm dev` (Local: [http://localhost:3000](http://localhost:3000))
- **Storybook:** `pnpm storybook` (Local: [http://localhost:6006](http://localhost:6006))

## 📦 Deployment
This project is automatically deployed to **GitHub Pages** via **GitHub Actions** whenever changes are pushed to the `main` branch.

**The workflow:**
1. **Exports** the Next.js app to static HTML (`/out`).
2. **Builds** the Storybook static site into a subfolder (`/out/storybook`).
3. **Deploys** the entire bundle to the `gh-pages` branch.
