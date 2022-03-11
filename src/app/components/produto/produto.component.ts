import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto } from 'src/app/modules/cadastros/produto/models/produto';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-produto',
    templateUrl: 'produto.component.html'
})

export class ProdutoComponent implements OnInit {

    @Input() public produto: Produto;
    public url: string;

    constructor(
        public http: HttpClient,
    ) {
        this.url = environment.api + '/api/produto/pesquisar?value=';
    }

    ngOnInit() { }

    public buscarTodos(valor: string): Observable<Produto[]> {
        return this.http.get<Produto[]>(this.url + valor).pipe(map((item: Produto[]) => {
            return item;
        }));
    }

}
