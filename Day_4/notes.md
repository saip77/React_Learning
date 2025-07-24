### Day 4 of Learning React

#### Understanding map() to render arrays

Why map()?
React is great at rendering lists of data, and we use .map() to turn array into jsx elements.

```jsx
const fruits = ['apple', 'banana', 'orange'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}


```
#### Understanding conditional rendering

```jsx  
{isActive ? <h1>Hello, world!</h1> : <h2>Goodbye, world!</h2>}

```

#### Understanding implicit and explicit return

For implicit return you use parentheses () to return JSX directly — no return keyword needed.

```jsx
const Greeting = () => (
  <h1>Hello, world!</h1>
);

```
For explicit return you use curly braces {} in your arrow function body and must include the return keyword.

```jsx
const Greeting = () => {
  return <h1>Hello, world!</h1>;
};
```