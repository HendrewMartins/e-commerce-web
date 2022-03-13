import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaisRoutingModule } from './materiais-routing.module';
import { MateriaisComponent } from './materiais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioModule } from '../../formulario/formulario.module';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [
    MateriaisComponent
  ],
  imports: [
    CommonModule,
    MateriaisRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormularioModule,
    PesquisaModule,
  ]
})
export class MateriaisModule { }
