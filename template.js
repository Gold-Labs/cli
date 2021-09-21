function makeHookTemplate(componentName, config) {
  const cssTemplate = config["module-css"]
    ? ImportModuleCss(componentName, config["css-prefix"])
    : "";
  const scriptTemplate = ImportScript(componentName, config["script-type"]);

  return `import * as React from 'react';
    ${cssTemplate}

    ${scriptTemplate}
    `;
}

const scssTemplate = `@import "/mixin"`;

const tsHookTemplate = (componentName) => `
interface  ${componentName}Props{
    
}

export default function ${componentName} (props:${componentName}Props) {
    return (

  );
}`;

const jsHookTemplate = (componentName) => `
export default function ${componentName} (props) {
    return (

  );
}`;

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
