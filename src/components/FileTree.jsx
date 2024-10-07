import React from "react";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  File,
  X,
  CopyX,
  FolderOpen,
} from "lucide-react";
import { FaFolder, FaFolderOpen, FaReact } from "react-icons/fa";

const FileTree = ({
  folderStructure,
  expandedFolders,
  toggleFolder,
  openFile,
  activeFile,
  theme,
  openTabs,
  setOpenTabs,
  setActiveFile,
  closeTab,
}) => {
  const renderFileTree = (item, depth = 0) => (
    <div key={item.name} className={`ml-${depth * 4}`}>
      {item.type === "folder" ? (
        <div className={`${depth === 0 ? "" : "ml-3"}`}>
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
            {expandedFolders.includes(item.name) ? (
              <FaFolderOpen className="w-4 h-4 mr-2" />
            ) : (
              <FaFolder className="w-4 h-4 mr-2" />
            )}

            <span>{item.name}</span>
          </div>
          {expandedFolders.includes(item.name) &&
            item.children.map((child) => renderFileTree(child, depth + 1))}
        </div>
      ) : (
        <div
          className={`flex items-center cursor-pointer py-1  pl-3 ${
            depth === 0 ? "" : "ml-3"
          } ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"} ${
            activeFile === item.name
              ? theme === "dark"
                ? "bg-gray-700"
                : "bg-gray-300"
              : ""
          }`}
          onClick={() => openFile(item.name)}
        >
          <FaReact className="w-4 h-4 mr-2 text-[#61DBFB]" />
          <span>{item.name}</span>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* <div
        className={`flex items-center justify-between p-2 ${
          theme === "dark" ? "border-gray-700" : "border-gray-300"
        } border-b`}
      >
        <span className="font-semibold tex-md">EXPLORER</span>
      </div> */}
      <div className="p-2">
        {openTabs.length > 0 && (
          <div className="mb-1 border-b border-gray-700 pb-2">
            <div
              className={`flex items-center justify-between mb-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div className="font-semibold text-sm">OPEN EDITORS</div>
              <CopyX
                className="w-4 h-4 cursor-pointer -mt-1"
                onClick={() => {
                  setOpenTabs([]);
                  setActiveFile(null);
                }}
              />
            </div>
            {openTabs.map((tab) => (
              <div
                key={tab}
                className={`flex items-center py-1 px-2 ${
                  activeFile === tab
                    ? theme === "dark"
                      ? "bg-gray-700"
                      : "bg-gray-300"
                    : ""
                } cursor-pointer`}
                onClick={() => setActiveFile(tab)}
              >
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={(e) => closeTab(tab, e)}
                />
                <FaReact className="w-4 h-4 mr-2 text-[#61DBFB] ml-2" />
                <span>{tab}</span>
              </div>
            ))}
          </div>
        )}
        {renderFileTree(folderStructure)}
      </div>
    </>
  );
};

export default FileTree;
