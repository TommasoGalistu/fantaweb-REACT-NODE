import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function VerifyEmail(){
    return (
        <>
        <div className="pageVerifyEmail">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
            <h3>La tua email è stata verificata</h3>
            {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
            <h3>Errore, torna nel profilo e verifica l'email</h3> */}
            <Link as={Link} to="/privato" className="button" >Torna alla Home</Link>
        </div>
        </>
    )
}

export default VerifyEmail