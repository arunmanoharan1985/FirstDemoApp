// Import statements
import {Component} from "@angular/core"
import {Customer} from '../Model/Customer'
import {appService } from '../Service/TestService'; 


// Attribute metadata
@Component({
    selector: "customer-ui",
    templateUrl: "../UI/Customer.html",
    providers: [appService] 
})
// Customer component class exposing the customer model
export class CustomerComponent {
    value: string = ""; 
    constructor(private _appService: appService) { }       
    ngOnInit(): void { 
        this.value = this._appService.getApp();        
    }    

    CurrentCustomer:Customer = new Customer("Yoha", "008", 1);   
}