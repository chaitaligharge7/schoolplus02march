import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTJ43J7W.js";

// src/app/shared/services/question-paper.service.ts
var QuestionPaperService = class _QuestionPaperService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getQuestionPapers(params) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] !== null && params[key] !== void 0 && params[key] !== "") {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    return this.http.get(`${this.apiUrl}/question-papers/list.php`, { params: httpParams });
  }
  createQuestionPaper(data) {
    return this.http.post(`${this.apiUrl}/question-papers/list.php`, data);
  }
  updateQuestionPaper(paperId, data) {
    data.append("paper_id", paperId.toString());
    return this.http.post(`${this.apiUrl}/question-papers/update.php`, data);
  }
  // Delete a question paper
  deleteQuestionPaper(paperId) {
    console.log("deleteQuestionPaper called with paperId:", paperId);
    const payload = {
      paper_id: paperId,
      action: "delete"
      // optional, backend seems to ignore but can keep
    };
    console.log("Payload being sent:", payload);
    return this.http.post(`${this.apiUrl}/question-papers/delete.php`, payload);
  }
  static \u0275fac = function QuestionPaperService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionPaperService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionPaperService, factory: _QuestionPaperService.\u0275fac, providedIn: "root" });
};

export {
  QuestionPaperService
};
//# sourceMappingURL=chunk-M43RSQWQ.js.map
