// import React, { useState, useEffect } from "react";
// import * as Babel from "@babel/standalone"; // Import Babel standalone
// import ReactDOM from "react-dom"; // Ensure ReactDOM is imported

// const Preview = ({ code }) => {
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       try {
//         // Remove 'export default' to allow dynamic execution
//         const cleanedCode = code.replace(/export default /, "");

//         // Transpile JSX code to plain JavaScript using Babel
//         const transpiledCode = Babel.transform(cleanedCode, {
//           presets: ["react"], // Transpile JSX with Babel's react preset
//         }).code;

//         // Dynamically evaluate the transpiled code
//         const ComponentToRender = new Function(
//           "React",
//           `return ${transpiledCode}`
//         )(React);

//         // Render the dynamically evaluated component
//         ReactDOM.render(
//           React.createElement(ComponentToRender),
//           document.getElementById("preview-root")
//         );
//         setError(null);
//       } catch (err) {
//         setError(err.toString());
//       }
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [code]);

//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   return <div id="preview-root" className="p-4 rounded" />;
// };

// export default Preview;

import React, { useState, useEffect } from "react";
import * as Babel from "@babel/standalone";
import { createRoot } from "react-dom/client";

const Preview = ({ code }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const cleanedCode = code.replace(/export default /, "");
        const transpiledCode = Babel.transform(cleanedCode, {
          presets: ["react"],
        }).code;

        const ComponentToRender = new Function(
          "React",
          `return ${transpiledCode}`
        )(React);

        // Use createRoot for React 18+
        const previewContainer = document.getElementById("preview-root");
        if (previewContainer) {
          const root = createRoot(previewContainer);
          root.render(React.createElement(ComponentToRender));
          setError(null);
        } else {
          throw new Error("Preview container not found");
        }
      } catch (err) {
        setError(err.toString());
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [code]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return <div id="preview-root" className="p-4 rounded" />;
};

export default Preview;
