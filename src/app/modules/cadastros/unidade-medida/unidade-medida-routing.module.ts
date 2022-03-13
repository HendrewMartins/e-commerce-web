import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from '../../pesquisa/pesquisa.component';
import { PesquisaResolveService } from '../../pesquisa/services/pesquisa-resolve.service';
import { PESQUISA_UNIDADE_MEDIDA_CONFIG } from './core/pesquisa-unidade-medida-config';
import { UnidadeMedidaComponent } from './unidade-medida.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'pesquisa', pathMatch: 'full'
  },
  {
    path: 'pesquisa', component: PesquisaComponent,
    data: PESQUISA_UNIDADE_MEDIDA_CONFIG,
    resolve: {
      registros: PesquisaResolveService
    }
  },
  {
    path: 'novo', component: UnidadeMedidaComponent
  },
  {
    path: ':id', component: UnidadeMedidaComponent
  },
  {
    path: ':id/:delete', component: UnidadeMedidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadeMedidaRoutingModule { }
