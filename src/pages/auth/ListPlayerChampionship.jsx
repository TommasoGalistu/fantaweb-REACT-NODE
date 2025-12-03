import { useContext, useEffect } from "react";
import useFetchWithLoading from "../../utils/fetchRequest";
import { ContextUrl } from "../../store/contextUrl";
import { Link, useParams } from "react-router-dom";
import { ContextData } from "../../store/context";

function ListPlayerChampionship(){
    const { id } = useParams();
    const {urlGetUsersJoinChampion} = useContext(ContextUrl)
    const {userJoinChampion, setUserJoinChampion} = useContext(ContextData)
    const fetchData =  useFetchWithLoading();

    useEffect(() =>{
        getUserJoinChampionship()
    },[])

    async function getUserJoinChampionship(){
        try{
            const res = await fetchData(urlGetUsersJoinChampion+id, {
                method: "GET"
            })

            
            setUserJoinChampion(old => res.usersJoin)



        }catch(e){
            console.log(e.message)
        }
    }
    return (
        <>
            <h3>Elenco partecipanti</h3>
            <ul>
                {userJoinChampion && userJoinChampion.map(user =>{
                    return (<li key={user.id}><Link as={Link} to={`/boss/giocatore/${id}/${user.id}`}>{user.name} {user.surname}</Link></li>)
                })}
            </ul>
        </>
    )
}

export default ListPlayerChampionship;