---
title: UseState | React 101
category:
    - Guide
    - React
tag:
    - React 101
---
## What is UseState?

`useState` is a function in react. React revolves around reuseable components, and **State Management**. It is essential to know basic knowledge of `useState` in order to create complex applications. Some examples with `useState` could be pressing a button, and have it display different text.

## Sample


::: code-tabs

@tab Hook Component

```js
    import { useState } from "react"
    
    export default function Example(){
        const [text, setText] = useState("placeholder")
        return(<>
        <p>Text: {text} </p>
        <button onClick={()=> setText("You clicked the button!")}>
        </>
        )
    }
```

:::

## Is that all?

**Definitely not**! State management can hold data for your forms, track submission, and other variables like you use in Javascript. TO put it in simple terms, React is just a way to `Bring HTML to Javascript`.

## Let's dive deeper

Well then, how would you use `useState`?

useState is like a variable, which can be set by calling the function in the second item in the array when defining it (yes very wordy). To make it simple,

```js
const [YOUR_VARIABLE_OR_DATA, SET_YOUR_DATA_AND_RUN_AS_FUNCTION] = useState(YOUR_PLACEHOLDER_CAN_BE_BLANK)
```

Once you're done, just use it anywhere in your code. Yes, even in functions **outside** of `return`!

## More Complex functions
You might be wondering, what if I wanted to change the state from a **Child Component**? Well, React does it all. Just pass the function to set the stage to the component.

```js
<RandomComponent setText={SET_YOUR_DATA_AND_RUN_AS_FUNCTION}/>
```

If I wanted to pass the value, can I do so too? **Yes!** just follow the same steps, and React automatically syncs the value with the ones you have changed anywhere. This can be particularly useful if you're planning to build a form, or a complex muli-part component.

## Cya!

Thanks for reading! See you next time. Check out our **React 101** Tutorials!