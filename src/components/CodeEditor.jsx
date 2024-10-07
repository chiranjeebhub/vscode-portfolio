"use client";

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TabsComponent from "./TabsComponent";
import TerminalComponent from "./TerminalComponent";
import Preview from "./Preview";

export default function CodeEditor({
  theme,
  openTabs,
  setOpenTabs,
  activeFile,
  setActiveFile,
  closeTab,
  files,
  setFiles,
  isTerminalOpen,
  setIsTerminalOpen,
}) {
  const syntaxTheme = theme === "dark" ? "dark" : "light";

  const handleCodeChange = (newCode) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [activeFile]: newCode,
    }));
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <TabsComponent
        openTabs={openTabs}
        setOpenTabs={setOpenTabs}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        theme={theme}
        closeTab={closeTab}
      />

      <ResizablePanelGroup direction="horizontal" className="flex-1">
        <ResizablePanel defaultSize={50}>
          <div
            className={`h-full p-4 overflow-auto ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            }`}
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            {activeFile ? (
              <Editor
                value={files[activeFile] || `// Content for ${activeFile}`}
                onValueChange={handleCodeChange}
                highlight={(code) =>
                  highlight(code, languages.js, "javascript")
                }
                padding={10}
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  height: "100%",
                }}
              />
            ) : (
              <div
                className={`flex items-center justify-center h-full ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Select a file to edit its content
              </div>
            )}
          </div>
        </ResizablePanel>

        {/* <ResizableHandle withHandle className="bg-gray-200 rounded-full" /> */}
        <ResizableHandle
          // withHandle
          className={` ${
            theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        />

        <ResizablePanel defaultSize={50}>
          <div
            className={`h-full p-4 overflow-auto ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {activeFile ? (
              <Preview code={files[activeFile]} theme={theme} />
            ) : (
              <div
                className={`flex items-center justify-center h-full ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Select a file to see code preview
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <TerminalComponent
        activeFile={activeFile}
        setIsTerminalOpen={setIsTerminalOpen}
        theme={theme}
      />
    </div>
  );
}
