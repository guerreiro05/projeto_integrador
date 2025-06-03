'use client';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { adicionarFavorito, removerFavorito, listarFavoritos } from '../services/favoritoService';
import Estrelas from "./Estrelas";
import { buscarAvaliacao } from "../services/AvaliacaoService";

export default function Quadras(attr) {
    const [usuarioLogado, alteraUsuarioLogado] = useState(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem("usuario"));
        }
        return null;
    });

    const [ avaliacao, alteraAvaliacao ] = useState({ media: 0, total: 0 });

    const [ favoritado, alteraFavoritado ] = useState(false);
    const [ idFavorito, alteraIdFavorito ] = useState(null);

    useEffect(() => {
        buscarAvaliacao(attr.id)
            .then(res => alteraAvaliacao(res))
            .catch(err => console.log(err));
    }, [attr.id]);


    useEffect(() => {
        const fetchFavoritos = async () => {
            if (!usuarioLogado) return;

            const favoritos = await listarFavoritos();
            const favorito = favoritos.find(
                (item) => item.idUsuario === usuarioLogado.id && item.idQuadra === attr.id
            );

            if (favorito) {
                alteraFavoritado(true);
                alteraIdFavorito(favorito.id);
            } else {
                alteraFavoritado(false);
                alteraIdFavorito(null);
            }
        };

        fetchFavoritos();
    }, [usuarioLogado, attr.id]);

    const handleToggleFavorito = async () => {
        if (!usuarioLogado) {
            alert("Você precisa estar logado para favoritar.");
            return;
        }

        try {
            if (favoritado) {
                await removerFavorito(idFavorito);
                alteraFavoritado(false);
                alteraIdFavorito(null);
            } else {
                const response = await adicionarFavorito(usuarioLogado.id, attr.id);
                alteraFavoritado(true);
                alteraIdFavorito(response.data.id);
            }
        } catch (error) {
            alert("Erro ao atualizar favorito.");
            console.error(error);
        }
    };

    return (
        <main className="w-64 p-2 border-solid border-gray-300 border">
            <div className="flex justify-between mb-2 items-center">
                
                <Estrelas media={avaliacao.media} total={avaliacao.total} />

                <FontAwesomeIcon
                    icon={favoritado ? solidHeart : regularHeart}
                    onClick={handleToggleFavorito}
                    className={`transition-colors text-2xl cursor-pointer ${
                        favoritado ? 'text-red-600' : 'text-gray-300 hover:text-red-600'
                    }`}
                />
            </div>

            <div>
                <p className="my-2 text-textMain">Quadra de {attr.tipoQuadra}</p>
                
                <img className="w-full h-48 object-cover" src={attr.imagem} />
                                
                <h3 className="text-textMain font-bold">{attr.nomeLocal}</h3>

                
                <p className="font-bold text-primary text-3xl my-2">
                    R$ {(attr.preco * 0.9).toFixed(2).replace('.', ',')}
                    
                    <span className="text-textSecondary line-through text-base ml-2">
                        R$ {attr.preco.toFixed(2).replace('.', ',')}
                    </span>
                </p>
                
                <p className="text-base text-gray-500 mt-2">📍 {attr.localizacao}</p>

                <button 
                    onClick={() => window.location.href = `/local/${attr.id}`} 
                    className="bg-primary hover:bg-primaryDark border-divider text-white p-1 cursor-pointer w-full">
                    Ver mais
                </button>
                
            </div>
        </main>
    );
}
