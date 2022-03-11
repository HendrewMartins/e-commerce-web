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
 // { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminGuard],
    children: [

      { path: 'empresa', loadChildren: () => import('./modules/cadastros/empresa/empresa.module').then(m => m.EmpresaModule) },
      { path: 'produto', loadChildren: () => import('./modules/cadastros/produto/produto.module').then(m => m.ProdutoModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
