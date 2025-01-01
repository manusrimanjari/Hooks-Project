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
        <h1>usememo Demo page</h1>
        <h3>Sorting data: </h3>
        {sortedData.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>Sort</button>
        </>
    );
};

export default UseMemoDemo;