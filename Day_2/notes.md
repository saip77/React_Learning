### Day 2 of Learning React

#### Understanding the project folder structure

my-react-app/
*   `node_modules/`
*   `public/`
    *   `vite.svg`            ← Static assets (copied as-is)
*   `src/`
    *   `App.jsx`             ← Main component
    *   `main.jsx`            ← Entry point
    *   `index.css`           ← Styles
*   `.gitignore`
*   `index.html`             ← Root HTML file
*   `package.json`           ← Dependencies and scripts
*   `vite.config.js`         ← Vite configuration

#### Understanding JSX in React

JSX is a syntax extension for JavaScript that allows you to write HTML directly in your JavaScript code.

Example:

```jsx
const element = <h1>Hello, world!</h1>;
```

But this is equivalent to:

```jsx
const element = React.createElement('h1', null, 'Hello, world!');
```

#### Understanding React.createElement signature

React.createElement(type, props, ...children)

type: The type of element to create (e.g., 'div', 'h1', 'p')
props: An object literal of properties to add to the element
children: An array of children to add to the element


#### JSX Rules

1. Wrap in one parent element either div or fragment (<> </>)
Example:
```jsx
<div>
  <h1>Hello, world!</h1>
</div>
```

2. Use className instead of class
Example:
```jsx
<div className="container">
  <h1>Hello, world!</h1>
</div>
```

3. Use {} for dynamic values
Example:
```jsx
<div>
  <h1>Hello, {name}!</h1>
</div>
```

4. Self-closing tags
Example:
```jsx
<img src="logo.png" alt="Vite logo" />
```

5. Can't use if/else inside JSX use ternary operator
Example:
```jsx
{isActive ? <h1>Hello, world!</h1> : <h2>Goodbye, world!</h2>}
```
#### Understanding Functional Components

Functional components are functions that return a React element. They are simpler and more lightweight than class components.

```jsx
function Greeting() {
  return <h1>Hello, world!</h1>;
}
```

OR

```jsx
const Greeting = () => <h1>Hello, world!</h1>;
```

After that you can use it in your JSX like this in App.jsx:

```jsx
function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}

```
> Note: React passes props to functional components as an object.

So, if you write:

```
function Greeting(name) {

}
```
this is wrong, because name is treated as a string, not an object.

Instead, you should write:
```
function Greeting({name}) {
    return <h1>Hello, {name}!</h1>;
}
```

OR

```
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}
```