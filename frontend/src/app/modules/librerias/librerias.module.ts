import { NgModule } from '@angular/core';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [
    NgMaterialMultilevelMenuModule,
    MatSidenavModule
  ],
  exports: [
    NgMaterialMultilevelMenuModule,
    MatSidenavModule
  ]
})

export class LibreriasModule { }
