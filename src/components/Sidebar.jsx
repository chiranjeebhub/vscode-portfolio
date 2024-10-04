import React from "react";
import {
  Files,
  Search as SearchIcon,
  GitBranch as GitBranchIcon,
  Package,
} from "lucide-react";
import FileTree from "./FileTree";

const Sidebar = ({
  isSidebarOpen,
  theme,
  activeSidebarIcon,
  setActiveSidebarIcon,
  folderStructure,
  expandedFolders,
  toggleFolder,
  openFile,
  activeFile,
  openTabs,
  setOpenTabs,
  setActiveFile,
  closeTab,
}) => {
  const renderSidebarContent = () => {
    switch (activeSidebarIcon) {
      case "files":
        return (
          <FileTree
            folderStructure={folderStructure}
            expandedFolders={expandedFolders}
            toggleFolder={toggleFolder}
            openFile={openFile}
            activeFile={activeFile}
            theme={theme}
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
            setActiveFile={setActiveFile}
            closeTab={closeTab}
          />
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

  if (!isSidebarOpen) return null;

  return (
    <>
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
      <div
        className={`w-64 ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-100 border-gray-300"
        } overflow-y-auto border-r border-l`}
      >
        {renderSidebarContent()}
      </div>
    </>
  );
};

export default Sidebar;
