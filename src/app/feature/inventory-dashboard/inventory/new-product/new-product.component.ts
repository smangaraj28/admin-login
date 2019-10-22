import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NewProduct} from '../models/new-product';

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
    private newProductForm: FormGroup;
    newProductData: NewProduct;

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
            newProductPurchaseDescription: null
        };
    }

    ngOnInit() {
        this.newProductForm = new FormGroup({
            newProductIdFormControl: new FormControl(),
            newProductNameFormControl: new FormControl(),
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
    }

    onSave() {

    }

    onCancel() {

    }

    onFileChanged($event: Event) {

    }
}
