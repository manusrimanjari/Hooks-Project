import React from "react";
import './context_example.scss'
import ComponentD from "./ComponentD";

const ComponentC: React.FC = () =>{
    return (
        <>
        <div className="box">
            <h1>Component C</h1>
            <ComponentD />

        </div>
        </>
    );
};

export default ComponentC;

//prop drilling
// import React from "react";
// import './context_example.scss'
// import ComponentD from "./ComponentD";

// interface ComponentCprops{
//     user: string;
// }

// const ComponentC: React.FC<ComponentCprops> = ({user}) =>{
//     return (
//         <>
//         <div className="box">
//             <h1>Component C</h1>
//             <ComponentD user={user} />

//         </div>
//         </>
//     );
// };

// export default ComponentC;