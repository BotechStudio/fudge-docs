---
id: add-new-component
title: Add new JS6 component
---

### Intro

Fudge let you define your own components and implement them easily in your code,
keeping your code tidy and organized.

In this tutorial, we will guide you step by step how to integrate your own component to your code.
The component example for this guide is a JS6 component using [styled-component](https://styled-components.com/), but you can use any method as your preferences. 

:::note

Please navigate to **client** folder in your project.

:::

### Step one

1.1 Navigate to **cleint > app > components**.

1.2 Create a new folder named by your new component.

1.3 Inside the folder create **index.js** file.

1.4 Create your component in the file and export it, for example:
```javascript
import styled from 'styled-components';

const Example = styled.div`
    background-color: black;
    color: white;
    text-align: center;
    `;

function MyNewComponent(){
    return (
        <Example> Fudge is cool </Example>
    )
}

export default MyNewComponent;
```


### Step two

2.1 Navigate to **client > app > components > index.js**.

2.2  In the file, add new line to export your new component.

```javascript
export { default as myNewComponent } from './myNewComponent';
```

### Step three

3.1 At any page you want to use this component, import it.

```javascript
import { myNewComponent } from '../../components';
```
