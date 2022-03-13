import { Materiais } from "../../materiais/models/materiais";
import { ProdutoSabores } from "./produto-sabores";

export interface Produto {
    id?: number;
    nome?: string;
    precoVenda?: number;
    custoProduto?: number;
    imagem?: string;
    //sabor?: ProdutoSabores[];
    //material?: Materiais[];
}
