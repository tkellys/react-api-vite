import { useEffect, useState } from 'react'

import './App.css'

function  useEffectTeste() {
// criando um hook useState(valor inicial) =>
const [nome, setNome] = useState('joazim')

// crindo um hook useEffect 
useEffect(() => {
  console.log('Meu useEffect rodou!')
}, [nome])

//aqui em return é o que vai mostrar nosso html
return (
    <>
    {nome}
    <button onClick={e => setNome('Kelly')}>Atualizar</button>
    </>
  )
}

export default useEffectTeste
