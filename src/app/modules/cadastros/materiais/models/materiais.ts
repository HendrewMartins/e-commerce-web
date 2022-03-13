import { UnidadeMedida } from '../../unidade-medida/models/unidade-medida';

export interface Materiais{   
    id?:number; 
    descricao?: string;
    valor?:number;
    quantidade?:number;
    unidadeMedida?: UnidadeMedida;
}