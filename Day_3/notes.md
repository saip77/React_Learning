### Day 3 of Learning React

#### Understanding props or proerties in React

Props are a way to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

In this example, the Greeting component receives a prop called name. The prop is passed to the component as an object, and the name property is accessed using props.name.

#### Understanding props with destructuring

Destructuring is a JavaScript feature that allows you to extract values from arrays or objects and assign them to variables. It is a convenient way to access data from props.

```jsx
function Greeting({name}) {
  return <h1>Hello, {name}!</h1>;
}
```

In this example, the Greeting component receives a prop called name. The prop is destructured into the name variable, which can then be used in the component.

#### Understanding default props

Default props are props that are passed to a component if no props are provided. They are used to provide default values for the props.

```jsx
function Greeting({name = "World"}) {
  return <h1>Hello, {name}!</h1>;
}
```

In this example, the Greeting component receives a prop called name. If no name prop is provided, the default value "World" is used instead.

#### Understanding Component composition

Component composition is a way to combine multiple components into a single component. It allows you to reuse code and create more complex UIs.

```jsx
function Header() {
  return <h1>My App</h1>;
}

function Footer() {
  return <footer>© 2025</footer>;
}

function MainContent() {
  return <p>This is the main content.</p>;
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

```
