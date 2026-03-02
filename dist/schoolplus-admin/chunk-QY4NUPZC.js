import {
  QuestionPaperService
} from "./chunk-M43RSQWQ.js";
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
  environment,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTJ43J7W.js";
import "./chunk-TXDUYLVM.js";

// src/app/modules/question-papers/question-paper-list/question-paper-list.component.ts
function QuestionPaperListComponent_option_14_Template(rf, ctx) {
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
function QuestionPaperListComponent_option_21_Template(rf, ctx) {
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
function QuestionPaperListComponent_option_28_Template(rf, ctx) {
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
var QuestionPaperListComponent = class _QuestionPaperListComponent {
  questionPaperService;
  academicYearService;
  classService;
  subjectService;
  toastService;
  dialogService;
  exportService;
  router;
  papers = [];
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
      key: "paper_title",
      label: "Paper Title",
      sortable: true,
      format: (value) => value || "-"
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
      key: "exam_type_name",
      label: "Exam Type",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      key: "academic_year_name",
      label: "Academic Year",
      sortable: true,
      format: (value) => value || "-"
    },
    {
      // key: 'upload_date', 
      key: "created_at",
      label: "Upload Date",
      sortable: true,
      type: "date"
    }
  ];
  searchTerm = "";
  sortColumn = "upload_date";
  sortDirection = "desc";
  startDate;
  endDate;
  academicYearId;
  classId;
  subjectId;
  examTypeId;
  constructor(questionPaperService, academicYearService, classService, subjectService, toastService, dialogService, exportService, router) {
    this.questionPaperService = questionPaperService;
    this.academicYearService = academicYearService;
    this.classService = classService;
    this.subjectService = subjectService;
    this.toastService = toastService;
    this.dialogService = dialogService;
    this.exportService = exportService;
    this.router = router;
  }
  ngOnInit() {
    this.loadAcademicYears();
    this.loadClasses();
    this.loadSubjects();
    this.loadPapers();
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
  loadPapers() {
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
    if (this.examTypeId) {
      params.exam_type_id = this.examTypeId;
    }
    this.questionPaperService.getQuestionPapers(params).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status === "success" && response.data) {
          this.papers = response.data.papers || [];
          this.pagination = response.data.pagination || this.pagination;
        }
      },
      error: (error) => {
        this.loading = false;
        this.toastService.show("Error loading question papers", "error");
        console.error("Error loading question papers:", error);
      }
    });
  }
  onPageChange(page) {
    this.pagination.page = page;
    this.loadPapers();
  }
  onPageSizeChange(size) {
    this.pagination.limit = size;
    this.pagination.page = 1;
    this.loadPapers();
  }
  onSearchChange(search) {
    this.searchTerm = search;
    this.pagination.page = 1;
    this.loadPapers();
  }
  onSortChange(sort) {
    this.sortColumn = sort.column;
    this.sortDirection = sort.direction;
    this.loadPapers();
  }
  onDateFilterChange(filters) {
    this.startDate = filters.startDate;
    this.endDate = filters.endDate;
    this.pagination.page = 1;
    this.loadPapers();
  }
  onRowSelect(row) {
    this.selectedRowId = row.paper_id;
  }
  onRefresh() {
    this.loadPapers();
  }
  onAdd() {
  }
  onEdit(row) {
    this.router.navigate(["/app/question-papers/edit", row.paper_id]);
  }
  // onView(row: any): void {
  //   if (row.paper_file) {
  //     window.open(row.paper_file, '_blank');
  //   }
  // }
  onView(row) {
    if (row.paper_file) {
      const baseUrl = environment.apiUrl.replace("/php_includes", "");
      const fileUrl = `${baseUrl}/${row.paper_file}`;
      window.open(fileUrl, "_blank");
    }
  }
  onDelete(row) {
    this.dialogService.confirm({
      title: "Delete Question Paper",
      message: `Are you sure you want to delete "${row.paper_title}"?`,
      confirmText: "Delete",
      cancelText: "Cancel",
      type: "danger"
    }).subscribe((confirmed) => {
      if (confirmed) {
        this.questionPaperService.deleteQuestionPaper(row.paper_id).subscribe({
          next: (response) => {
            if (response.status === "success") {
              this.toastService.success("Question paper deleted successfully");
              this.loadPapers();
            } else {
              this.toastService.error(response.message || "Failed to delete question paper");
            }
          },
          error: (err) => {
            console.error("Error deleting paper:", err);
            this.toastService.error("Error deleting question paper");
          }
        });
      } else {
        console.log("User canceled deletion");
      }
    });
  }
  onExportClick(event) {
    const exportData = this.papers.map((paper) => ({
      "Paper Title": paper.paper_title || "-",
      "Class": paper.class_name || "-",
      "Subject": paper.subject_name || "-",
      "Exam Type": paper.exam_type_name || "-",
      "Academic Year": paper.academic_year_name || "-",
      "Upload Date": this.formatDate(paper.upload_date)
    }));
    const headers = this.columns.map((col) => col.label);
    switch (event.type) {
      case "csv":
        this.exportService.exportToCSV(exportData, `question-papers-${Date.now()}.csv`, headers);
        break;
      case "pdf":
        this.exportService.exportToPDF(exportData, `question-papers-${Date.now()}.pdf`, headers);
        break;
      case "print":
        this.exportService.printTable(exportData, headers);
        break;
      case "copy":
        this.exportService.copyToClipboard(exportData, headers);
        break;
    }
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  onAcademicYearChange(yearId) {
    this.academicYearId = yearId || void 0;
    this.pagination.page = 1;
    this.loadPapers();
  }
  onClassChange(classId) {
    this.classId = classId || void 0;
    this.pagination.page = 1;
    this.loadPapers();
  }
  onSubjectChange(subjectId) {
    this.subjectId = subjectId || void 0;
    this.pagination.page = 1;
    this.loadPapers();
  }
  onExamTypeChange(examTypeId) {
    this.examTypeId = examTypeId || void 0;
    this.pagination.page = 1;
    this.loadPapers();
  }
  onFilterToggle(visible) {
    this.showFilters = visible;
  }
  static \u0275fac = function QuestionPaperListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionPaperListComponent)(\u0275\u0275directiveInject(QuestionPaperService), \u0275\u0275directiveInject(AcademicYearService), \u0275\u0275directiveInject(ClassService), \u0275\u0275directiveInject(SubjectService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(ExportService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionPaperListComponent, selectors: [["app-question-paper-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 23, consts: [[1, "question-paper-list-container"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "additional-filters", "filter-panel"], [1, "filter-group"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "pageChange", "pageSizeChange", "searchChange", "sortChange", "dateFilterChange", "rowSelect", "refresh", "addClick", "editClick", "deleteClick", "viewClick", "exportClick", "filterToggle", "data", "columns", "pagination", "loading", "selectedRowId", "rowIdKey", "addRoute", "addLabel", "searchPlaceholder", "enableExport", "enableDateFilter", "showViewButton"]], template: function QuestionPaperListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Question Papers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Manage question papers and exam materials");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "label");
      \u0275\u0275text(10, "Academic Year:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function QuestionPaperListComponent_Template_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.academicYearId, $event) || (ctx.academicYearId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function QuestionPaperListComponent_Template_select_change_11_listener() {
        return ctx.onAcademicYearChange(ctx.academicYearId);
      });
      \u0275\u0275elementStart(12, "option", 7);
      \u0275\u0275text(13, "All Academic Years");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, QuestionPaperListComponent_option_14_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5)(16, "label");
      \u0275\u0275text(17, "Class:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function QuestionPaperListComponent_Template_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.classId, $event) || (ctx.classId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function QuestionPaperListComponent_Template_select_change_18_listener() {
        return ctx.onClassChange(ctx.classId);
      });
      \u0275\u0275elementStart(19, "option", 7);
      \u0275\u0275text(20, "All Classes");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, QuestionPaperListComponent_option_21_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 5)(23, "label");
      \u0275\u0275text(24, "Subject:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function QuestionPaperListComponent_Template_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.subjectId, $event) || (ctx.subjectId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function QuestionPaperListComponent_Template_select_change_25_listener() {
        return ctx.onSubjectChange(ctx.subjectId);
      });
      \u0275\u0275elementStart(26, "option", 7);
      \u0275\u0275text(27, "All Subjects");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, QuestionPaperListComponent_option_28_Template, 2, 2, "option", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "app-enhanced-table", 9);
      \u0275\u0275listener("pageChange", function QuestionPaperListComponent_Template_app_enhanced_table_pageChange_29_listener($event) {
        return ctx.onPageChange($event);
      })("pageSizeChange", function QuestionPaperListComponent_Template_app_enhanced_table_pageSizeChange_29_listener($event) {
        return ctx.onPageSizeChange($event);
      })("searchChange", function QuestionPaperListComponent_Template_app_enhanced_table_searchChange_29_listener($event) {
        return ctx.onSearchChange($event);
      })("sortChange", function QuestionPaperListComponent_Template_app_enhanced_table_sortChange_29_listener($event) {
        return ctx.onSortChange($event);
      })("dateFilterChange", function QuestionPaperListComponent_Template_app_enhanced_table_dateFilterChange_29_listener($event) {
        return ctx.onDateFilterChange($event);
      })("rowSelect", function QuestionPaperListComponent_Template_app_enhanced_table_rowSelect_29_listener($event) {
        return ctx.onRowSelect($event);
      })("refresh", function QuestionPaperListComponent_Template_app_enhanced_table_refresh_29_listener() {
        return ctx.onRefresh();
      })("addClick", function QuestionPaperListComponent_Template_app_enhanced_table_addClick_29_listener() {
        return ctx.onAdd();
      })("editClick", function QuestionPaperListComponent_Template_app_enhanced_table_editClick_29_listener($event) {
        return ctx.onEdit($event);
      })("deleteClick", function QuestionPaperListComponent_Template_app_enhanced_table_deleteClick_29_listener($event) {
        return ctx.onDelete($event);
      })("viewClick", function QuestionPaperListComponent_Template_app_enhanced_table_viewClick_29_listener($event) {
        return ctx.onView($event);
      })("exportClick", function QuestionPaperListComponent_Template_app_enhanced_table_exportClick_29_listener($event) {
        return ctx.onExportClick($event);
      })("filterToggle", function QuestionPaperListComponent_Template_app_enhanced_table_filterToggle_29_listener($event) {
        return ctx.onFilterToggle($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
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
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.papers)("columns", ctx.columns)("pagination", ctx.pagination)("loading", ctx.loading)("selectedRowId", ctx.selectedRowId)("rowIdKey", "paper_id")("addRoute", "/app/question-papers/create")("addLabel", "Upload Paper")("searchPlaceholder", "Search question papers...")("enableExport", true)("enableDateFilter", true)("showViewButton", true);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, EnhancedTableComponent], styles: ["\n\n.question-paper-list-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n@media (max-width: 768px) {\n  .question-paper-list-container[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .question-paper-list-container[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n.question-paper-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n}\n.question-paper-list-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n}\n.question-paper-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-md);\n  background: var(--bg-secondary);\n  border-radius: var(--radius-md);\n  flex-wrap: wrap;\n  align-items: end;\n}\n.question-paper-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-xs);\n  min-width: 150px;\n}\n.question-paper-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n.question-paper-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  background: var(--bg-primary);\n  color: var(--text-primary);\n  font-size: var(--font-size-sm);\n  transition: all var(--transition-base);\n}\n.question-paper-list-container[_ngcontent-%COMP%]   .additional-filters[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n/*# sourceMappingURL=question-paper-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionPaperListComponent, { className: "QuestionPaperListComponent", filePath: "src\\app\\modules\\question-papers\\question-paper-list\\question-paper-list.component.ts", lineNumber: 22 });
})();
export {
  QuestionPaperListComponent
};
//# sourceMappingURL=chunk-QY4NUPZC.js.map
