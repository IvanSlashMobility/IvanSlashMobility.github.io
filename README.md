# Slash Template

## How to rename project?

Replace slashtemplate occurrences with your project name.
Update the favicon.ico and any data in the public folder with your project info and logos.

## How to run project?

Run ```npm start``` (runs development environment)
Run ```npm run start:staging``` (runs staging environment)
Run ```npm run start:prod``` (runs production environment)

## Environment variables

Environment variables belong in the .env-cmdrc.json file. All of its names must start with REACT_APP_ in order to work. When updating .env files make sure to restart the server to reflect the changes.

## Icons package

Icons are implemented using react-icons library, you can look for any icons at: https://react-icons.github.io/react-icons/search

## Toast package

Toasts/alerts are implemented using react-toastify + toastService. See https://fkhadra.github.io/react-toastify/introduction/ for more details on customization and usage.

# Dropdown/select package

Selectable inputs are implemented using react-select. See https://react-select.com/home for more details on customization and usage.