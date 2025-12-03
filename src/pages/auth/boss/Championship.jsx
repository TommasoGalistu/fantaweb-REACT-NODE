import { useContext, useEffect, useState } from "react"
import useFetchWithLoading from "../../../utils/fetchRequest"
import { ContextUrl } from "../../../store/contextUrl";
import ModalPersonal  from "../../../components/ModalPersonal.jsx";
import { Link } from "react-router-dom";
import { ContextData } from "../../../store/context.jsx";

function Championship(){
    const fetchData = useFetchWithLoading();
    const {urlGetChampionship, urlCreateChampionship} = useContext(ContextUrl)
    const {championship, setChampionship} = useContext(ContextData)
    const [message, setMessage] =useState('')
    const [isModalOpen, setIsModalOpen] =useState(false)
    useEffect(() =>{
        getChampionship()
    },[])
    console.log(isModalOpen)

    async function getChampionship(){

        const res = await fetchData(urlGetChampionship,{
            method: "GET"
        })
        setChampionship(res.championships)
        setMessage(res.message)
    }
    

    async function createChampionship(dataObj){
        try{
            const res = await fetchData(urlCreateChampionship,{
                method: "POST",
                body: JSON.stringify(dataObj)
            })
            if(res.error){

            }

            setIsModalOpen(false)
            
        }catch(e){
            console.log(e.message)
        }
    }
    return (
        <>
            <div className="">
                <h3>Tutti i tuoi campionati </h3>
                <span className="button" onClick={() => setIsModalOpen(true)}>Aggiungi un campionato</span>
            </div>
            {championship && championship.map(champion => {
                return (<Link key={champion.id} as={Link} to={`/boss/campionato/${champion.id}`} className="box">Campionato: {champion.name}</Link>)
            })}
           {isModalOpen &&  <ModalPersonal setIsModalOpen={setIsModalOpen} createChampionship={createChampionship}/>}
        </>
    )
}

export default Championship