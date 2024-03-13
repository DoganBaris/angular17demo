import { GroupResponse } from '../../common/model/group/groupResponse';
import { ResultData } from '../../common/model/resultDataModel';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private apiService: ApiService) { }

  getGroupList(): Observable<ResultData<GroupResponse>> {
    return this.apiService.post("/Group/List", { PartyRoleUId: null });
  }
}
