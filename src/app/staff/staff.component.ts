import { Component, OnInit, Input } from '@angular/core';
import { StaffService } from '../staff.service';
import { MatDialog } from '@angular/material/dialog';
import { StaffDialogComponent } from './staff-dialog/staff-dialog.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staffs: any = [];
  isBeautifull = true;
  constructor(public dialog: MatDialog, private staffService: StaffService) { }


  ngOnInit() {
    this.getStaffMembers().then((result) => {
      this.staffs = result;
    });
  }

  showDialog() {
    const dialogRef = this.dialog.open(StaffDialogComponent, {
      width: '500px'
    });
  }

  switchDisplay() {
    this.isBeautifull = !this.isBeautifull;
  }

  // Call Get(staff.json) when click on staff
  getStaffMembers() {
    return new Promise((res, rej) => {
      this.staffService.getStaffMembers().subscribe(result => {
        res(result);
      });
    });
  }
}
