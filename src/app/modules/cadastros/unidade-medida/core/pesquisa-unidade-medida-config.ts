import { PesquisaConfig } from 'src/app/modules/pesquisa/models/pesquisa-config';

export const PESQUISA_UNIDADE_MEDIDA_CONFIG: PesquisaConfig = {
    colunas: [
        {
            label: 'Código',
            nome: 'id'
        },
        {
            label: 'Descrição',
            nome: 'descricao'
        },
        {
            label: 'Sigla',
            nome: 'sigla'
        },
    ],
    pathApi: 'unidade-medida'
};