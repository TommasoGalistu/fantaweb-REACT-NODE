import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../../store/context";
import { Link, useParams } from "react-router-dom";

function PageSingolChampionship(){
    const {championship, role} = useContext(ContextData)
    const { id } = useParams();
    const [champion, setChampion] = useState([])

    useEffect(() =>{
        let containChampionship = championship.filter(champion => champion.id == id)
        if(!containChampionship.length){
            //richiesta campionato
            return
        }
        setChampion(old => containChampionship[0])
        console.log('Campionato aggiornato: ',containChampionship)
    },[id])
    
    // async function 
    return (
        <>
            {champion && <div>
                    <h3>Nome campionato: {champion.name}</h3>
                    <h4>Caratteristiche:</h4>
                    <p>Partecipanti: <Link as={Link} to={`/boss/partecipanti-campionato/${id}`} className="textClickable">{champion.number_player}</Link></p>
                    {champion.admin && <p>Amministratore: {champion?.admin.name} {champion?.admin.surname}</p>}
                    {(role == 'admin'|| role == 'boss') && <span className="button">Gestisci regolamento</span>}
                    <p>Creato il: {champion.createdAt}</p>
                
                </div>
            }
        
        </>
    )
}

export default PageSingolChampionship;