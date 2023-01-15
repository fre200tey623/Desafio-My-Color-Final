import Botao from "./componentes/Botao";
import Form from "./componentes/Form";
import Card from "./componentes/Card";
import React,{useState, useEffect} from "react";
import axios from "axios";
import Footer from "./componentes/Footer";
import PopUpCard from "./componentes/PopUpCard";
import { MyColorContext } from "./MyColorContext";


export default function App(){
    

    const url = "https://my-colors.onrender.com/api/colors";

    const [respostaData, setRespostaData] = useState([])

    const [isOpen, setIsOpen] = useState(false)
    const [id,setId] = useState(null)
   
    


    useEffect(()=>{
        axios.get(url) // Implementação do metodo GET axios
        .then(response => {
            setRespostaData(response.data)
        })
        .catch(error => console.error(error))
        
    },[respostaData])


    function criarCard(data,index) {
        return <Card key = {data.name} index={index} id={data._id} nome = {data.name} codigoHexa ={data.hex} eFavorito={data.isFavorite}/>
    }

    // console.log(id)

    return(
        
       <div>

        <MyColorContext.Provider value={setId}>
            <div className="relative">
            <h1 className="pt-4 text-4xl text-center text-gray-800 font-bold">Desafio minhas cores preferidas</h1>
            
            <h2 className="pl-12 text-xl text-gray-900 font-semibold mb-2">Cores Favoritas:</h2>
            <div className="grid mr-9 ml-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5" >
            {respostaData.filter(data => data.isFavorite === true).map((data)=>criarCard(data, respostaData.indexOf(data)))}
            {/* { respostaData.forEach(data => {
                if(data.isFavorite===true){
                    return criarCard(data,respostaData.indexOf(data))
                }
            })} */}
            </div>
            <div className="sm:flex xs:block items-center justify-center pt-5 ">
            <div className="justify-center flex">
            <h2 className="xs:mr-0 sm:mr-5 text-lg font-semibold text-gray-900 pb-1">Clique no botao para cadastrar uma nova cor</h2>
            </div>
            <div className="flex justify-center">
            <Botao onClick={() => setIsOpen(true)} />
            </div>
            </div>
            <h2 className="pl-12 text-xl text-gray-900 font-semibold mb-2">Cores Cadastradas:</h2>
            
            <div className="grid mr-9 ml-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 pb-32 lg:pb-44 ">
            {respostaData.filter(data => data.isFavorite === false).map((data)=>criarCard(data, respostaData.indexOf(data)))}
            {/* { respostaData.forEach(data => {
                if(data.isFavorite===false){
                    return criarCard(data,respostaData.indexOf(data))
                }
            })} */}
            </div>

            {id!==null && <div className="absolute flex bg-slate-300/75 w-screen h-screen top-0 justify-center items-center">
                <div className=" bg-white border  rounded-md drop-shadow-md">
                <h2 className="pt-8 pb-8 text-center text-2xl font-bold">ALTERAR UMA COR JA EXISTENTE</h2>
                <div className="ml-20 mr-20">
               <PopUpCard idAtual={respostaData[id]} />
               <button className="border w-full rounded-md border-zinc-800 hover:border-red-600 h-14 mb-16 text-zinc-800 hover:text-red-600" onClick={() => setId(null)}>Cancelar</button>
                </div>
               </div>
            </div>}
            </div>
        </MyColorContext.Provider>
        
            
            {isOpen && <div className="absolute flex bg-slate-300/75 w-screen h-screen top-0 justify-center items-center">
               
               <div className=" bg-white border  rounded-md drop-shadow-md">
                <h2 className="pt-8 pb-8 text-center text-2xl font-bold">ADICIONAR UMA NOVA COR</h2>
               <div className="ml-20 mr-20">
               <Form />
               <button className="border w-full rounded-md border-zinc-800 hover:border-red-600 h-14 mb-16 text-zinc-800 hover:text-red-600" onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
               </div>
            
            </div>}

        <div className="relative">
            <Footer />
        </div>
       
       </div>);
}
