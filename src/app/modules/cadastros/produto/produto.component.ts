import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
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
    const reg = /^(http|https|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+@&%$#=~_-]+))*$/;

    this.form = this.fb.group({
      nome: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      marca: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      codigoBarra: [null],

      preco: [null],

      imagem: [null],
    });

    this.codigoBarra?.setValidators(CodigoBarrasValidator.validar());
    this.preco?.setValidators(PrecoValidator.validar());
    this.imagem?.setValidators(UrlValidator.validar());
  }

  public get nome() {
    return this.form.get('nome');
  }

  public get marca() {
    return this.form.get('marca');
  }

  public get codigoBarra() {
    return this.form.get('codigoBarra');
  }

  public get preco() {
    return this.form.get('preco');
  }

  public get imagem() {
    return this.form.get('imagem');
  }

  public salvar() {
    if (this.form.valid) {

    }
  }



}
