import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsUiComponent } from './items-ui/items-ui.component';
import { ItemsContainerComponent } from './items-container/items-container.component';


@NgModule({
  declarations: [
    ItemsUiComponent,
    ItemsContainerComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule
  ]
})
export class ItemsModule { }
