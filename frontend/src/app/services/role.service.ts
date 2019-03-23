import { Injectable } from '@angular/core';
//IMportaciones para comunicarse con el servidor, modelo y componente
import { HttpClient} from '@angular/common/http'
import { Role } from '../models/role';
import { RolesComponent } from '../components/roles/roles.component';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  selectedRole: Role;
  roles: Role[];

  readonly URL_API = 'http://localhost:3000/api/accounting';

  constructor(private http: HttpClient) { 
    this.selectedRole = new Role();
  }

  //Obtener roles
  getRoles(){
    return this.http.get(this.URL_API);
  }

  postRole(Role:Role){
    return this.http.post(this.URL_API, Role);
  }

  putRole(role: Role){
    return this.http.put(this.URL_API + `/${role._id}`, role);
  }

  deleteRole(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
//definir metodos para acceder al servidor, agregar datos al servidor CRUD