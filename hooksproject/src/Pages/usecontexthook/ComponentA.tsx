// using useContext 
import React, { createContext, useState } from "react";
import './context_example.scss'
import ComponentB from "./ComponentB";

export const UserContext = createContext<string | undefined>(undefined);

const ComponentA: React.FC = () =>{

    const [user] = useState('manu');
    return (
        <>
        <div className="box">
            <h1>Component A</h1>
            <h2> {`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
        </>
    );
};

export default ComponentA;

//prop drilling
// import React, { useState } from "react";
// import './context_example.scss'
// import ComponentB from "./ComponentB";



// const ComponentA: React.FC = () =>{

//     const [user] = useState('manu');
//     return (
//         <>
//         <div className="box">
//             <h1>Component A</h1>
//             <h2> {`Hello ${user}`}</h2>
//             <ComponentB user={user} />
//         </div>
//         </>
//     );
// };

// export default ComponentA;