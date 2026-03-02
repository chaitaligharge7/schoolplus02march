import {
  ImportantNotesService
} from "./chunk-4HD23BJT.js";
import {
  SubjectService
} from "./chunk-YKDQPPIU.js";
import {
  AcademicYearService
} from "./chunk-A5OHQDLX.js";
import {
  DialogService
} from "./chunk-UPFK65KQ.js";
import {
  EnhancedTableComponent,
  ExportService
} from "./chunk-LT2VDVRY.js";
import "./chunk-6W4TS6AE.js";
import {
  ClassService
} from "./chunk-23QP2TAM.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DC2DSRDW.js";
import {
  ToastService
} from "./chunk-FQ6RWLG3.js";
import {
  Router,
  RouterModule
} from "./chunk-GXY6YLNG.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/important-notes/notes-list/notes-list.component.ts
function NotesListComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r1 = ctx.$implicit;
    \u0275\u0275property("value", year_r1.academic_year_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r1.academic_year_name, " ");
  }
}
function NotesListComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r2 = ctx.$implicit;
    \u0275\u0275property("value", cls_r2.class_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cls_r2.class_name, " ");
  }
}
function NotesListComponent_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    \u0275\u0275property("value", subject_r3.subject_id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subject_r3.subject_name, " ");
  }
}
function NotesListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "button", 16);
    \u0275\u0275listener("click", function NotesListComponent_div_44_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.downloadNote());
    });
    \u0275\u0275element(2, "i", 17);
    \u0275\u0275text(3, " Download Note ");
    \u0275\u0275elementEnd()();
  }
}
var NotesListComponent = class _NotesListComponent {
  notesService;
  academicYearService;
  classService;
  subjectService;
  dialogService;
  toastService;
  exportService;
  router;
  notes = [];
  academicYears = [];
  classes = [];
  subjects = [];
  loading = false;
  showFilters = false;
  selectedRowId;
  pagination = {
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  };
  columns = [
    {
      key: "note_title",
      label: "Note Title",
      sortable: true,
      format: (value, row) => {
        let html = `<strong>${value || "-"}</strong>`;
        if (row?.note_description) {
          const desc = row.note_description.length > 50 ? row.note_description.substring(0, 50) + "..." : row.note_description;
          html += `<p class="note-description">${desc}</p>`;
        }
        return html;
      }
    },
    {
      key: "class_name",
      label: "Class",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "subject_name",
      label: "Subject",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "teacher_name",
      label: "Teacher",
      sortable: true,
      format: (value, row) => {
        return `${row?.teacher_first_name || ""} ${row?.teacher_last_name || ""}`.trim() || "-";
      }
    },
    {
      key: "note_type",
      label: "Type",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-info">${value || "-"}</span>`;
      }
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      format: (value) => {
        return `<span class="badge badge-success">${value || "-"}</span>`;
      }
    }
  ];
  searchTerm = "";
  sortColumn = "note_title";
  sortDirection = "asc";
  startDate;
  endDate;
  academicYearId;
  classId;
  subjectId;
  noteType;
  constructor(notesService, academicYearService, classService, subjectService, dialogService, toastService, exportService, router) {
    this.notesService = notesService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.dialogService = dialogService;
    this.toastService = toastService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadNotes();
  }
  loadAcademicYears() {
    this.academicYearService.getAcademicYears().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.academicYears = response.data.academic_years || [];
        }
      }
    });
  }
  loadClasses() {
    this.classService.getClasses().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.classes = response.data.classes || [];
        }
      }
    });
  }
  loadSubjects() {
    this.subjectService.getSubjects().subscribe({
      next: (response) => {
        if (response.status === "success" && response.data) {
          this.subjects = response.data.subjects || [];
        }
      }
    });
  }
  loadNotes() {
    this.loading = true;
    const params = {
      page: this.pagination.page,
      limit: this.pagination.limit,
      sort_column: this.sortColumn,
      sort_direction: this.sortDirection.toUpperCase()
    };
    if (this.searchTerm) {
      params.search = this.searchTerm;
    }
    if (this.startDate) {
      params.start_date = this.startDate;
    }
    if (this.endDate) {
      params.end_date = this.endDate;
    }
    if (this.academicYearId) {
      params.academic_year_id = this.academicYearId;
    }
    if (this.classId) {
      params.class_id = this.classId;
    }
    if (this.subjectId) {
      params.subject_id = this.subjectId;
    }
    if (this.noteType) {
      params.note_type = this.noteType;
    }
    this.notesService.getNotes(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.notes = response.data.notes || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading important notes", "error");
        console.error("Error loading important notes:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadNotes();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadNotes();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadNotes();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadNotes();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadNotes();
  }
  onRowSelect(row) {
    this.selectedRowId = row.note_id;
  }
  onRefresh() {
    this.loadNotes();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/important-notes/edit", row.note_id]);
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Deactivate Student",
      message: `Are you sure you want to deactivate "${row.note_id}"?`,
      confirmText: "Deactivate",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.notesService.deleteNote(row.note_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.show("Student deactivated successfully", "success");
              this.loadNotes();
            }
          },
          error: () => {
            this.toastService.show("Error deactivating student", "error");
          }
        });
      }
    });
  }
  onView(row) {
    this.router.navigate(["/app/important-notes/view", row.note_id]);
  }
  onExportClick(event) {
    const exportData = this.notes.map((note) => ({
      "Note Title": note.note_title || "-",
      "Description": note.note_description || "-",
      "Class": note.class_name || "-",
      "Subject": note.subject_name || "-",
      "Teacher": `${note.teacher_first_name || ""} ${note.teacher_last_name || ""}`.trim() || "-",
      "Type": note.note_type || "-",
      "Status": note.status || "-"
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `important-notes-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `important-notes-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  onAcademicYearChange(yearId) {
    this.academicYearId = yearId || void 0;
    this.pagination.page = 1;
    this.loadNotes();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadNotes();
  }
  onSubjectChange(subjectId) {
    this.subjectId = subjectId || void 0;
    this.pagination.page = 1;
    this.loadNotes();
  }
  onNoteTypeChange(type) {
    this.noteType = type || void 0;
    this.pagination.page = 1;
    this.loadNotes();
  }
  getSelectedNote() {
    if (!this.selectedRowId)
      return null;
    return this.notes.find((n) => n.note_id === this.selectedRowId);
  }
  // Add this property in your class (with other properties)
  downloadNote() {
    const note = this.getSelectedNote();
    if (note && note.note_file) {
      const fileUrl = `${environment.apiUrl.replace("/php_includes", "")}/${note.note_file}`;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank";
      const fileExtension = note.note_file.split(".").pop() || "pdf";
      link.setAttribute("download", `${note.note_title || "download"}.${fileExtension}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.toastService.show("Download started", "success");
    } else {
      this.toastService.show("No file available for download", "warning");
    }
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function NotesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotesListComponent)(\u0275\u0275directiveInject(ImportantNotesService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesListComponent, selectors: [["app-notes-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 26, consts: [[1, "notes-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "note"], ["value", "formula"], ["value", "summary"], ["value", "other"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter", "showViewButton"], ["class", "download-action", 4, "ngIf"], [1, "download-action"], ["title", "Download Note", 1, "btn", "btn-secondary", 3, "click"], [1, "bi", "bi-download"]], template: function NotesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Important Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage important notes and study materials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function NotesListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, NotesListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function NotesListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesListComponent_Template_select_change_18_listener() {
        return ctx.onClassChange(ctx.classId);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, NotesListComponent_option_21_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 5)(23, "label");
      \u0275\u0275text(24, "Subject:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function NotesListComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.subjectId, $event) || (ctx.subjectId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesListComponent_Template_select_change_25_listener() {
        return ctx.onSubjectChange(ctx.subjectId);
      });
      \u0275\u0275elementStart(26, "option", 7);
      \u0275\u0275text(27, "All Subjects");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, NotesListComponent_option_28_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 5)(30, "label");
      \u0275\u0275text(31, "Note Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function NotesListComponent_Template_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.noteType, $event) || (ctx.noteType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function NotesListComponent_Template_select_change_32_listener() {
        return ctx.onNoteTypeChange(ctx.noteType);
      });
      \u0275\u0275elementStart(33, "option", 7);
      \u0275\u0275text(34, "All Types");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 9);
      \u0275\u0275text(36, "Note");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 10);
      \u0275\u0275text(38, "Formula");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 11);
      \u0275\u0275text(40, "Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 12);
      \u0275\u0275text(42, "Other");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "app-enhanced-table", 13);
      \u0275\u0275listener("pageChange", function NotesListComponent_Template_app_enhanced_table_pageChange_43_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function NotesListComponent_Template_app_enhanced_table_pageSizeChange_43_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function NotesListComponent_Template_app_enhanced_table_searchChange_43_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function NotesListComponent_Template_app_enhanced_table_sortChange_43_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function NotesListComponent_Template_app_enhanced_table_dateFilterChange_43_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function NotesListComponent_Template_app_enhanced_table_rowSelect_43_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function NotesListComponent_Template_app_enhanced_table_refresh_43_listener() {
        return ctx.onRefresh();
      })("addClick", function NotesListComponent_Template_app_enhanced_table_addClick_43_listener() {
        return ctx.onAdd();
      })("editClick", function NotesListComponent_Template_app_enhanced_table_editClick_43_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function NotesListComponent_Template_app_enhanced_table_deleteClick_43_listener($event) {
        return ctx.onDelete($event);
      })("viewClick", function NotesListComponent_Template_app_enhanced_table_viewClick_43_listener($event) {
        return ctx.onView($event);
      })("exportClick", function NotesListComponent_Template_app_enhanced_table_exportClick_43_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function NotesListComponent_Template_app_enhanced_table_filterToggle_43_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, NotesListComponent_div_44_Template, 4, 0, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_24_0;
      \u0275\u0275advance(7);
      \u0275\u0275classProp("expanded", ctx.showFilters);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.academicYearId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.academicYears);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.classId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.classes);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.subjectId);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.subjects);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.noteType);
      \u0275\u0275advance();
      \u0275\u0275property("value", void 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("data", ctx.notes)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "note_id")("addRoute", "/app/important-notes/create")("addLabel", "Add Note")("searchPlaceholder", "Search by note title...")("enableExport", true)("enableDateFilter", true)("showViewButton", true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_24_0 = ctx.getSelectedNote()) == null ? null : tmp_24_0.note_file);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.notes-list-container[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  max-width: 1600px;\n  margin: 0 auto;\n  width: 100%;\n}\n@media (min-width: 1200px) {\n  .notes-list-container[_ngcontent-%COMP%] {\n    padding: 20px 24px;\n  }\n}\n@media (max-width: 768px) {\n  .notes-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .notes-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.notes-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.notes-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.notes-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.notes-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.notes-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.notes-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.notes-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.notes-list-container[_ngcontent-%COMP%]   .download-action[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  text-align: center;\n}\n.notes-list-container[_ngcontent-%COMP%]     .note-description {\n  margin: 4px 0 0 0;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=notes-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesListComponent, { className: "NotesListComponent", filePath: "src\\app\\modules\\important-notes\\notes-list\\notes-list.component.ts", lineNumber: 22 });
})();
export {
  NotesListComponent
};
//# sourceMappingURL=chunk-FI3RTE5L.js.map
