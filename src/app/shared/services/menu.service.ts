import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface MenuItem {
  menu_id: number;
  menu_name: string;
  menu_code: string;
  menu_icon: string;
  menu_route: string;
  parent_menu_id: number | null;
  menu_order: number;
  is_master: number;
  children?: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = environment.apiUrl;
  private menusSubject = new BehaviorSubject<MenuItem[]>([]);
  public menus$ = this.menusSubject.asObservable();

  private functionalitiesSubject = new BehaviorSubject<{ [menuId: number]: string[] }>({});
  public functionalities$ = this.functionalitiesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUserMenus();
  }

  /**
   * Load menus for current user
   */
  loadUserMenus(): void {
    this.getUserMenus().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.menusSubject.next(response.data.menus || []);
          this.functionalitiesSubject.next(response.data.functionalities || {});
        }
      },
      error: (error) => {
        console.error('Error loading user menus:', error);
        // Fallback to default menus if error
        this.menusSubject.next([]);
      }
    });
  }

  /**
   * Get all available menus (for admin)
   */
  getAllMenus(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menus/get-menus.php`);
  }

  /**
   * Get menus for current user
   */
  getUserMenus(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/menus/get-user-menus.php`);
  }

  /**
   * Check if user has permission for a menu
   */
  hasMenuPermission(menuCode: string, action: string = 'view'): boolean {
    const menus = this.menusSubject.value;
    const functionalities = this.functionalitiesSubject.value;

    // Find menu by code
    const findMenu = (items: MenuItem[]): MenuItem | null => {
      for (const item of items) {
        if (item.menu_code === menuCode) {
          return item;
        }
        if (item.children) {
          const found = findMenu(item.children);
          if (found) return found;
        }
      }
      return null;
    };

    const menu = findMenu(menus);
    if (!menu) return false;

    // Check functionalities
    const menuFuncs = functionalities[menu.menu_id] || [];
    return menuFuncs.includes(action) || menuFuncs.includes('all');
  }

  /**
   * Get current menus
   */
  getMenus(): MenuItem[] {
    return this.menusSubject.value;
  }

  /**
   * Refresh menus
   */
  refreshMenus(): void {
    this.loadUserMenus();
  }

  /**
   * Add new module menus to menu_details for current school (key_id).
   * Call once so Security Guard, Receptionist, Counselor, Admission Tickets etc. appear in dynamic sidebar.
   */
  addNewModulesMenus(): Observable<{ status: string; message?: string; data?: { inserted?: number } }> {
    return this.http.post<{ status: string; message?: string; data?: { inserted?: number } }>(
      `${this.apiUrl}/menus/add-new-modules-menus.php`,
      {}
    );
  }
}


