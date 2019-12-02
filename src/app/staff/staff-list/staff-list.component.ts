import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  @Input() staff: any;
  @Input() isBeautifull: boolean;

  constructor() { }

  ngOnInit() {
  }

  // Take initials from Staff.json
  getInitials() {
    return   this.staff.firstName.charAt(0) + this.staff.lastName.charAt(0);
  }

}
