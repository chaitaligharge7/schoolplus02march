import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import { MenuService } from '../../../shared/services/menu.service';
import { ToastService } from '../../../shared/services/toast.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface MenuItem {
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

@Component({
  selector: 'app-user-functionality',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-functionality.component.html',
  styleUrls: ['./user-functionality.component.scss']
})
export class UserFunctionalityComponent implements OnInit {
  userId: number | null = null;
  user: any = null;
  allMenus: MenuItem[] = [];
  functionalityForm: FormGroup;
  isLoading = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private userService: UserService,
    private menuService: MenuService,
    private toastService: ToastService,
    private http: HttpClient
  ) {
    this.functionalityForm = this.fb.group({
      user_id: [null, Validators.required],
      role_id: [null],
      functionalities: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      if (this.userId) {
        this.loadUserData();
        this.loadMenus();
        this.loadUserFunctionality();
      }
    });
  }

  loadUserData(): void {
    if (!this.userId) return;
    
    this.isLoading = true;
    this.userService.getUser(this.userId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.status === 'success' && response.data) {
          this.user = response.data.user;
          this.functionalityForm.patchValue({
            user_id: this.userId,
            role_id: this.user.role_id || null
          });
        }
      },
      error: () => {
        this.isLoading = false;
        this.toastService.show('Error loading user data', 'error');
      }
    });
  }

  loadMenus(): void {
    this.menuService.getAllMenus().subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          this.allMenus = response.data.menus || [];
          this.buildMenuForm();
        }
      },
      error: () => {
        this.toastService.show('Error loading menus', 'error');
      }
    });
  }

  loadUserFunctionality(): void {
    if (!this.userId) return;

    this.http.get<any>(`${environment.apiUrl}/user-functionality/get.php?user_id=${this.userId}`).subscribe({
      next: (response) => {
        if (response.status === 'success' && response.data) {
          const assignedMenus = response.data.assigned_menus || {};
          this.updateFormWithAssignedMenus(assignedMenus);
        }
      },
      error: () => {
        this.toastService.show('Error loading user functionality', 'error');
      }
    });
  }

  buildMenuForm(): void {
    const functionalitiesArray = this.functionalityForm.get('functionalities') as FormArray;
    functionalitiesArray.clear();

    const addMenuToForm = (menus: MenuItem[]) => {
      menus.forEach(menu => {
        if (menu.is_master === 0) { // Only add non-master menus
          const menuGroup = this.fb.group({
            menu_id: [menu.menu_id],
            menu_name: [menu.menu_name],
            selected: [false],
            canView: [false],
            canAdd: [false],
            canUpdate: [false],
            canDelete: [false],
            canReport: [false]
          });
          functionalitiesArray.push(menuGroup);
        }

        if (menu.children && menu.children.length > 0) {
          addMenuToForm(menu.children);
        }
      });
    };

    addMenuToForm(this.allMenus);
  }

  updateFormWithAssignedMenus(assignedMenus: { [menuId: number]: string[] }): void {
    const functionalitiesArray = this.functionalityForm.get('functionalities') as FormArray;
    
    functionalitiesArray.controls.forEach(control => {
      const menuId = control.get('menu_id')?.value;
      if (assignedMenus[menuId]) {
        const funcs = assignedMenus[menuId];
        control.patchValue({
          selected: true,
          canView: funcs.includes('view') || funcs.includes('all'),
          canAdd: funcs.includes('add') || funcs.includes('all'),
          canUpdate: funcs.includes('update') || funcs.includes('all'),
          canDelete: funcs.includes('delete') || funcs.includes('all'),
          canReport: funcs.includes('report') || funcs.includes('all')
        });
      }
    });
  }

  toggleMenuSelection(index: number): void {
    const control = (this.functionalityForm.get('functionalities') as FormArray).at(index);
    const selected = control.get('selected')?.value;
    
    if (selected) {
      control.patchValue({
        canView: true,
        canAdd: true,
        canUpdate: true,
        canDelete: true,
        canReport: true
      });
    } else {
      control.patchValue({
        canView: false,
        canAdd: false,
        canUpdate: false,
        canDelete: false,
        canReport: false
      });
    }
  }

  toggleSelectAll(event: any): void {
    const isChecked = event.target.checked;
    const functionalitiesArray = this.functionalityForm.get('functionalities') as FormArray;
    
    functionalitiesArray.controls.forEach(control => {
      control.patchValue({
        selected: isChecked,
        canView: isChecked,
        canAdd: isChecked,
        canUpdate: isChecked,
        canDelete: isChecked,
        canReport: isChecked
      });
    });
  }

  onSubmit(): void {
    if (this.functionalityForm.invalid) {
      this.toastService.show('Please fill all required fields', 'error');
      return;
    }

    this.isSaving = true;
    const formValue = this.functionalityForm.value;
    
    const functionalities = formValue.functionalities
      .filter((f: any) => f.selected)
      .map((f: any) => {
        const funcs: string[] = [];
        if (f.canView) funcs.push('view');
        if (f.canAdd) funcs.push('add');
        if (f.canUpdate) funcs.push('update');
        if (f.canDelete) funcs.push('delete');
        if (f.canReport) funcs.push('report');
        
        return {
          menu_id: f.menu_id,
          functionalities: funcs.length > 0 ? funcs : ['all']
        };
      });

    const payload = {
      user_id: formValue.user_id,
      role_id: formValue.role_id,
      functionalities: functionalities,
      app_type: 'web'
    };

    this.http.post<any>(`${environment.apiUrl}/user-functionality/save.php`, payload).subscribe({
      next: (response) => {
        this.isSaving = false;
        if (response.status === 'success') {
          this.toastService.show('User functionality saved successfully', 'success');
          this.menuService.refreshMenus(); // Refresh menus for current user
          this.router.navigate(['/app/users']);
        } else {
          this.toastService.show(response.message || 'Error saving functionality', 'error');
        }
      },
      error: () => {
        this.isSaving = false;
        this.toastService.show('Error saving user functionality', 'error');
      }
    });
  }

  get functionalitiesFormArray(): FormArray {
    return this.functionalityForm.get('functionalities') as FormArray;
  }
}

