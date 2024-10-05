import React from "react";
import { Terminal, Sun, Moon, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Linkedin } from "lucide-react";

const StatusBar = ({
  theme,
  setTheme,
  isTerminalOpen,
  setIsTerminalOpen,
  activeFile,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-2 py-1 ${
        theme === "dark" ? "bg-blue-600" : "bg-blue-500"
      } text-white text-xs`}
    >
      <div className="flex items-center space-x-2">
        <button
          onClick={() =>
            window.open("https://github.com/chiranjeebhub/vscode-portfolio")
          }
          className="hover:bg-blue-700 px-1 py-0.5 rounded"
        >
          <GitBranch className="w-4 h-4" />
        </button>

        <span>
          main<sup>*</sup>
        </span>
        <span>🔗 WSL: Ubuntu</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="hover:bg-blue-700 px-1 py-0.5 rounded"
        >
          <Terminal className="w-4 h-4" />
        </button>
        <span className="hidden md:inline">Ln 1, Col 1</span>
        <span className="hidden md:inline">Spaces: 2</span>
        <span className="hidden md:inline">UTF-8</span>
        <span>
          {activeFile ? activeFile.split(".").pop().toUpperCase() : "TXT"}
        </span>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
          className="hover:bg-blue-700 px-1 py-0.5 rounded"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
        <a
          href="https://github.com/chiranjeebhub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-blue-700 px-1 py-0.5 rounded"
        >
          <FaGithub className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com/in/ichiranjeeb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-blue-700 px-1 py-0.5 rounded"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default StatusBar;
