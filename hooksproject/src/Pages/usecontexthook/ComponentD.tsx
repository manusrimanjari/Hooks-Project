import React from "react";
import './context_example.scss'
import { UserContext } from "./ComponentA";


const ComponentD: React.FC = () =>{

    const user = React.useContext(UserContext);
    return (
        <>
        <div className="box">
            <h1>Component D</h1>
            <h2>{`bye ${user}`}</h2>

        </div>
        </>
    );
};

export default ComponentD;

//prop drilling
// import React from "react";
// import './context_example.scss'

// interface ComponentDprops{
//     user: string;
// }

// const ComponentD: React.FC<ComponentDprops> = ({user}) =>{
//     return (
//         <>
//         <div className="box">
//             <h1>Component D</h1>
//             <h2> {`bye ${user}`}</h2>

//         </div>
//         </>
//     );
// };

// export default ComponentD;