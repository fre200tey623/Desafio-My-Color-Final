import axios from "axios";
import React, { useState, useContext} from "react";
import { MyColorContext } from "../MyColorContext";

export default function Card({ id, nome, codigoHexa, eFavorito, index}) {

    const url = "https://my-colors.onrender.com/api/";

    const [favorito, setFavorito] = useState(eFavorito)
    const [icon, setIcon] = useState(eFavorito ? "#FF0000" : "#FFFFFF")
    const setId = useContext(MyColorContext);

    function deletarCor(id) {
        return (() => {
            axios.delete(`${url}color/${id}`)
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.error(error))
        })
    }

    function alterarFavorito(id) {
        return (() => {
            axios.patch(`${url}color/${id}`, { isFavorite: !favorito })
                .then(response => {
                    console.log(response)
                    if (response.data.isFavorite === false) {
                        setFavorito(true);
                        setIcon("#FF0000")
                    }
                    else {
                        setFavorito(false);
                        setIcon("#FFFFFF")
                    }
                })
                .catch(error => console.error(error))
        })
    }


    
    return (
        <div  style={{backgroundColor: codigoHexa}} className="rounded-lg drop-shadow-md" >
            
            <div>
                <button onClick={()=>{setId({index})}}>
                
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    
                </svg>
                </button>
                
            </div>
            <div className="sm:w-48 w-56 h-28 flex">
                
            <button onClick={alterarFavorito(id)} className="absolute top-0 right-0 p-1 mt-2 mr-2 bg-slate-50 rounded-full" >
                    {eFavorito}
                    <svg xmlns="http://www.w3.org/2000/svg" fill={icon} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>


                </button>
            </div >
            <div className="flex justify-between bg-slate-50 rounded-b-lg" >
                <div className="pl-2">
                    <h2 className="font-semibold">{nome}</h2>
                    <h3 className="font-semibold">{codigoHexa}</h3>
                    
                </div>

                

                <button className="pr-2" onClick={deletarCor(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </button>

            </div>
        </div>
    );
}

