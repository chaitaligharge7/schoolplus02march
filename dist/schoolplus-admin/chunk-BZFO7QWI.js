import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/shared/services/library.service.ts
var LibraryService = class _LibraryService {
  http;
  constructor(http) {
    this.http = http;
  }
  getBooks(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/library/list-books.php`, { params: httpParams });
  }
  getBook(bookId) {
    return this.http.get(`${environment.apiUrl}/library/get.php`, {
      params: { book_id: bookId }
    });
  }
  createBook(bookData) {
    return this.http.post(`${environment.apiUrl}/library/create.php`, bookData);
  }
  updateBook(bookId, bookData) {
    return this.http.post(`${environment.apiUrl}/library/update.php`, __spreadValues({
      book_id: bookId
    }, bookData));
  }
  deleteBook(bookId) {
    return this.http.post(`${environment.apiUrl}/library/delete.php`, {
      book_id: bookId
    });
  }
  issueBook(issueData) {
    return this.http.post(`${environment.apiUrl}/library/issue.php`, issueData);
  }
  returnBook(returnData) {
    return this.http.post(`${environment.apiUrl}/library/return.php`, returnData);
  }
  getIssuedBooks(params) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== "") {
        httpParams = httpParams.set(key, params[key].toString());
      }
    });
    return this.http.get(`${environment.apiUrl}/library/issued.php`, { params: httpParams });
  }
  static \u0275fac = function LibraryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LibraryService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LibraryService, factory: _LibraryService.\u0275fac, providedIn: "root" });
};

export {
  LibraryService
};
//# sourceMappingURL=chunk-BZFO7QWI.js.map
