
import { OrganizationSaveResponse } from '../../common/model/organization/organizationSaveResponse';
import { ResultData } from '../../common/model/resultDataModel';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { OrganizationSaveRequest } from '../../common/model/organization/organizationSaveRequest';
import { OrganizationListResponse } from '../../common/model/organization/organizationListResponse';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private apiService: ApiService) { }

  getOrganizationList(): Observable<ResultData<OrganizationListResponse>> {
    return this.apiService.post("/PartyRole/List",
      {
        "Roles": [
          "Organization"
        ],
        "States": null,
        "Name": null
      }
    );
  }
  

  saveOrganization(organizationSaveRequest: OrganizationSaveRequest): Observable<ResultData<OrganizationSaveResponse>> {
    return this.apiService.post("/Verify/Foundation/Save", organizationSaveRequest);
  }
}
