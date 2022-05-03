import React from "react";

const Demo = (props) => {
    console.log('Demo Output')
    return <p>{props.show ? 'This is new' : ''}</p>

}
export default React.memo(Demo) //this only works with functional components. 
//MEMO: What does memo do?
//It tells react, for this component(Demo) that it receives as an argurment, React should look at the props that this component recieves 
//and check the new value for these props, and compare it to the previous value that those props had.
//Only if a value of a prop changed, that then should the component be re-executed and re-evaluated. 
//If the parent component changed but the props values being passed did not, then component execution will be skipped

//So, Why Dont we use React.memo() on all our components since it optimizes them??
//-> Because this optimization comes at a cost.
// The memo method tells react that when every the parent component changes, it should then come to this component and compare the new prop
// values to the previous prop values. 
// Therefore, react now has to do 2 things: store the previous prop values in memory and then it needs to make the comparison check
// This of course has its own performance costs. 
