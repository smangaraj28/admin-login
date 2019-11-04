import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
    selector: 'app-line-item-modal',
    templateUrl: './line-item-modal.component.html',
    styleUrls: ['./line-item-modal.component.scss']
})
export class LineItemModalComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<LineItemModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
