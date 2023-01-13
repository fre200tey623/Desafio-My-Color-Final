import React, { useState } from "react";
import axios from "axios";


export default function Form(){

    const url = "https://my-colors.onrender.com/api/colors";

    const [nome,setNome] = useState("")
    const [hexa,setHexadecimal] = useState("")

        function adicionarNovaCor(){ //pelo menos funciona
        
            return(
                axios.post(url,{
                    name: nome,
                    hex: hexa
                })
            .then(response =>{
                console.log(response)
            })
            .catch(error => console.error(error))
            )
    
        }

    return(
        <div className="">
            <h3 className="text-lg pb-3">Nome personalizado:</h3>
            <input className="border-2 border-zinc-400 rounded-md w-full h-14 mb-6" type="text" placeholder="   ex.: Cor Primaria" name="" id="" onChange={(e)=>setNome(e.target.value)}></input> 
            <h3 className="text-lg pb-3">Hexadecimal:</h3>
            <input className="border-2 border-zinc-400 rounded-md w-full h-14 mb-6" type="text" placeholder="   ex.: #FFFFFF" name="" id="" onChange={(e)=>setHexadecimal(e.target.value)}></input>
            <button className="border w-full rounded-md h-14 bg-zinc-800 hover:bg-zinc-900 text-white drop-shadow-md mb-4" onClick={adicionarNovaCor}>Confirmar</button>
        </div>
    );
}