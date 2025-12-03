import { useContext, useEffect, useState } from "react";
import { validatorModal } from "../utils/validatorSchema";
import ErrorCustom from "./ErrorCustom";
import { ContextUrl } from "../store/contextUrl";
import useFetchWithLoading from "../utils/fetchRequest";
import { ContextData } from "../store/context";

function ModalPersonal({setIsModalOpen, createChampionship}){
    const [error, setError] = useState({})
    
    const {urlgetUsers} = useContext(ContextUrl)
    const {users, setUsers} = useContext(ContextData)
    const fetchData = useFetchWithLoading()
    useEffect(() =>{
        getUsers()
    }, [])

    async function getUsers(){
        try{
            const res = await fetchData(urlgetUsers, {
                method: "GET"
            })
            console.log(res)
            setUsers(res.users)

        }catch(e){

        }
    }
    function checkData(event){
        event.preventDefault()
        setError({})
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries())
        data.userId = formData.getAll("userId");
        const error = validatorModal.validate(data)
        console.log(data)
        if(error){
            setError(error)
            return;
        }

        createChampionship(data)
    }

    
    
    return (
        <>
            <div className="modalForm">
                <div className="contentForm">
                    <span className="button" onClick={() => setIsModalOpen(false)}>X</span>
                    <form onSubmit={(e) => checkData(e)}>
                        <label htmlFor="name">Nome campionato</label>
                        <input type="text" name="name" placeholder="Scrivi il nome del campionato.."/>
                        {error.name && <ErrorCustom>{error.name}</ErrorCustom>}
                        <label htmlFor="number_player">Quanti giocatori?</label>
                        <input type="number" name="number_player" placeholder="Scrivi il nome del campionato.."/>
                        {error.number_player && <ErrorCustom>{error.number_player}</ErrorCustom>}
                        {users && users.map(user => (
                            <label key={user.id} >
                                <input type="checkbox" name="userId" value={user.id} />
                                {user.name} {user.surname}
                            </label>
                            ))
                            }

                        
                        <button className="button" type="submit">Invia</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalPersonal