//with transition
import React, { useState, useTransition } from "react";

const UseTransitionDemo: React.FC = () =>{
    const[searchTerm, setSearchTerm] = useState("");
    const[list] = useState(
        Array.from({length: 20000}, (_, i) => `Item ${i+1}`)
    );

    const [filteredList, setFilteredList] = useState(list);

    //using transition hook
    const [ispending, startTransition] = useTransition();

    const handleSearch = (e: any) => {
        const value = e.target.value;
        setSearchTerm(value);

    //mark this update as a transition not priority
    startTransition(() => {
        const filtered = list.filter((item)=>
        item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredList(filtered);
        });
    };


    return (
        <>
        <div className="container">
            <div className="example-section">
            <h1>w/o transition hook</h1>
            <input type="text" value={searchTerm} onChange={handleSearch} />

            {ispending && <p>Loading...</p>}{''}

            {filteredList.map((item,index) =>(
                <p key={index}>{item}</p>
            ))}
            </div>
            <div className="content-section">
                <h3> useTransition Hook</h3>
                <br />
                <p>With useTransition</p>
                <p>Filtering happens as a non-urgent update, keeping the input field responsive.
                   The "Loading..." message provides feedback while filtering is in progress.
                   Better performance and user experience, especially with large datasets.
                </p>

            </div>
        </div>
        </>
    );
};

export default UseTransitionDemo;

//without transition
// import React, { useState } from "react";

// const UseTransitionDemo: React.FC = () =>{
//     const[searchTerm, setSearchTerm] = useState("");
//     const[list] = useState(
//         Array.from({length: 20000}, (_, i) => `Item ${i+1}`)
//     );

//     const [filteredList, setFilteredList] = useState(list);

//     const handleSearch = (e: any) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//     //this is not using usetransition so filtering happens synchronously
//     const filtered = list.filter((item)=>
//     item.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredList(filtered);
//     };


//     return (
//         <>
//         <div className="container">
//             <div className="example-section">
//             <h1>w/o transition hook</h1>
//             <input type="text" value={searchTerm} onChange={handleSearch} />

//             {filteredList.map((item,index) =>(
//                 <p key={index}>{item}</p>
//             ))}
//             </div>
//             <div className="content-section">
//                 <h1> Transition Hook</h1>
//             </div>
//         </div>
//         </>
//     );
// };

// export default UseTransitionDemo;