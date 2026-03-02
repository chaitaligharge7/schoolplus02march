import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { LabService } from "../../../shared/services/lab.service";
import { ToastService } from "../../../shared/services/toast.service";
import { DateFormatPipe } from "../../../shared/pipes/date-format.pipe";

@Component({
  selector: "app-lab-items-list",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, DateFormatPipe],
  templateUrl: "./lab-items-list.component.html",
  styleUrls: ["./lab-items-list.component.scss"],
})
export class LabItemsListComponent implements OnInit {
  items: any[] = [];
  practicals: any[] = [];
  activeTab: "items" | "practicals" = "items";
  isLoading = false;
  searchForm: FormGroup;
  pagination: any = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
  };

  constructor(
    private fb: FormBuilder,
    private labService: LabService,
    private toastService: ToastService,
    private router: Router,
  ) {
    this.searchForm = this.fb.group({
      search: [""],
      category: [null],
      status: [null],
    });
  }

  ngOnInit(): void {
    this.loadItems();
  }

  setActiveTab(tab: "items" | "practicals"): void {
    this.activeTab = tab;
    if (tab === "items") {
      this.loadItems();
    } else {
      this.loadPracticals();
    }
  }

  loadItems(): void {
    this.isLoading = true;
    const params = {
      ...this.searchForm.value,
      page: this.pagination.page,
      limit: this.pagination.limit,
    };

    this.labService.getLabItems(params).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.items = response.data?.items || [];
          this.pagination = {
            ...this.pagination,
            total: response.data?.total || 0,
            pages: Math.ceil(
              (response.data?.total || 0) / this.pagination.limit,
            ),
          };
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.toastService.error("Failed to load lab items");
        this.isLoading = false;
      },
    });
  }

  loadPracticals(): void {
    this.isLoading = true;
    const params = {
      ...this.searchForm.value,
      page: this.pagination.page,
      limit: this.pagination.limit,
    };

    this.labService.getLabPracticals(params).subscribe({
      next: (response) => {
        if (response.status === "success") {
          this.practicals = response.data?.practicals || [];
          this.pagination = {
            ...this.pagination,
            total: response.data?.total || 0,
            pages: Math.ceil(
              (response.data?.total || 0) / this.pagination.limit,
            ),
          };
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.toastService.error("Failed to load lab practicals");
        this.isLoading = false;
      },
    });
  }

  onSearch(): void {
    this.pagination.page = 1;
    if (this.activeTab === "items") {
      this.loadItems();
    } else {
      this.loadPracticals();
    }
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    if (this.activeTab === "items") {
      this.loadItems();
    } else {
      this.loadPracticals();
    }
  }

  onEdit(item: any): void {
    if (!item?.item_id) {
      this.toastService.error("Invalid item");
      return;
    }

    this.router.navigate(["/app/lab/items/edit", item.item_id]);
  }

  onDelete(item:any){}
}
