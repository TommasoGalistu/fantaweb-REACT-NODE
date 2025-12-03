import { Link } from "react-router-dom";

function PageProfile(){
    return (
        <>
            <div>
                Tutti i dettagli della persona e logout
                <Link as={Link} to="/logout">Logout</Link>
            </div>
        </>
    )
}

export default PageProfile;