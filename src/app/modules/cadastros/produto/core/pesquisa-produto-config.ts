import { PesquisaConfig } from 'src/app/modules/pesquisa/models/pesquisa-config';

export const PESQUISA_PRODUTO_CONFIG: PesquisaConfig = {
    colunas: [
        {
            label: 'Código',
            nome: 'id'
        },
        {
            label: 'Nome',
            nome: 'nome'
        },
        {
            label: 'Preço de Venda',
            nome: 'precoVenda'
        },
    ],
    pathApi: 'produto'
};
