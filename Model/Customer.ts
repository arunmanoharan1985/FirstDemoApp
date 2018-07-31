export class Customer {
  
    
    constructor(CustomerName: string,CustomerCode :string ,CustomerAmount :number) {
        this._CustomerName = CustomerName;
        this._CustomerCode = CustomerCode;
        this._CustomerAmount = CustomerAmount;
    }

    private _CustomerName: string;
    private _CustomerCode: string;
    private _CustomerAmount: number;

    get CustomerName(): string {
        return this._CustomerName;
    }

    set CustomerName(value: string) {
        
            this._CustomerName = value;
        
    }
    get CustomerCode(): string {
        return this._CustomerCode;
    }

    set CustomerCode(value: string) {
        
            this._CustomerCode = value;
        
    }
    get CustomerAmount(): number {
        return this._CustomerAmount;
    }

    
    set CustomerAmount(value: number) {
        
            this._CustomerAmount = value;
        
    }
}