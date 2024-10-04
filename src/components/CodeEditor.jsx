import React from "react";
import { Terminal, X } from "lucide-react";

const CodeEditor = ({
  theme,
  openTabs,
  activeFile,
  setActiveFile,
  closeTab,
  files,
  isTerminalOpen,
  setIsTerminalOpen,
}) => {
  return (
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
            <code>{files[activeFile] || `// Content for ${activeFile}`}</code>
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
  );
};

export default CodeEditor;
