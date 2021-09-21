
function hookTemplate(componentName, config) {

    const cssTemplate = Importcss(componentName, config.cssPrefix)
    const scriptTemplate = ImportScript(componentName, config.scriptPrefix)

    return `import * as React from 'react';
    ${Importcss(componentName, config.cssPrefix)};

    ${ImportScript(componentName, config.scriptPrefix)}
    `
}







const tsHookTemplate = (componentName) => `
interface  ${componentName}Props{
    
}

export default function ${componentName} (props:${componentName}Props) {
    return (

  );
}`

const jsHookTemplate = (componentName) => `
import styles from './${componentName}.module.scss';

export default function ${componentName} (props) {
    return (

  );
}`

export const scssTemplate = `@import "/mixin"`

function Importcss(componentName, prefix) {

    return `import styles from './${componentName}.${prefix}'`;
}

function ImportScript(componentName, prefix) {
    if (prefix === "ts") {
        return tsHookTemplate(componentName)
    } else if (prefix === "js") {
        return jsHookTemplate(componentName)
    }
}