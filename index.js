#!/usr/bin/env node

const fs = require("fs"); //file system
const path = require('path');
const readline = require('readline')
const componentName = process.argv[2];
const PATH = `src/components/${componentName}`;

const typescriptHookTemplate = `import * as React from 'react';
import styles from './${componentName}.module.scss';

export default function ${componentName} () {
    return (

  );
}`
const scssTemplate = `@import "/mixin"`

const makeComponentFolder = (componentName) => {
    makeFolder("src")
    makeFolder(`src/components`)
    makeFolder(`src/components/${componentName}`)
}

const makeFolder = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

const makeTsxFile = () => {
    const tsxFileName = componentName + '.tsx'
    makeFile(tsxFileName, typescriptHookTemplate);
}

const makeModuleScss = () => {
    const moduleScssFileName = componentName + ".module.scss"
    makeFile(moduleScssFileName, scssTemplate)
}

const makeFile = (fileName, template) => {
    const filePath = PATH + fileName

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, template)
    }
}
const program = (componentName) => {
    makeComponentFolder(componentName)
    makeTsxFile()
    makeModuleScss()
}

program(componentName)