import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  apiUrl = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {}

  forgotPassword(request: { email: string }) {
    console.log(request);
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httpClient.post(
      this.apiUrl + "userAccount/forgotPassword",
      request,
      { headers: httpHedears, responseType: "text" }
    );
  }

  resetPass(resetPassword: { newPassword: any; token: any }) {
    console.log(resetPassword);
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httpClient.post(
      this.apiUrl + "userAccount/resetPassword",
      resetPassword,
      { headers: httpHedears, responseType: "text" }
    );
  }
}
