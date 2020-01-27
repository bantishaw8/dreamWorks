import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { InformationCardsComponent } from './information-cards/information-cards.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    InformationCardsComponent,
    TrendingProductsComponent
  ]
})
export class HomePageModule {}
