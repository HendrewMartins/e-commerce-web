import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MateriaisService } from 'src/app/services/materiais/material.service';
import { PrecoValidator } from 'src/app/validators/preco-validator';
import { environment } from 'src/environments/environment';
import { UnidadeMedida } from '../unidade-medida/models/unidade-medida';

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['./materiais.component.css'],
  providers: [MateriaisService]
})
export class MateriaisComponent {

  public form!: FormGroup;

  public listUnidadeMedida!: Observable<UnidadeMedida[]>;

  constructor(
    private fb: FormBuilder,
    public service: MateriaisService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.criarForm();
  }

  public criarForm(): void {
    this.form = this.fb.group({
      descricao: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])],
      valor: [null],
      quantidade: [null, Validators.compose([
        Validators.min(1),
        Validators.required
      ])],
      unidadeMedida: [Validators.required]
    });

    this.valor?.setValidators(PrecoValidator.validar());
  }

  public get descricao() {
    return this.form.get('descricao');
  }

  public get valor() {
    return this.form.get('valor');
  }

  public get quantidade() {
    return this.form.get('quantidade');
  }

  public get unidadeMedida() {
    return this.form.get('unidadeMedida');
  }

  public salvar() {
    if (this.form.valid) {

    }
  }

  public displayFn(unidadeMedida: UnidadeMedida): string {
    return unidadeMedida && unidadeMedida.descricao ? unidadeMedida.id + ' - ' + unidadeMedida.descricao + ' - ' + unidadeMedida.sigla : '';
  }

  public buscarUnidade(value: any) {
    let filtro = this.form.controls['unidadeMedida'].value;
    if(filtro.length > 2){
      this.listUnidadeMedida = this.buscarUnidadeMedidas(filtro);  
    }
    
  }

  public buscarUnidadeMedidas(value: any): Observable<UnidadeMedida[]> {
    return this.http.get<UnidadeMedida[]>(environment.api+'/api/unidade-medida/descricao/' + value).pipe(map((item: UnidadeMedida[]) => {
      return item;
    }));

  }

}
