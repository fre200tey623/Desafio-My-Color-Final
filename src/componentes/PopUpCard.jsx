import axios from "axios";
import React,{useState} from "react";


export default function PopUpCard({dataAtual}){

    const url = "https://my-colors.onrender.com/api/"; 
    const [nomeCor,setNomeCor] = useState("")
    const [hexadecimal, setHexadecimal] = useState("")
    
    
    

    function alterarValoresCard(idAtual) {
        return (() => {
            axios.patch(`${url}color/${idAtual}`,{name:nomeCor, hex:hexadecimal})
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.error(error))
        })
    }

    
    return(
        
        <div>
        <h3 className="text-lg pb-3">Digite o novo nome:</h3>
        
        <input  className="border-2 border-zinc-400 rounded-md w-full h-14 mb-6" type="text" name="" id="" onChange={(e)=>setNomeCor(e.target.value)}/>

        <h3 className="text-lg pb-3">Digite o no hexadecimal:</h3>
        <input className="border-2 border-zinc-400 rounded-md w-full h-14 mb-6" type="text" name="" id="" onChange={(e)=>setHexadecimal(e.target.value)}/>
        <button className="border w-full rounded-md h-14 bg-zinc-800 hover:bg-zinc-900 text-white drop-shadow-md mb-4" onClick={alterarValoresCard(dataAtual)}>Confirmar</button>
        </div>
    );
}