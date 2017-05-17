import { Component, Input } from '@angular/core';
import { FoodListComponent } from '../menu-page/food-list-section/food-list.component';

@Component({
    selector: 'pay-page',
    templateUrl: 'app/payment-page/pay.component.html',
    styleUrls: ['app/payment-page/pay.component.css'],

})
    
export class OrderListComponent {
  @Input() namefoodArray;

}