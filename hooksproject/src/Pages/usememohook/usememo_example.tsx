import React, { useMemo, useState } from "react";

const UseMemoDemo: React.FC = () =>{
    const [sortOrder, setSortOrder] = useState('asc');
    const [data] = useState([5, 3, 8, 1, 9, 4, 7, 2, 6]);

    const sortedData = useMemo(() =>{
        console.log('sorting data');
        return data.sort((a, b) => {
            return sortOrder === 'asc' ? a - b : b - a;
        })
    },[data, sortOrder]);

    return (
        <>
        <div className="container">
            <div className="example-section">
        <h3>Sorting data: </h3>
        {sortedData.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>Sort</button>
        </div>
        <div className="content-section">
            <h3>useMemo Hook</h3>
            <p>The useMemo hook in React is used to memoize the result of a computation 
               so that it is not recalculated unnecessarily during re-renders.</p>
        </div>
        </div>
        </>
    );
};

export default UseMemoDemo;

// w/o useMemo
// import React, { useState } from "react";

// const UseMemoDemo: React.FC = () =>{
//     const [sortOrder, setSortOrder] = useState('asc');
//     const [data] = useState([5, 3, 8, 1, 9, 4, 7, 2, 6]);

//     const sortedData = data.sort((a,b) =>{
//         console.log('sorting data');
//         return sortOrder === 'asc' ? a - b : b - a;
//     });

//     return (
//         <>
//         <div className="container">
//             <div className="example-section">
//         <h3>Sorting data: </h3>
//         {sortedData.map((item, index) => (
//             <p key={index}>{item}</p>
//         ))}
//         <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>Sort</button>
//         </div>
//         <div className="content-section">
//             <h3>useMemo Hook</h3>
//             <p>The useMemo hook in React is used to memoize the result of a computation 
//                so that it is not recalculated unnecessarily during re-renders.</p>
//         </div>
//         </div>
//         </>
//     );
// };

// export default UseMemoDemo;

//use memo use memory to store the value and sort the data only once.