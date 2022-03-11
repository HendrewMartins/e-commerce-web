import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../modules/cadastros/produto/models/produto';
import { Api } from './api';

@Injectable()
export class ProdutoService extends Api<Produto> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'produto');
  }
}
