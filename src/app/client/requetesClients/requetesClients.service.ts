import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RequetesClientsService {
  apiUrl = "http://localhost:8080/";
  constructor(private httpValidationRequetes: HttpClient) {}

  validateRequests(requestsIdListToValidate) {
    console.log(requestsIdListToValidate);
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");

    return this.httpValidationRequetes.post(
      this.apiUrl + "agent/markRequestsAsResolved",
      requestsIdListToValidate,
      { headers: httpHedears }
    );
  }
}
