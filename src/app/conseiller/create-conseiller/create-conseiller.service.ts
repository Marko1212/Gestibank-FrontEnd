import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CreateConseillerService {
  apiUrl = "http://localhost:8080/";
  constructor(private httpCreateCOnseiller: HttpClient) {}

  createConseiller(conseiller) {
    console.log(conseiller);
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type", "application/json");
    httpHedears.append("Accept", "*/*");
    httpHedears.append("Accept-Encoding", "gzip, deflate");
    httpHedears.append("Connection", "keep-alive");
    return this.httpCreateCOnseiller.post(
      this.apiUrl + "admin/createAgent",
      conseiller,
      { headers: httpHedears, responseType: "text" }
    );
  }
}
