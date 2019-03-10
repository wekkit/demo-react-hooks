# demo-react-hooks

A demo on how to use react hooks for everything.

Concepts:

- Using useState / useContext hooks to create a global observable store
- Providing custom useAppState hook as an API to the store
- Using useState hook as transient component state (errors, input state, etc.)
- Using useEffect hook to run init state
- Using custom hooks (useAdd / useRemove) to handle side effects.

### Setup

This project is built on top of [NextJS](http://nextjs.org) for convenience

1. `npm install`
2. `npm run dev`
3. Open your browser and attempt to add / remove items. There is simulated delay with error conditions.