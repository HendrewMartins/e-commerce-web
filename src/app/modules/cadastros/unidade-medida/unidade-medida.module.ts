import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadeMedidaRoutingModule } from './unidade-medida-routing.module';
import { UnidadeMedidaComponent } from './unidade-medida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioModule } from '../../formulario/formulario.module';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';


@NgModule({
  declarations: [
    UnidadeMedidaComponent
  ],
  imports: [
    CommonModule,
    UnidadeMedidaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormularioModule,
    PesquisaModule,
  ]
})
export class UnidadeMedidaModule { }
