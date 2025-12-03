import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../store/context";
import { useParams } from "react-router-dom";
import { ContextUrl } from "../../store/contextUrl";
import useFetchWithLoading from "../../utils/fetchRequest";

function PlayerView(){
    const { id, idUser} = useParams();
    const {userJoinChampion, setUserJoinChampion} = useContext(ContextData);
    const {urlgetUser} = useContext(ContextUrl)
    const fetchData = useFetchWithLoading()
    const [userProfile, setUserProfile] = useState({})

    useEffect(() =>{
        getUser()
    },[id, idUser])

    async function getUser(){
        try{
            const res = await fetchData(`${urlgetUser}/${id}/${idUser}`,{
                method: "GET"
            })
            setUserProfile(old => res.user)
            console.log(res.user);
            
        }catch(e){
            // console.log(e)
        }
    }

    return (
        <>
            {userProfile && <div>
                pagina player
                <p><strong>{userProfile. name}</strong></p>
                <p><strong>{userProfile.surname}</strong></p>
            </div>}
        
        </>
    )
}

export default PlayerView;