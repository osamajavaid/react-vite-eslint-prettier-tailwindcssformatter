module.exports = {
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "@upleveled/prettier-plugin-tailwindcss"
  ],
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": true,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "importOrder": [
    "^react$",
    "^next",
    "^[a-z]",
    "^@",
    "^~",
    "^\\.\\.(?!/?$)",
    "^\\.\\./?$",
    "^\\./(?=.*/)(?!/?$)",
    "^\\.(?!/?$)",
    "^\\./?$",
    "^.+\\.s?css$",
    "^\\u0000"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}

