# Your one stop shop for Prettier and Eslint settings


Tired of headaches, of losing sleep worried about your formatting and linting
rules? Well, take a load off friend, I have your solution right here. Just paste
this line in the ole terminal over there,

```
  npm i -D eslint-config-eslint-prettier
```

make sure there is a .eslintrc file in the root of your project with this one
single line,

```
{
  "extends": "eslint-prettier"
}
```

and make sure there's a prettier.config.js file in the root of your project
with this single line,

```
module.exports = require('eslint-plugin-custom-prettier');
```

and you're sitting on easy street.
