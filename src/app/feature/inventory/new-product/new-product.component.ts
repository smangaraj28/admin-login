import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NewProduct} from '../models/new-product';
import {MatTableDataSource} from '@angular/material';

export class Person {
    name: string;
    age: number;
}

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
    private newProductForm: FormGroup;
    newProductData: NewProduct;

    displayedColumns = ['name', 'age', 'actionsColumn'];

    @Input() personList = [
        {name: 'Mark', age: 15},
        {name: 'Brad', age: 50},
    ];
    @Output() personListChange = new EventEmitter<Person[]>();
    private dataSource: MatTableDataSource<Person>;

    constructor() {
    }

    static initializeData(): NewProduct {
        return {
            newProductId: null,
            newProductName: null,
            newProductType: null,
            newProductSKU: null,
            newProductUnit: null,
            newProductLength: null,
            newProductWidth: null,
            newProductHeight: null,
            newProductWeight: null,
            newProductUPC: null,
            newProductMPN: null,
            newProductEAN: null,
            newProductISBN: null,
            newProductSalePrice: null,
            newProductPurchasePrice: null,
            newProductSaleAccount: null,
            newProductPurchaseAccount: null,
            newProductSaleDescription: null,
            newProductPurchaseDescription: null,
            newProductMultipleFlag: null
        };
    }

    ngOnInit() {
        this.newProductForm = new FormGroup({
            newProductIdFormControl: new FormControl(),
            newProductNameFormControl: new FormControl(),
            newProductSKUFormControl: new FormControl(),
            newProductUnitFormControl: new FormControl(),
            newProductLengthFormControl: new FormControl(),
            newProductWidthFormControl: new FormControl(),
            newProductHeightFormControl: new FormControl(),
            newProductWeightFormControl: new FormControl(),
            newProductUPCFormControl: new FormControl(),
            newProductMPNFormControl: new FormControl(),
            newProductEANFormControl: new FormControl(),
            newProductISBNFormControl: new FormControl(),
            newProductSalePriceFormControl: new FormControl(),
            newProductPurchasePriceFormControl: new FormControl(),
            newProductSaleAccountFormControl: new FormControl(),
            newProductPurchaseAccountFormControl: new FormControl(),
            newProductSaleDescriptionFormControl: new FormControl(),
            newProductPurchaseDescriptionFormControl: new FormControl()
        });
        this.newProductData = NewProductComponent.initializeData();
        this.dataSource = new MatTableDataSource(this.personList);
    }

    onSave() {

    }

    onCancel() {

    }

    onFileChanged($event: Event) {

    }

    createNew() {

    }

    confirmEditCreate() {

    }

    startEdit() {

    }

    cancelOrDelete() {

    }
}
