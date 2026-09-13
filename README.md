# DEV Stack

A web application that lets you explore technologies, browse their details, and build a personalized development stack.

## Technologies

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite

## Features

- Browse a curated list of technologies with descriptions, ratings, and categories.
- Add technologies to your personal stack with instant toast notifications and duplicate detection.
- Manage your stack by removing individual items or clearing the entire stack at once.

## Q&A

**What is JSX, and why is it used in React?**

JSX is a JavaScript syntax extension that lets you write HTML-like markup directly inside JavaScript code. It reads like the UI you are building and still has the full power of JavaScript. Under the hood, JSX gets compiled into `React.createElement()` calls that React renders to the DOM.

**What is the difference between props and state?**

Props are read-only data passed from a parent component to a child component. The child cannot change them. State is data that a component owns and manages itself, and it can change over time using setters like `setState`. When state changes, the component re-renders.

**What does the useState hook do, and where did you use it in this project?**

`useState` lets a component store and update local state. It returns an array with the current value and a function to update it. It was used in `Technologies.tsx` to manage the `stack` array, holding the technologies the user has added to their stack.

**What does the useEffect hook do, and why did you need it to load the JSON data?**

`useEffect` runs after the component renders and is used for side effects like fetching data, subscriptions, or updating the DOM. In this project, the JSON data is loaded without `useEffect`: the `use()` hook (React 19) consumes the promise passed from `App.tsx` inside a `<Suspense>` boundary, which handles the loading state automatically.

**Why does every item in a .map() list need a unique key prop?**

React uses the `key` prop to identify each item in a list so it can efficiently track which items were added, removed, or changed during re-renders. Without a stable key, React may reuse the wrong elements and cause rendering bugs. In `Technologies.tsx`, the tech cards use `slug` as the key and the stack items do too.

**What is conditional rendering? Show one place you used it**

Conditional rendering means rendering different UI based on a condition, for example with a ternary operator or `&&`. In `Technologies.tsx`, the "Your Stack" sidebar checks `stack.length === 0`: when the stack is empty it shows the "Your stack is empty." message, otherwise it lists the added technologies:

```jsx
{stack.length === 0 ? (
  <p className="text-[10px] text-gray-400">Your stack is empty.</p>
) : (
  // ...list of added technologies
)}
```

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through props. For example, `App.tsx` passes the JSON data promise to `Technologies` as a prop: `<Technologies data={dataPromise()} />`. To send data back up, the parent passes a callback function as a prop and the child calls it with the value it wants to send back. In this project, the stack state currently lives inside `Technologies`, so it manages its own updates without lifting state back to `App`.
