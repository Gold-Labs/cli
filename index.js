#!/usr/bin/env node
const { makeHookTemplate, scssTemplate } = require("./template");
const fs = require("fs");
const path = require("path");
const option = require("./ComponentMaker.json");

const componentName = process.argv[2];
const PATH = `src/components/${componentName}`;

const makeComponentFolder = (componentName) => {
  makeFolder("src");
  makeFolder(`src/components`);
  makeFolder(`src/components/${componentName}`);
};

const makeFolder = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const makeScriptFile = () => {
  const tsxFileName = componentName + `.${option["script-type"]}x`;
  const script = makeHookTemplate(componentName, option);
  makeFile(tsxFileName, script);
};

const makeModuleScss = () => {
  const moduleScssFileName = componentName + ".module.scss";
  makeFile(moduleScssFileName, scssTemplate);
};

const makeFile = (fileName, template) => {
  const filePath = path.join(PATH, fileName);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template);
  }
};
const program = (componentName) => {
  makeComponentFolder(componentName);
  makeScriptFile();
  if (option["module-css"]) {
    makeModuleScss();
  }
};

program(componentName);
