import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Unexpected Application Error!</h1>
            <p>{err?.status} {err?.statusText}</p>
        </div>
    )
}

export default Error