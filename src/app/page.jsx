"use client";
import React, { useState, useEffect, useRef } from "react";
import { Terminal, Sun, Moon, GitBranch } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import CodeEditor from "@/components/CodeEditor";
import StatusBar from "@/components/StatusBar";

const initialFiles = {
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
  const [files, setFiles] = useState(initialFiles); // Make files a state variable
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

  return (
    <div
      className={`flex flex-col h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-white text-gray-800"
      } font-mono`}
    >
      <TopBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        theme={theme}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        menuRef={menuRef}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          theme={theme}
          activeSidebarIcon={activeSidebarIcon}
          setActiveSidebarIcon={setActiveSidebarIcon}
          folderStructure={folderStructure}
          expandedFolders={expandedFolders}
          toggleFolder={toggleFolder}
          openFile={openFile}
          activeFile={activeFile}
          openTabs={openTabs}
          setOpenTabs={setOpenTabs}
          setActiveFile={setActiveFile}
          closeTab={closeTab}
        />

        <CodeEditor
          theme={theme}
          openTabs={openTabs}
          setOpenTabs={setOpenTabs}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
          closeTab={closeTab}
          files={files}
          setFiles={setFiles} // Pass setFiles to update the state
          isTerminalOpen={isTerminalOpen}
          setIsTerminalOpen={setIsTerminalOpen}
        />
      </div>

      <StatusBar
        theme={theme}
        setTheme={setTheme}
        isTerminalOpen={isTerminalOpen}
        setIsTerminalOpen={setIsTerminalOpen}
        activeFile={activeFile}
      />
    </div>
  );
}
