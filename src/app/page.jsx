"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  File,
  Folder,
  Terminal,
  User,
  Mail,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Sun,
  Moon,
  Search,
  GitBranch,
  Settings,
  Files,
  Search as SearchIcon,
  GitBranch as GitBranchIcon,
  Package,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const files = {
  "welcome.jsx": `export default function Welcome() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-2">Hi there! I'm Chiranjeeb Jena, a passionate full-stack developer.</p>
      <p>Feel free to explore my projects, experiences, and case studies using the sidebar.</p>
    </div>
  );
}`,
  "about.jsx": `export default function About() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p>I'm a full-stack developer with 10+ years of experience in web development.</p>
    </div>
  );
}`,
  "contact.jsx": `export default function Contact() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Email: chiranjib.jena@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/ichiranjeeb</p>
      <p>GitHub: github.com/chiranjeebhub</p>
    </div>
  );
}`,
};

const folderStructure = {
  name: "Chiranjeeb",
  type: "folder",
  children: [
    { name: "welcome.jsx", type: "file" },
    { name: "about.jsx", type: "file" },
    { name: "contact.jsx", type: "file" },
    {
      name: "Projects",
      type: "folder",
      children: [
        { name: "project1.jsx", type: "file" },
        { name: "project2.jsx", type: "file" },
        { name: "project3.jsx", type: "file" },
      ],
    },
    {
      name: "Experiences",
      type: "folder",
      children: [
        { name: "experience1.jsx", type: "file" },
        { name: "experience2.jsx", type: "file" },
        { name: "experience3.jsx", type: "file" },
      ],
    },
    {
      name: "Case Studies",
      type: "folder",
      children: [
        { name: "casestudy1.jsx", type: "file" },
        { name: "casestudy2.jsx", type: "file" },
        { name: "casestudy3.jsx", type: "file" },
      ],
    },
  ],
};

