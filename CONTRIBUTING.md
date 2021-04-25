# How to contribute

The PSO2 Affixing Assistant project strives for great community engagement to keep the application updated. Currently, this project only accepts Pull Requests for updating the affix database. I streamlined the update process as much as I could by introducing an Update Manager to make it easy to catch on to the inner works of this beautiful Affixing Assistant. However, only the minified source code for the Update Manager shall be shared to prevent undesired tweaks in it.

## Getting Started

* Make sure to have a [GitHub account](https://github.com/signup/free).
* Make sure to have NodeJS installed (version 12.9.0 or later).
* Fork the repository on GitHub.
* Open rebuild.bat in a text editor.
* Paste the full path of the folder containing NodeJS on line 2 after the '=' sign (do not add spaces).

## Updating the Affix Database

* Create an update branch based on the master branch.
* Make commits of logical and atomic units.
* (If on Windows OS) Execute rebuild.bat.
* (If on MacOS or Linux) Open the terminal with NodeJS available, `cd` to the project folder, and execute the command: `node --eval "require('./updateManager.min.js')"`.
* Let the Update Manager do the magic of updating the Assistant.
* Pay a lot of attention to any WARNING or ERROR that might show up in the terminal while the build process is ongoing. Many WARNINGs are purely informational and won't affect the functionaly of the Assistant, but that is not true for all WARNINGs since they might cause further problems later in the process. Be extra mindful of them.
* Shall there be any issues while executing rebuild.bat, report it as soon as possible via an Issue [here](https://github.com/malulleybovo/PSO2AffixingAssistant/issues) as it might be due to structural changes in the source websites used to update the Assistant.
* Once the application is built successfully, indicated by a "Build Complete!" message in the terminal at the end of execution, thoroughly test the application to ensure everything works as expected.

## Testing the Update

* Make sure you have [NodeJS express npm package installed](https://www.npmjs.com/package/express) before proceeding.
* (If on Windows OS) Execute run.bat.
* (If on MacOS or Linux) Open the terminal with NodeJS available, `cd` to the project folder, and execute the command: `node --eval "require('./server.js')"`.
* Follow the instructions that show up in the terminal that will open.
* Open the the link that will show up in the terminal in a browser (preferably an up to date version of Google Chrome or Firefox).
* Test the updated version of the Assistant.

## Submitting Changes

* When everything is tested and ready, submit a Pull Request including `Update Affix Database` in the title.
* Feedback may be given if necessary after reviewing the submitted Pull Request. Please be patience for the review since not always do I have the time to put in this project.