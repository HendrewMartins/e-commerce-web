import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { CodigoBarrasValidator } from 'src/app/validators/codigo-barra-validator';
import { PrecoValidator } from 'src/app/validators/preco-validator';
import { UrlValidator } from 'src/app/validators/url-validator';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ProdutoService]
})

export class ProdutoComponent {

  public form!: FormGroup;


  constructor(
    private fb: FormBuilder,
    public service: ProdutoService
  ) {
    this.criarForm();
  }

  public criarForm(): void {
    // tslint:disable-next-line: max-line-length

    this.form = this.fb.group({
      nome: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],

      precoVenda: [null],

      custoProduto: [0],

      imagem: [null],

    });

    this.precoVenda?.setValidators(PrecoValidator.validar());
    this.custoProduto?.setValidators(PrecoValidator.validar());
    this.imagem?.setValidators(UrlValidator.validar());
  }

  public get nome() {
    return this.form.get('nome');
  }


  public get precoVenda() {
    return this.form.get('precoVenda');
  }

  public get custoProduto() {
    return this.form.get('custoProduto');
  }

  public get imagem() {
    return this.form.get('imagem');
  }

  public salvar() {
    if (this.form.valid) {

    }
  }



}
