import { ResultData } from '../../common/model/resultDataModel';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { UserListResponse } from '../../common/model/user/userListResponse';
import { UserSaveRequest } from '../../common/model/user/userSaveRequest';
import { UserSaveResponse } from '../../common/model/user/userSaveResponse';
import { UserAddRequest } from '../../common/model/user/userAddRequest';
import { UserAddDataRequest } from '../../common/model/user/userAddDataRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUserList(): Observable<ResultData<UserListResponse>> {
    return this.apiService.post("/User/List",
      {
        "IsRequiredReference": true,
        "Roles": [
          "Admin",
          'Regular',
          'Anonymous'
        ],
        "States": [
          "Active"
        ],
      }
    )
  }

  addUser(userAddRequest: UserAddDataRequest): Observable<ResultData<UserSaveResponse>> {
    return this.apiService.post("/User/Add", userAddRequest) ;
  }
}
