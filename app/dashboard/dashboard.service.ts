import { Injectable } from '@angular/core';
import { UtilService } from '../util/util.service';
import { MenuModel } from '../util/menu.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { DASHBOARD_CONSTANTS } from './dashobard.constants';
@Injectable()
export class DashboardService{
  API_URL: string;
  constructor(private utilService: UtilService)
  { this.API_URL = environment.API_URL }

  getData(): Observable<MenuModel> {
    return this.utilService.get(this.API_URL + DASHBOARD_CONSTANTS.CREATE_MENU, {});
  }
  createData(data: MenuModel): Observable<MenuModel> {
    return this.utilService.post(this.API_URL + DASHBOARD_CONSTANTS.CREATE_MENU, data, {});
  }
  updateData(data: MenuModel): Observable<MenuModel> {
    return this.utilService.put(this.API_URL + DASHBOARD_CONSTANTS.CREATE_MENU, data, {});
  }
  deleteData(data: MenuModel): Observable<MenuModel> {
    return this.utilService.delete(this.API_URL + DASHBOARD_CONSTANTS.CREATE_MENU, data);
  }
}
