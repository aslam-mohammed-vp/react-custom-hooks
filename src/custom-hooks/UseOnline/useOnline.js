import { useEffect, useState } from "react";

const style = {
    width: '16px',
    height: '16px',
    backgroundColor: 'red',
    borderRadius: '50%'
}

export default function useIsOnline() {
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsOnline(true);
        }, 3000)
    }, [])



    return <div style={{ ...style, backgroundColor: isOnline ? 'green' : 'red' }}></div>
}