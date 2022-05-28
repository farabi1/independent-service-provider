import { useEffect, useState } from 'react';

const useMyData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('mydata.json')
            .then(res => res.json())
            .then(data => setData(data));
    }
        , []);
    return [data, setData];
};

export default useMyData;