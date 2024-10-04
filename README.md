# VSCode Portfolio

Welcome to the **VSCode Portfolio** project! This project is a portfolio website designed to look and feel like Visual Studio Code, offering an interactive file tree structure, open editors section, and a built-in terminal for executing code snippets (simulated). The portfolio showcases different sections like `Welcome`, `About`, `Projects`, `Experiences`, and `Case Studies`, all presented in a developer-friendly VSCode-like interface.

## Demo

[Live Demo](https://your-live-demo-link.com)

## Features

- **File Explorer Sidebar**: Simulates a VSCode file explorer where you can expand and collapse folders, as well as open and close files.
- **Open Editors Section**: Displays currently open files in a VSCode-style tab layout. You can open, close, and switch between different files easily.
- **Code Display**: The main content area shows the code for the currently active file in a monospaced font, with syntax highlighting for a true developer experience.
- **Built-in Terminal (Simulated)**: A simulated terminal that shows commands executed related to the open file. It's a fun addition to make the portfolio feel more like a working VSCode environment.
- **Sidebar Icons**: Switch between different sidebar features like files, search, Git (coming soon), and extensions (coming soon).
- **Light/Dark Theme Toggle**: Easily switch between light and dark mode, just like in VSCode.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Technologies Used

- **Next.js**: The entire portfolio is built using Next.js, a React framework for server-side rendering.
- **Tailwind CSS**: Used for the styling, ensuring a consistent and responsive design.
- **Lucide React Icons**: The sidebar icons and other UI elements are powered by the Lucide icon library.
- **React Icons**: Integrated for GitHub and LinkedIn icons in the status bar.

## Project Structure

The file structure is a simulated VSCode project with folders and files representing different sections of the portfolio:

- `welcome.jsx`: Displays a welcome message.
- `about.jsx`: Shows a brief introduction about me.
- `contact.jsx`: Provides contact details like email, LinkedIn, and GitHub.
- `Projects/`: Contains files for each project case study.
- `Experiences/`: Lists files for each work experience.
- `Case Studies/`: Contains individual case studies.

## How It Works

- Clicking on a file in the sidebar opens it in the main content area, displaying its code.
- Multiple files can be opened, and you can switch between them using the tabs at the top.
- The sidebar can be toggled using `Ctrl + B` (like in VSCode), and individual files or tabs can be closed by clicking the `X` icon.
- You can toggle between light and dark themes by clicking the sun/moon icon in the status bar.

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chiranjeebhub/vscode-portfolio.git
   cd vscode-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This will start the development server on `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.
