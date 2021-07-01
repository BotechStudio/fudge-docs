---
id: adding-font
title: Add new font
---

### Introduction

To create an efficient and maintainable application, Fudge’s team uses [styled-components](https://styled-components.com), an advanced and modern styling tool.

Fonts are loaded using styled components technology, located inside specific components, for free use.

:::note

The file that holds the main styles is called **global-styles.js**. It can be found in c**client > app > global-styles.js**. For the following example, we will use [google-fonts](https://fonts.google.com).

:::

### Use case

To create the main styles, we chose to use **createGlobalStyle**, a styled-components method found within global-styles.js.

```javascript
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'SB Body', 'Roboto', sans-serif;
  }
`;
```

Please make sure to import the font to the **index.html** file or css file:

```javascript
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

To apply different fonts or styles, please import your desired font and use it within the created component. Make sure to either place it inside the correct section, or create a new one for this purpose.

example:

```javascript
.specialHeader {
    font-family: 'SB Heading', 'Roboto', sans-serif;
}
```
