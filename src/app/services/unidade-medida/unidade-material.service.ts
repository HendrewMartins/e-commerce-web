import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadeMedida } from 'src/app/modules/cadastros/unidade-medida/models/unidade-medida';
import { Api } from '../api';

@Injectable()
export class UnidadeMedidaService extends Api<UnidadeMedida> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'unidade-medida');
  }
}