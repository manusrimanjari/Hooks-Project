import React from "react";
import './context_example.scss'
import ComponentC from "./ComponentC";

const ComponentB: React.FC= () =>{
    return (
        <>
        <div className="box">
            <h1>Component B</h1>
            <ComponentC />

        </div>
        </>
    );
};

export default ComponentB;

//prop drilling
// import React from "react";
// import './context_example.scss'
// import ComponentC from "./ComponentC";

// interface ComponentBprops {
//     user: string;
// }
// const ComponentB: React.FC<ComponentBprops>= ({user}) =>{
//     return (
//         <>
//         <div className="box">
//             <h1>Component B</h1>
//             <ComponentC user = {user} />

//         </div>
//         </>
//     );
// };

// export default ComponentB;