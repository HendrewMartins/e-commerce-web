import { PesquisaConfig } from 'src/app/modules/pesquisa/models/pesquisa-config';

export const PESQUISA_MATERIAIS_CONFIG: PesquisaConfig = {
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
            label: 'Valor',
            nome: 'valor'
        },
        {
            label: 'Quantidade',
            nome: 'quantidade'
        },
        {
            label: 'Unidade',
            nome: 'unidadeMedida'
        },
    ],
    pathApi: 'material'
};
