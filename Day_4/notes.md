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

