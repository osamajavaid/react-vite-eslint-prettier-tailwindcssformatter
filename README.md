# Vite Airbnb Prettier TailwindCSS Formatter

This project is a template setup for a React application using Vite, Airbnb ESLint configuration, Prettier for code formatting, and TailwindCSS for styling.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Configuration](#configuration)
- [Usage](#usage)

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later) or [yarn](https://yarnpkg.com/) (version 1.22.x or later)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/vite-airbnb-prettier-tailwindcssformatter.git
cd vite-airbnb-prettier-tailwindcssformatter
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

You can run these scripts using npm or yarn:

```sh
npm run dev
# or
yarn dev
```

## Dependencies

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.23.1

## Dev Dependencies

- `@trivago/prettier-plugin-sort-imports`: ^4.3.0
- `@types/react`: ^18.2.43
- `@types/react-dom`: ^18.2.17
- `@upleveled/prettier-plugin-tailwindcss`: ^0.6.0
- `@vitejs/plugin-react`: ^4.2.1
- `autoprefixer`: ^10.4.19
- `eslint`: ^8.56.0
- `eslint-config-airbnb`: ^19.0.4
- `eslint-config-prettier`: ^9.1.0
- `eslint-plugin-import`: ^2.29.1
- `eslint-plugin-jsx-a11y`: ^6.8.0
- `eslint-plugin-prettier`: ^5.1.3
- `eslint-plugin-react`: ^7.33.2
- `eslint-plugin-react-hooks`: ^4.6.0
- `eslint-plugin-react-refresh`: ^0.4.5
- `postcss`: ^8.4.38
- `prettier`: ^3.2.5
- `tailwindcss`: ^3.4.3
- `vite`: ^5.0.8
- `vite-plugin-svgr`: ^4.2.0

## Configuration

### ESLint

This project uses the Airbnb style guide for ESLint. The configuration can be found in the `.eslintrc` file. You can adjust the rules as needed.

### Prettier

Prettier is used for code formatting, with some additional plugins for sorting imports and formatting TailwindCSS classes. The configuration can be found in the `.prettierrc` file.

### TailwindCSS

TailwindCSS is set up and configured via the `tailwind.config.js` file. You can customize the configuration as per your project requirements.

### Vite

Vite is used as the build tool and development server. The configuration can be found in the `vite.config.js` file.

## Usage

### Development

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

### Building for Production

To build the application for production, run:

```sh
npm run build
# or
yarn build
```

### Previewing the Production Build

To preview the production build, run:

```sh
npm run preview
# or
yarn preview
```

### Linting

To lint the code, run:

```sh
npm run lint
# or
yarn lint
```

### Formatting

To format the code using Prettier, run:

```sh
npm run format
# or
yarn format
```

To check if the code is formatted correctly, run:

```sh
npm run prettier
# or
yarn prettier
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
