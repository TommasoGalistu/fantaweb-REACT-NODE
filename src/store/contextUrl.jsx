import { createContext, useState } from "react";

export const ContextUrl = createContext(); 

export const ContextProviderUrl = ({ children }) => {
    //user
    const urlGetUsersJoinChampion = import.meta.env.VITE_MONGO_BASEAPI_USER + import.meta.env.VITE_GET_USERS_jOIN_CHAMPIONS
    const urlGetChampionship = import.meta.env.VITE_MONGO_BASEAPI_USER + import.meta.env.VITE_GET_CHAMPIONSHIP
    const urlCreateChampionship = import.meta.env.VITE_MONGO_BASEAPI_USER + import.meta.env.VITE_CREATE_CHAMPIONSHIP
    const urlgetUsers = import.meta.env.VITE_MONGO_BASEAPI_USER + import.meta.env.VITE_GET_USER
    const urlgetUser = import.meta.env.VITE_MONGO_BASEAPI_USER + import.meta.env.VITE_GET_USER_JOIN

    return (
        <ContextUrl.Provider value={{urlgetUser, urlGetUsersJoinChampion, urlgetUsers, urlGetChampionship, urlCreateChampionship }}>
            {children}
        </ContextUrl.Provider>
    );
};
