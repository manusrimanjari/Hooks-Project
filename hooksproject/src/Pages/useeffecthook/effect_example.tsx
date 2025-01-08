import React, {useEffect} from "react";
import './effect_example.scss'
const UseEffectDemo: React.FC = () =>{

    const [joke, setJoke] = React.useState({setup: "", punchline: ""});
    const [count, setCount] = React.useState(0);

useEffect(() => { 
  console.log('componentDidMount ');
    async function fetchJoke() {
        try{
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const result = await response.json();
            setJoke(result);
            
        } catch (error) {
            console.error(error);
        }
    }

    fetchJoke();

    return () => {
      console.log('componentWillUnmount ');
      };

}, []);

//with count as dependency array
useEffect(() => {
  if (count > 0) {
      console.log(`componentDidUpdate: Count updated to ${count}`);
  }
}, [count]);

//without dependency array, this will run on every render
useEffect(() => {
  console.log('useEffect w/o dependency array ');
});

const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
  };

    return (
        <>
        <div className="container"> 
            <div className="example-section">
                <div className="joke">
                    <p><strong> Setup: </strong>{joke.setup}</p>
                    <p><strong>Punchline: </strong>{joke.punchline}</p>
                </div>
                <br />
                <h2> Current Count: {count} </h2>
                <button onClick={handleIncrement}> Increment Count </button>
            </div>
            <div className="content-section">
                <h3>useEffect Hook</h3>
                <br />
                <p> useEffect Hook is used to handle side effects in functional components.
                A side effect is anything that affects something outside the scope of the function being executed,
                such as fetching data, updating the DOM, or setting timers.</p>
            </div>
          
        </div>
        </>
    );
};

export default UseEffectDemo;







// import React, { useEffect } from "react";
// import './effect_example.scss'

// const UseEffectDemo: React.FC = () =>{
//     const [count1, setCount1] = React.useState(0);
//     const [count2, setCount2] = React.useState(0);

//     useEffect(() => {
//         console.log("component mounted")
//     },[])

//     const handleIncrement = () => {
//         setCount1(count1 + 1);
//     }

//     const handleIncrement2 = () => {
//         setCount2(count2 + 1);
//     }

//     const handleDecrement1 = () => {
//         setCount1(count1 - 1);
//     }

//     const handleDecrement2 = () => {
//         setCount2(count2 - 1);
//     }

//     return (
//         <>
//         <h3>Counter 1: {count1}</h3>
//         <button onClick={handleIncrement}>Button 1</button>
//         <button onClick={handleDecrement1}>Button 2</button>
//         <br />
//         <br />
//         <h3>Counter 2: {count2}</h3>
//         <button onClick={handleIncrement2}>Button 3</button>
//         <button onClick={handleDecrement2}>Button 4</button>
//         </>
//     );
// };

// export default UseEffectDemo;