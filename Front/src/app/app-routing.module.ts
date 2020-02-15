import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: 'BI_Q',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
  },
  {
    path:"",
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
  },
  // {
  //   path: '**',
  //   // loadChildren: () => import('./shared/components/not-found/not-found.module').then(m => m.NotFoundModule),

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
