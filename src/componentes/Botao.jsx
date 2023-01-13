import React from "react";


export default function Botao({onClick}){
    return(
        <div>
            <button onClick={onClick} className=" flex bg-zinc-800 hover:bg-zinc-900 rounded-lg drop-shadow text-white justify-center items-center w-40 h-8 " >
                <h3 className="pr-1">Adicionar</h3> 
                <div className="fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </div>
                
                </button>
                 
        </div>
        
    );
}