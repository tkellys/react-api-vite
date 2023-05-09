import React, { useEffect, useState } from 'react'
import { LabelInput } from './LabelInput';
import axios from 'axios';


export const CepForm = () => {

  // usando o axios para fazer API - ao inves do fetch
  const getDataCep = () =>{
    axios.get('https://viacep.com.br/ws/01001000/json/')
    .then((response)=>{
      console.log(response.data.cep)

      //chama o use state aqui
      setData(response.data.logradouro)
    });
  };
  // como mostras as infor na tela HTML atraves do useState
  const [data, setData] = useState({})
  useEffect(() =>{
    getDataCep()
  }, [])

  return (
    <form>
   <LabelInput
    name = 'CEP'
    width ={2}
   />
    
  <LabelInput
    name = 'Logradouro'
    width ={6}
  />

  {/* Chama o useState aqui em string */}
{JSON.stringify(data)}
    </form>
  );
};
