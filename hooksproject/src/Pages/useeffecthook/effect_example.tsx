import React, {useEffect} from "react";
import './effect_example.scss'
const UseEffectDemo: React.FC = () =>{

    const [joke, setJoke] = React.useState({setup: "", punchline: ""});

useEffect(() => { 
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
}, []);

console.log("component mounted")

    return (
        <>
        <div className="container"> 
            <div className="example-section">
                <div className="joke">
                    <p><strong> Setup: </strong>{joke.setup}</p>
                    <p><strong>Punchline: </strong>{joke.punchline}</p>
                </div>
            </div>
            <div className="content-section">
                <p>useEffect is a hook that allows you to perform side effects in your components.</p>
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