export default function VSCodePortfolio() {
  const [activeFile, setActiveFile] = useState("welcome.jsx");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState(["portfolio"]);
  const [theme, setTheme] = useState("dark");
  const [openTabs, setOpenTabs] = useState(["welcome.jsx"]);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSidebarIcon, setActiveSidebarIcon] = useState("files");

  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "b") {
        setIsSidebarOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFolder = (folder) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  const openFile = (fileName) => {
    setActiveFile(fileName);
    if (!openTabs.includes(fileName)) {
      setOpenTabs((prev) => [...prev, fileName]);
    }
  };

  const closeTab = (fileName, e) => {
    e.stopPropagation();
    setOpenTabs((prev) => prev.filter((tab) => tab !== fileName));
    if (activeFile === fileName) {
      setActiveFile(openTabs[openTabs.length - 2] || "");
    }
  };

  const renderFileTree = (item, depth = 0) => (
    <div key={item.name} className={`ml-${depth * 4}`}>
      {item.type === "folder" ? (
        <div>
          <div
            className={`flex items-center cursor-pointer py-1 ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
            onClick={() => toggleFolder(item.name)}
          >
            {expandedFolders.includes(item.name) ? (
              <ChevronDown className="w-4 h-4 mr-1" />
            ) : (
              <ChevronRight className="w-4 h-4 mr-1" />
            )}
            <Folder className="w-4 h-4 mr-2" />
            <span>{item.name}</span>
          </div>
          {expandedFolders.includes(item.name) &&
            item.children.map((child) => renderFileTree(child, depth + 1))}
        </div>
      ) : (
        <div
          className={`flex items-center cursor-pointer py-1  pl-3 ${depth === 0 ? "" : "ml-3"} ${
            theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } ${
            activeFile === item.name
              ? theme === "dark"
                ? "bg-gray-700"
                : "bg-gray-300"
              : ""
          }`}
          onClick={() => openFile(item.name)}
        >
          <File className="w-4 h-4 mr-2" />
          <span>{item.name}</span>
        </div>
      )}
    </div>
  );

  const renderSidebarContent = () => {
    switch (activeSidebarIcon) {
      case "files":
        return (
          <>
            <div
              className={`flex items-center justify-between p-2 ${
                theme === "dark" ? "border-gray-700" : "border-gray-300"
              } border-b`}
            >
              <span className="font-semibold">EXPLORER</span>
              <button
                className={
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2">
              {/* Open Editors Section */}
              {openTabs.length > 0 && (
                <div className="mb-4 border-b border-gray-700 pb-2">
                  <div
                    className={`flex items-center justify-between mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <span className="font-semibold text-sm">OPEN EDITORS</span>
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => {
                        setOpenTabs([]);
                        setActiveFile(null);
                      }}
                    />
                  </div>
                  {openTabs.map((tab) => (
                    <div
                      key={tab}
                      className={`flex items-center justify-between py-1 px-2 ${
                        activeFile === tab
                          ? theme === "dark"
                            ? "bg-gray-700"
                            : "bg-gray-300"
                          : ""
                      } cursor-pointer`}
                      onClick={() => setActiveFile(tab)}
                    >
                      <span>{tab}</span>
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={(e) => closeTab(tab, e)}
                      />
                    </div>
                  ))}
                </div>
              )}
              {/* File Tree */}
              {renderFileTree(folderStructure)}
            </div>
          </>
        );
      case "search":
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Search</h2>
            <input
              type="text"
              placeholder="Search files..."
              className={`w-full p-2 rounded ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800"
              }`}
            />
          </div>
        );
      case "git":
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Source Control</h2>
            <p>Git integration coming soon...</p>
          </div>
        );
      case "extensions":
        return (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Extensions</h2>
            <p>Browse and manage extensions here...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex flex-col h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-white text-gray-800"
      } font-mono`}
    >
      {/* Top Bar */}
      <div
        className={`flex items-center justify-between p-2 ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-100 border-gray-300"
        } border-b`}
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-1 ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            } focus:outline-none`}
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
          {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map(
            (menu) => (
              <div key={menu} className="relative group" ref={menuRef}>
                <span
                  className={`text-sm cursor-pointer ${activeMenu === menu ? (theme === "dark" ? "text-white font-semibold" : "text-black font-semibold") : ""}`}
                  onClick={() =>
                    setActiveMenu(activeMenu === menu ? null : menu)
                  }
                >
                  {menu}
                </span>
                {activeMenu === menu && (
                  <div
                    className={`absolute left-0 mt-3 w-48  shadow-lg ${
                      theme === "dark" ? "bg-gray-700" : "bg-white"
                    } ring-1 ring-black ring-opacity-5 z-10`}
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          theme === "dark"
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        role="menuitem"
                      >
                        Menu Item 1
                      </a>
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm ${
                          theme === "dark"
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        role="menuitem"
                      >
                        Menu Item 2
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Icons */}
        <div
          className={`w-12 ${
            theme === "dark" ? "bg-gray-900" : "bg-gray-100"
          } flex flex-col items-center py-4`}
        >
          <button
            className={`mb-4 p-2 rounded ${
              activeSidebarIcon === "files"
                ? theme === "dark"
                  ? "bg-gray-800"
                  : "bg-white"
                : ""
            }`}
            onClick={() => setActiveSidebarIcon("files")}
          >
            <Files className="w-5 h-5" />
          </button>
          <button
            className={`mb-4 p-2 rounded ${
              activeSidebarIcon === "search"
                ? theme === "dark"
                  ? "bg-gray-800"
                  : "bg-white"
                : ""
            }`}
            onClick={() => setActiveSidebarIcon("search")}
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            className={`mb-4 p-2 rounded ${
              activeSidebarIcon === "git"
                ? theme === "dark"
                  ? "bg-gray-800"
                  : "bg-white"
                : ""
            }`}
            onClick={() => setActiveSidebarIcon("git")}
          >
            <GitBranchIcon className="w-5 h-5" />
          </button>
          <button
            className={`mb-4 p-2 rounded ${
              activeSidebarIcon === "extensions"
                ? theme === "dark"
                  ? "bg-gray-800"
                  : "bg-white"
                : ""
            }`}
            onClick={() => setActiveSidebarIcon("extensions")}
          >
            <Package className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className={`w-64 ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-gray-100 border-gray-300"
            } overflow-y-auto border-r border-l`}
          >
            {renderSidebarContent()}
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div
            className={`flex ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-gray-200 border-gray-300"
            } border-b overflow-x-auto`}
          >
            {openTabs.map((tab) => (
              <div
                key={tab}
                className={`px-3 py-2 cursor-pointer border-r ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                } ${
                  activeFile === tab
                    ? theme === "dark"
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-900"
                    : theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveFile(tab)}
              >
                <span className="mr-2">{tab}</span>
                <button
                  className={
                    theme === "dark"
                      ? "text-gray-500 hover:text-gray-300"
                      : "text-gray-400 hover:text-gray-600"
                  }
                  onClick={(e) => closeTab(tab, e)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Code Editor */}
          <div
            className={`flex-1 p-4 overflow-auto ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            }`}
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            {activeFile ? (
              <pre className="text-sm leading-relaxed">
                <code>
                  {files[activeFile] || `// Content for ${activeFile}`}
                </code>
              </pre>
            ) : (
              <div
                className={`flex items-center justify-center h-full ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Select a file to view its content
              </div>
            )}
          </div>

          {/* Terminal */}
          {isTerminalOpen && (
            <div
              className={`h-32 ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-gray-100 border-gray-300"
              } p-2 overflow-auto border-t`}
            >
              <div className="flex items-center justify-between mb-2 text-gray-400">
                <div className="flex items-center">
                  <Terminal className="w-4 h-4 mr-2" />
                  <span>Terminal</span>
                </div>
                <button
                  onClick={() => setIsTerminalOpen(false)}
                  className={
                    theme === "dark"
                      ? "text-gray-500 hover:text-white"
                      : "text-gray-400 hover:text-gray-600"
                  }
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div
                className={`font-mono text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                $ node {activeFile}
                <br />
                {activeFile ? (
                  <span>Executing {activeFile}...</span>
                ) : (
                  <span>No file selected</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div
        className={`flex items-center justify-between px-2 py-1 ${
          theme === "dark" ? "bg-blue-600" : "bg-blue-500"
        } text-white text-xs`}
      >
        <div className="flex items-center space-x-2">
          <GitBranch className="w-4 h-4" />
          <span>master</span>
          <span>🔗 WSL: Ubuntu</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsTerminalOpen(!isTerminalOpen)}
            className="hover:bg-blue-700 px-1 py-0.5 rounded"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
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
    </div>
  );
}
