---
id: add-new-component
title: Add new JS6 component
---

### Introduction

Fudge lets you easily define and implement your own components within your code. This enables you to keep your code tidy and organized.

In this tutorial you will be guided on how to integrate your own complement into your code, step-by-step, We will use a JS6 component using [styled-component](https://styled-components.com/) for the purpose of this example, but you can use any method you prefer.

:::note
Please navigate to your project’s **client** folder.
:::

### Step one

1.1 Navigate to **cleint > app > components**.

1.2 Create a new folder with your component’s name.

1.3 Once inside the folder, create an **index.js** file.

1.4 Create and export your component in the file. For example:

```javascript
import styled from "styled-components";

const Example = styled.div`
  background-color: black;
  color: white;
  text-align: center;
`;

function MyNewComponent() {
  return <Example> Fudge is cool </Example>;
}

export default MyNewComponent;
```

### Step two

2.1 Navigate to **client > app > components > index.js**.

2.2 Once in the file, add a new line to export your new component.

```javascript
export { default as myNewComponent } from "./myNewComponent";
```

### Step three

3.1 Import your component to any page you wish.

```javascript
import { myNewComponent } from "../../components";
```
