import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { Globals } from '../../Globals';

@Component({
  selector: 'app-staff-dialog',
  templateUrl: './staff-dialog.component.html',
  styleUrls: ['./staff-dialog.component.scss'],
})

export class StaffDialogComponent implements OnInit {
  global: any;
  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    group: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<StaffDialogComponent>, public globals: Globals) {
    this.global = globals;
  }
  ngOnInit() {
  }

  createStaff() {
    this.global.staffNumber = this.global.staffNumber + 1;
    this.dialogRef.close();
  }
}
