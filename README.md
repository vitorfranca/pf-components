# PF Shared Components

## How to contribute:

1. Create a directory inside `src` for the new component
2. Create the following files inside:

```
CHANGELOG.md
index.js
package.json
README.md
```

3. Content of files:

`index.js`

```
export { default } from "./src";
```

`package.json`

```
{
  "name": "component-name",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "build": "webpack -p --config ../../webpack.config.js"
  },
  "publishConfig": {
    "access": "public"
  }
}
```

`README.md`

```
# Name of the component

## How to Use
...

## Props

| name              |   type    | is required | default value |
| :---------------- | :-------: | :---------: | ------------: |
| prop1             |  string   |    true     |             - |
| prop2             |  boolean  |    false    |         false |
```

### Publishing:

```
npm run build
lerna bootstrap
lerna publish [major | minor | patch]
# Are you sure you want to publish these packages? Yes
```
