import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materiais } from 'src/app/modules/cadastros/materiais/models/materiais';
import { Api } from '../api';

@Injectable()
export class MateriaisService extends Api<Materiais> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'material');
  }
}