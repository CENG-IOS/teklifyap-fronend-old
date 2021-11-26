import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

function FakeLoader(props) {
    const [isTimedOut, setTimedOut] = React.useState(false);
    React.useEffect(() => {
        const id = setTimeout(() => setTimedOut(true), 2000);
        return () => clearTimeout(id);
    }, []);
    return isTimedOut ? (
        props.children
    ) : (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                <CircularProgress />
            </div>

            <div className="mt-2 userse">
                {props.loadingText}
            </div>
        </div>
    );
}

export default FakeLoader;