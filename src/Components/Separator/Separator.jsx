import './Separator.scss';
import { useState, useEffect } from 'react';
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}


export default function Separator({TextLine}) {
    const { height, width } = useWindowDimensions();
    console.log(width)
    return (
        <div className="separator">
            <section className="separator__wave">
                <div className="line">{TextLine.repeat(50)}</div>
            </section>
        </div>
    )
}