import React from "react";
import { X } from "lucide-react";
import { FaReact } from "react-icons/fa";

const TabsComponent = ({
  openTabs,
  setOpenTabs,
  activeFile,
  setActiveFile,
  theme,
}) => {
  const closeTab = (fileName, e) => {
    e.stopPropagation();
    setOpenTabs((prev) => prev.filter((tab) => tab !== fileName));
    if (activeFile === fileName) {
      setActiveFile(openTabs[openTabs.length - 2] || "");
    }
  };

  return (
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
          className={`flex justify-between items-center pr-2 px-3 py-2 cursor-pointer border-r ${
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
          <div className="flex items-center">
            <FaReact className="w-4 h-4 mr-2 text-[#61DBFB]" />
            <span className="mr-2">{tab}</span>
          </div>

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
  );
};

export default TabsComponent;
