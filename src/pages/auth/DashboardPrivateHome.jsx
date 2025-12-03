import { Outlet } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hookCustom/useAuth";
import { use, useContext, useEffect, useState } from "react";
import {  ContextData } from '../../store/context'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import useFetchWithLoading from "../../utils/fetchRequest";
import { ContextUrl } from "../../store/contextUrl";
import AddChampionshipPage from "./AddChampionshipPage";

function DashboardPrivateHome(){
    // const [showLoading, hideLoading] = useContext(ContextData)
    const [isSentCount, setIsSentCount] = useState(0)
    const {urlGetChampionship} = useContext(ContextUrl)
    const isAuthenticated = useAuth();
    const fetchData = useFetchWithLoading();
    const navigate = useNavigate();
    const [championship, setChampionship] =useState([])
    const [message, setMessage] =useState('')

    useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    } else if (isAuthenticated === true) {
      navigate("home-user");
    }
  }, [isAuthenticated, navigate]);

  

    if(isAuthenticated === null){
        return <p>Caricamento in corso</p>
    }

    

   
    

    return (
        <>
            <Outlet/>
        </>
    )
}

export default DashboardPrivateHome