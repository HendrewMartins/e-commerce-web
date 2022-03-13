import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadeMedidaService } from 'src/app/services/unidade-medida/unidade-material.service';

@Component({
  selector: 'app-unidade-medida',
  templateUrl: './unidade-medida.component.html',
  styleUrls: ['./unidade-medida.component.css'],
  providers: [UnidadeMedidaService]
})
export class UnidadeMedidaComponent {

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public service: UnidadeMedidaService
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
      sigla: [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])],
    });
  }

  public get descricao() {
    return this.form.get('descricao');
  }

  public get sigla() {
    return this.form.get('sigla');
  }

  public salvar() {
    if (this.form.valid) {

    }
  }
}
