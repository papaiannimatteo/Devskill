import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  

  {
    path: 'ok-no',
    loadChildren: () => import('./pages/ok-no/ok-no.module').then( m => m.OkNoPageModule)
  },
  {
    path: 'elementi-consecutivi',
    loadChildren: () => import('./pages/elementi-consecutivi/elementi-consecutivi.module').then( m => m.ElementiConsecutiviPageModule)
  },
  {
    path: 'n-inv',
    loadChildren: () => import('./pages/n-inv/n-inv.module').then( m => m.NInvPageModule)
  },
  {
    path: 'minori-di-x',
    loadChildren: () => import('./pages/minori-di-x/minori-di-x.module').then( m => m.MinoriDiXPageModule)
  },
  {
    path: 'divisibile-per3',
    loadChildren: () => import('./pages/divisibile-per3/divisibile-per3.module').then( m => m.DivisibilePer3PageModule)
  },
  {
    path: 'crescente-decrescente',
    loadChildren: () => import('./pages/crescente-decrescente/crescente-decrescente.module').then( m => m.CrescenteDecrescentePageModule)
  },  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
