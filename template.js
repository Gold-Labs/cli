function makeHookTemplate(componentName, config) {
  const cssTemplate = config["module-css"]
    ? ImportModuleCss(componentName, config["css-prefix"])
    : "";
  const scriptTemplate = ImportScript(componentName, config["script-type"]);
  const baseTemplate = "import * as React from 'react';";
  const template = joinEscape(baseTemplate, cssTemplate, scriptTemplate);
  return template;
}

const joinEscape = (...templates) => {
  return templates.join("\n");
};

const makeCamelCase = (name) => {
  const words = name.split("-");
  const camelWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return camelWords.join("");
};

const scssTemplate = `@import "/mixin"`;

const tsHookTemplate = (componentName) => {
  const camelComponentName = makeCamelCase(componentName);
  return `
  interface  ${camelComponentName}Props{
      
  }
  
  export default function ${camelComponentName} (props:${camelComponentName}Props) {
      return (
  
    );
  }`;
};

const jsHookTemplate = (componentName) => {
  const camelComponentName = makeCamelCase(componentName);
  return `
export default function ${camelComponentName} (props) {
    return (

  );
}`;
};

function ImportModuleCss(componentName, prefix) {
  return `import styles from './${componentName}.module.${prefix}'`;
}

function ImportScript(componentName, prefix) {
  if (prefix === "ts") {
    return tsHookTemplate(componentName);
  } else if (prefix === "js") {
    return jsHookTemplate(componentName);
  }
}

module.exports = {
  makeHookTemplate,
  scssTemplate,
};
