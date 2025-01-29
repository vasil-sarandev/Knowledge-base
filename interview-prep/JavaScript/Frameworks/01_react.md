# Frameworks - React & Redux & NextJS Fundamentals

<a id="top"></a>
# Table of Content

- [React Fundamentals](#react-fundamentals)
    - [What is React?](#definition)
    - [What is the Virtual DOM and why does it exist?](#virtual-dom)
    - [Explain `Components`. What type of components there are?](#components)
    - [Explain the `Component Lifecycle`](#lifecycle)
    - [What are `refs` and what are they used for?](#refs)
    - [What are `Controlled` and `Uncontrolled` Components in React?](#controlled-uncontrolled)
    - [How can I prevent unnecessary re-rendering?](#rerendering)
    - [What are Higher-order Components?](#hocs)
    - [What `state` management strategies do you use?](#state)
    - [Show how you would implement a Context Provider and Consumer.](#context)
    - [Explain Composition vs Inheritance in React](#composition)
- [React Hooks](#react-hooks)
    - [`useState`](#useState)
    - [`useEffect`](#useEffect)
    - [`useContext`](#useContext)
    - [`useReducer`](#useReducer)
    - [`useCallback`](#useCallback)
    - [`useMemo`](#useMemo)
    - [`useRef`](#useRef)
    - [`useLayoutEffect`](#useLayoutEffect)

## <a id="react-fundamentals"></a>React Fundamentals
  ### <a id="definition"></a>What is `React`?
  React is a JavaScript library for building user interfaces. Its main features are `Virtual DOM`, `JSX`, `Unidirectional data-flow`, `Components` and `Hooks`.
  
  [Back to top](#top)

  ### <a id="definition"></a>What is the `Virtual DOM` and why does it exist?
  Manipulating the actual `DOM` is expensive. `React` makes a virtual representation of the actual `DOM` in memory.
  
  Expected changes are first reflected in an updated version of the `Virtual DOM`. The updated `Virtual DOM` is compared with its previous version using `React’s` ‘diffing’ algorithm to determine how to best update the real `DOM`.

  [Back to top](#top)

  ### <a id="components"></a>Explain `Components`. What type of components there are?
  A `Component` is a single, independent and reusable piece of the UI.

  - `Class Components` are implemented using ES6 Classes and extend `React.Component`

  ```javascript
    class Car extends React.Component {
        constructor() {
            super(props);
            this.state = {color: "red", number: this.props.number};
        }
        componentDidMount() {
            // do something
        }
        render() {
            return <h2>I am a {this.state.color} Car with number {this.props.number}!</h2>;
        }
    }
  ```

  - `Functional Components` are implemented by a JavaScript function that takes a props argument and returns a `React Element`

  ```javascript
    const Car = ({number}) => {
        const [state, setState] = useState({color:'red', number: number});
        return (
            <h2> I am a {state.color} car with number {state.number} </h2>
        )
    }
  ```

  [Back to top](#top)


  ### <a id="lifecycle"></a>Explain the `Component Lifecycle`.
  The `Component Lifecycle` is used to explain the different stages of a `Component`. 
  
  There are 3 main phases.
  
  - **Mounting**: `constructor` → `render` → `DOM update` → `componentDidMount`
  - **Updating**: `render` → `DOM update` → `componentDidUpdate`
  - **Unmounting**: `componentWillUnmount`

  [Back to top](#top)

  
  ### <a id="refs"></a>What are `refs` and what are they used for?.
  Refs provide access to DOM nodes or React elements created in the render() method. Example uses include:
  - Managing focus, text selection, or media playback.
  - Triggering imperative animations.
  - Integration with third-party DOM libraries.

  [Back to top](#top)

  
  ### <a id="controlled-uncontrolled"></a>What are `Controlled` and `Uncontrolled` Components in React?
  Both are ways to implement form controls in React. 
  - **Controlled**: form data/updates is handled by the state in a React Component
  - **Uncontrolled**: form data/updates is handled by the DOM.


  [Back to top](#top)

  
  ### <a id="rerendering"></a>How can I prevent unnecessary re-rendering?
  - `React.PureComponent` : Components created off of this class do a shallow comparison with the upcoming props and state and re-render if there are changes.
  - `React.Memo / useMemo()`: : Higher-order component that works like React.PureComponent but used for function components
  - Handle state / architecture better so each `Component` is exposed only to the `props` it needs.


  [Back to top](#top)


  ### <a id="hocs"></a>What are Higher-order Components?
  `HOC` is a function that takes a `Component` and returns a new `Component`.

  ```javascript
    const EnhancedComponent = higherOrderComponent(WrappedComponent);
  ```

  [Back to top](#top)

  ### <a id="state"></a>What `state` management strategies do you use?
  `useState` and `useReducer` are absolutely great at keeping track of state in the component.
  
  For state management the most popular strategies are `Context.API` and `Redux`


  [Back to top](#top)

  
  ### <a id="context"></a>Show how you would implement a Context Provider and Consumer.
  ```javascript
  export const MyContext = React.createContext(defaultValue);

  export const MyContextProvider = (props) => {
    const [state, setState] = useState({})

    const doSomething = () => {
      // do something
    }

    return (
      <MyContext.Provider value={...state, doSomething}>{props.children}</MyContext.Provider>
    )
  }

  export const useMyContext = useContext(MyContext)
  
  // const { doSomething } = useMyContext() in a Component.

  ```

  [Back to top](#top)

  ### <a id="composition"></a>Explain Composition vs Inheritance in React
  React has a powerful composition model, and it's recommended to use composition instead of inheritance to reuse code between components.
  The general idea is that anything you need to configure or pass to a component can be done with props.

  [Back to top](#top)


## <a id="react-hooks"></a>React Hooks
  ### <a id="useState"></a>`useState`
  Returns a stateful value, and a function to update it.

  If the value we want to setState to is computed from the prevState, we can provide 
  a function to setState that takes the prevState as an argument,
  which would prevent React from batching state updates and always 
  use the latest state value in our computation.


  ```javascript
    const Counter = ({initialCount}) => {
      const [count, setCount] = useState(initialCount);
      return (
        <>
          Count: {count}
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
      );
    }
  ```

  [Back to top](#top)

  ### <a id="useEffect"></a>`useEffect`

  Accepts a function that contains imperative, possibly effectful code.

  By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.

  If you provide an empty array for dependancies, it will only run once when the component's layout and paint is finished (similar to `componentDidMount`)

  ```javascript
    useEffect(() => {
      subscription.start()
      return () => {
        // Clean up the subscription
        subscription.unsubscribe();
      };
    }, [...dependencies]);
  ```
  
  [Back to top](#top)


  ### <a id="useContext"></a>`useContext`

  Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
  The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

  ```javascript
  const value = useContext(MyContext);
  ```
  
  [Back to top](#top)


  ### <a id="useReducer"></a>`useReducer`
  `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
  `useReducer` also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

  ```javascript
  const initialState = {count: 0};

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </>
    );
  }
  ```
  
  [Back to top](#top)


  ### <a id="useCallback"></a>`useCallback`

  Returns a **memoized** callback.

  Pass an inline callback and an array of dependencies. `useCallback` will return a **memoized** version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders or if the callback is a dependency for a `useEffect`.

  ```javascript
  const memoizedCallback = useCallback(
    () => {
      doSomething(a, b);
    },
    [a, b],
  );
  ```
  
  [Back to top](#top)


  ### <a id="useMemo"></a>`useMemo`

  Returns a **memoized** value.

  Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

  If no array is provided, a new value will be computed on every render.

  ```javascript
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```
  
  [Back to top](#top)


  ### <a id="useRef"></a>`useRef`

  `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.


  ```javascript
  const elementRef = useRef(null);
  // somewhere in render
  <div ref={elementRef}/>
  ```
  
  [Back to top](#top)


  ### <a id="useLayoutEffect"></a>`useLayoutEffect`

  The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
  
  [Back to top](#top)
  

