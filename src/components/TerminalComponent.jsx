import React from "react";
import { Terminal, X } from "lucide-react";

const TerminalComponent = ({ activeFile, setIsTerminalOpen, theme }) => {
  return (
    <div
      className={`h-32 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"} p-2 overflow-auto border-t`}
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
        className={`font-mono text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
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
  );
};

export default TerminalComponent;
