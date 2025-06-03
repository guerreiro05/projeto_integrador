import axios from 'axios';
import host from '../lib/host';

export const buscarAvaliacao = async (idQuadra) => {
    const response = await axios.get(`${host}/avaliacoes/media/${idQuadra}`);
    return response.data;
};
