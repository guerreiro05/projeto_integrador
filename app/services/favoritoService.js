import axios from 'axios';
import host from '../lib/host';

export const adicionarFavorito = async (id_usuario, id_quadra) => {
    return await axios.post(`${host}/favoritos`, {
        id_usuario,
        id_quadra,
        favoritado_em: new Date().toISOString()
    });
};

export const removerFavorito = async (id) => {
    return await axios.delete(`${host}/favoritos/${id}`);
};

export const listarFavoritos = async () => {
    const response = await axios.get(`${host}/favoritos`);
    return response.data;
};
