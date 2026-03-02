import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { CmsService } from '../../../shared/services/cms.service';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-page-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.scss']
})
export class PageCreateComponent implements OnInit {
  model: any = { title: '', slug: '', content: '', meta_description: '', is_published: 1 };
  loading = false;
  editId: number | null = null;

  constructor(private cmsService: CmsService, private toast: ToastService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editId = +id;
      this.cmsService.getPage(this.editId).subscribe({
        next: (res) => { if (res.status === 'success' && res.data?.page) this.model = { ...res.data.page }; }
      });
    }
  }
  save(): void {
    if (!this.model.title?.trim()) { this.toast.show('Title is required', 'error'); return; }
    if (!this.model.slug?.trim()) this.model.slug = this.model.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    this.loading = true;
    const payload = this.editId ? { ...this.model, page_id: this.editId } : this.model;
    const obs = this.editId ? this.cmsService.updatePage(payload) : this.cmsService.createPage(this.model);
    obs.subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === 'success') {
          this.toast.show(this.editId ? 'Page updated' : 'Page created', 'success');
          this.router.navigate(['/app/cms/list']);
        }
      },
      error: () => { this.loading = false; this.toast.show('Error', 'error'); }
    });
  }
  cancel(): void { this.router.navigate(['/app/cms/list']); }
}
