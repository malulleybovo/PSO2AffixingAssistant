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
* (If on Windows OS) Execute rebuild.bat and follow the instructions within the command prompt that will be opened. The Update Manager will guide you through the great majority of the pending updates for the Assistant and issues it sees with your changes.
* (If on MacOS) Open the terminal with NodeJS available, `cd` to the project folder, and execute the command: `node --eval "require('./updateManager.min.js')"`.
* On the first execution, expect to be prompted to install any missing npm package dependencies before utilizing the Update Manager
* Resolve all pending updates or issues indicated in the command prompt (if any). Only Pull Requests without any pending update or issue will be accepted.
* Note that although the Update Manager facilitates updating, it is not perfect. For example, it does not check for new common Ability Factors and new common Add Ability Items (it checks SSAs only in these cases). So make sure nothing new is still missing. Consult PSO2 Swiki to check that.
* If you reach a point in which the Update Manager insists there is a pending update but you know for certain that has been taken care of, include in the Pull Request description a copy of the Update Manager log and state why that has been taken care of. If the reason is valid, the particular case may be added to the Update Manager's ignore list. Note that pending update warnings do not prevent you from building the project.
* Once the update and build process is complete, test the updated application to ensure everything works.

## Submitting Changes

* When everything is tested and ready, submit a Pull Request including `Update Affix Database` in the title and explaining what has been done in the update.
* Feedback may be given if necessary after reviewing the submitted Pull Request. Please be patience for the review since not always do I have the time to put in this project.