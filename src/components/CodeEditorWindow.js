// import React, { useState } from "react";

// import Editor from "@monaco-editor/react";

// const CodeEditorWindow = ({ onChange, language, code }) => {
//   const [value, setValue] = useState(code || "");

//   const handleEditorChange = (value) => {
//     setValue(value);
//     onChange("code", value);
//   };

//   return (
//     <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl ">
//       <Editor
//         height="85vh"
//         width={`100%`}
//         language={language || "javascript"}
//         value={value}
//         theme={ }
//         defaultValue="// some comment"
//         onChange={handleEditorChange}
//       />
//     </div>
//   );
// };
// export default CodeEditorWindow;


import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, selectedTheme }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  const determineTheme = (selectedTheme) => {
    switch (selectedTheme) {
      case "vs-dark":
        return "vs-dark";
      case "github":
        return "github";
      default:
        return "vs-dark"; // Default to vs-dark theme
    }
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="83vh"
        width="100%"
        language={language || "javascript"}
        value={value}
        theme={determineTheme(selectedTheme)}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
