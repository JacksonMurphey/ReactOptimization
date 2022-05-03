# ReactOptimization
Working with React.memo, useMemo, useCallback


## useCallback
Worked with the useCallback hook, which allows you to store a returned value in memory across component executions.
This allows you to tell React that we want to save a certain function's return value, and that this function/object should 
not be recreated with every execution.

## useMemo
Worked with the hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. 
You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
This is somewhat similiar to useCallback

## useMemo vs. useCallback
In both useMemo and useCallback, the hook accepts a function and an array of dependencies. 
The major difference between useCallback and useMemo is that useCallback will memory the returned value, whereas useMemo will memory the function.

## React.memo()
React.memo will only work with functional components, but what does it do? When called it tells React, for this component that it will receive as 
an argument, React should look at the props that this component receives and check the new value for these props, and compare it to the previous value
that those props had. Only if a value of a prop has changed, then should the component be re-evaluated and re-executed.
If the parent component changed but the prop's values being passed did not, then the component execution will be skipped. 

## React.memo - optimization note:
Why would you not use React.memo on all your functional components if could help optimize your application?
The answer being, because this optimization comes at its own cost. The memo method tells react that when ever the parent component changes, it
should then come to this component and compare the new prop values to the previous props values. Therefore, react now has to do 2 things;
store the previous prop values in memory, and then it needs to make the comparsion check, which of course has its own performance costs. 
