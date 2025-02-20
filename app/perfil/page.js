'use client'

export default Perfil;
import { useEffect, useState } from "react";

function Perfil() {

    const [ usuario, alteraUsuario ] = useState({})

    useEffect(()=> {
        const dados = JSON.parse( localStorage.getItem("usuario"));
        alteraUsuario(dados);
    }, [])

    return ( 
        <main>

            <h1>Perfil do usuário</h1>

            <p>id: {usuario.id} </p>
            <p>Email: {usuario.email}</p>
        </main>
     );
}
