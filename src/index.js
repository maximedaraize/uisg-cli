#! /usr/bin/env node

const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const latestVersion = require("latest-version");
const currentLocalVersion = require("../package.json");
const boxen = require("boxen");
const chalk = require("chalk");

(async (callback) => {
  let npmLatestVersion = latestVersion("uisg-cli");
  let npmLatestVersionTrim = (await npmLatestVersion).replaceAll(".", "");
  let localVersionVariableTrim = currentLocalVersion.version.replaceAll(
    ".",
    ""
  );

  if (npmLatestVersionTrim > localVersionVariableTrim) {
    console.log(
      boxen(
        `
    Update available ${chalk.yellow(
      `${currentLocalVersion.version}`
    )} → ${chalk.green.bold(`${await npmLatestVersion}`)}
    Run ${chalk.blueBright.underline("npm i -g uisg-cli")} to update   
    `,
        { margin: 1, borderStyle: "double", borderColor: "magenta" }
      )
    );
  }
  callback();
})(questions);

function questions() {
  inquirer
    .prompt([
      {
        name: "styleguide_path",
        type: "input",
        message:
          "Where would you like to add the style guide (Press enter for root)",
        default: ".",
      },
      {
        name: "styleguide_template",
        type: "list",
        message: "Which template would you like to install",
        choices: [
          `${chalk.hex("#EFD81E")("html")}`,
          `${chalk.hex("#3FB27F")("vue")}`,
          `${chalk.hex("#5ED3F3")("react")}`,
          `${chalk.hex("#F83D00")("svelte")}`,
        ],
      },
    ])
    .then((answer) => {
      async function copyFiles() {
        let srcDir;
        if (answer.styleguide_template == `${chalk.hex("#EFD81E")("html")}`) {
          srcDir = path.join(__dirname, "html");
        } else if (
          answer.styleguide_template == `${chalk.hex("#3FB27F")("vue")}`
        ) {
          srcDir = path.join(__dirname, "vue");
        } else if (
          answer.styleguide_template == `${chalk.hex("#5ED3F3")("react")}`
        ) {
          srcDir = path.join(__dirname, "react");
        } else if (
          answer.styleguide_template == `${chalk.hex("#F83D00")("svelte")}`
        ) {
          srcDir = path.join(__dirname, "svelte");
        }
        console.log(srcDir);
        const destDir = answer.styleguide_path;
        try {
          await fs.copySync(srcDir, destDir, {
            overwrite: false,
            errorOnExist: true,
          });
          console.log("\x1b[32m", "\n ✨ Done. New style guide created.");

          console.log(
            "\x1b[37m",
            `\n 🌎 Website:`,
            "\x1b[36m",
            `https://uistyleguide.com`,
            "\x1b[37m",
            `\n ⭐️ Github:`,
            "\x1b[36m",
            ` https://github.com/maximedaraize/uisg-cli`
          );
          return true;
        } catch (error) {
          // if a scss folder already exist on the path chose by the user
          if (error.message.includes("already exists")) {
            console.log(
              "\x1b[33m",
              "🛑 A file with the same name already exist at this level."
            );
            return false;
          }
          // if the path of installation was not define properly
          if (error.message.includes("read-only file system")) {
            console.log(
              "\x1b[31m",
              "❗️ The path you chose to install the style guide was not define. \n For root level press enter or write './'"
            );
            return false;
          }
          throw error;
        }
      }
      copyFiles();
    });
}
