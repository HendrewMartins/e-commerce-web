import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/modules/cadastros/produto/models/produto';
import { ProdutoComponent } from 'src/app/components/produto/produto.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

    public listaProdutos: Produto[] = [];
    public url: string;

    // tslint:disable-next-line: no-inferrable-types
    @Input() public valorInput: string = '';
    @Input() public produtocomponet = new ProdutoComponent(this.http);


    constructor(
        public http: HttpClient,
    ) {
    }

    ngOnInit() {
        this.buscarProdutos('');
    }

    private buscarProdutos(valor: string) {
        // tslint:disable-next-line: deprecation
        this.produtocomponet.buscarTodos(valor).subscribe((registro: Produto[]) => {
            this.listaProdutos = registro;
        }, error => {
            console.error(error);
            alert('Deu Erro na hora de Carregar Totos os itens');
        });
    }

    public filtrarProdutos(event: any): void {
        if (event.keyCode === 13) {
            this.buscarProdutos(this.valorInput);
        }
        if (this.valorInput === '') {
            this.buscarProdutos(this.valorInput);
        }
    }

}
