import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleManagementService } from '../services/role-management.service';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  dataSource: any[] = [];
  roles: string[] = [];

  constructor(private roleService: RoleManagementService) {}

  ngOnInit(): void {
    this.dataSource = this.roleService.getUsers();
    this.roles = this.roleService.getRoles();
  }

  onRoleChange(userId: number, role: string) {
    this.roleService.assignRole(userId, role);
    this.dataSource = this.roleService.getUsers(); // Refresh the dataSource to reflect changes
  }
}