# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the effect's callback function.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides the correct implementation.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`. 
4. Observe the counter rapidly increasing, indicating an infinite loop.

## Solution

The solution involves correctly managing state updates within the useEffect hook.  Often this requires carefully examining dependencies and using functional updates to avoid unintended side effects.