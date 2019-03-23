import { Component, OnInit } from '@angular/core';

import { RoleService } from '../../services/role.service';
import { NgForm } from '@angular/forms';
import { Role } from 'src/app/models/role';

//declaramos una constante par que tome un dato Material
declare var M : any;

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RoleService]
})
export class RolesComponent implements OnInit {

  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles();
  }

  addRole(form: NgForm){
    //validar cuando es un nuevo ingreso o queremos solo actualizar mediante el _id
    if (form.value._id) {
      this.roleService.putRole(form.value)
        .subscribe(res =>{
          this.resetForm(form);
          M.toast({ html: 'Updated Successfuly' });
          this.getRoles();
        });
    }else{
      this.roleService.postRole(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Save Successfuly' });
          this.getRoles();
        });
    }
  }

  getRoles(){
    this.roleService.getRoles()
      .subscribe(res => {
        this.roleService.roles = res as Role[];
        console.log(res);
      });
  }

  editRole(role: Role) {
    this.roleService.selectedRole = role;
  }

  deleteRole(_id: string){
        if (confirm('Are you sure you want to delete it')) {
          this.roleService.deleteRole(_id)
            .subscribe(res => {
            this.getRoles();
            M.toast({ html: 'Deleted Successfuly' });  
          });
        }
  }
  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.roleService.selectedRole = new Role();
    }
  }

}
