import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AdminGuard } from './services/admin.guard';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminGuard],
    children: [

      { path: 'produto', loadChildren: () => import('./modules/cadastros/produto/produto.module').then(m => m.ProdutoModule) },
      { path: 'unidade-medida', loadChildren: () => import('./modules/cadastros/unidade-medida/unidade-medida.module').then(m => m.UnidadeMedidaModule) },
      { path: 'material', loadChildren: () => import('./modules/cadastros/materiais/materiais.module').then(m => m.MateriaisModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
