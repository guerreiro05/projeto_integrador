'use client';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { adicionarFavorito, removerFavorito, listarFavoritos } from '../services/favoritoService';
import Estrelas from "./Estrelas";
import axios from "axios";
import host from "../lib/host";

export default function Quadras(attr) {
    const [usuarioLogado, alteraUsuarioLogado] = useState(() => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem("usuario"));
        }
        return null;
    });

    const [ avaliacao, alteraAvaliacao ] = useState({ media: 0, total: 0 });

    const [favoritado, alteraFavoritado] = useState(false);
    const [idFavorito, alteraIdFavorito] = useState(null);

    useEffect(() => {
        axios.get(`${host}/avaliacoes/media/${attr.id}`)
            .then(res => alteraAvaliacao(res.data))
            .catch(err => console.log(err));
    }, []);

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
        <main className="w-64 p-2 rounded-lg border-solid border-gray-300 border">
            <div className="flex justify-between items-center">
                
                <Estrelas media={avaliacao.media} total={avaliacao.total} />

                <FontAwesomeIcon
                    icon={favoritado ? solidHeart : regularHeart}
                    onClick={handleToggleFavorito}
                    className={`transition-colors text-2xl cursor-pointer ${
                        favoritado ? 'text-red-600' : 'text-gray-300 hover:text-red-600'
                    }`}
                />
            </div>

            <div onClick={() => window.location.href = `/local/${attr.id}`} className="cursor-pointer">
                <img className="w-full h-48 object-cover" src={attr.imagem} />
                
                <div className="items-center">
                    <p className="text-lg h-[60px] font-semibold m-0">{attr.nomeLocal}</p>
                    <p className="font-bold text-gray-500 line-through m-0">R$ {attr.preco}</p>
                    <p className="font-bold text-green-600 text-3xl m-0">R$ {attr.preco * 0.9}</p>
                    <p className="text-sm h-[40px] text-gray-500 content-center mb-0">{attr.localizacao}</p>
                </div>
            </div>
        </main>
    );
}
