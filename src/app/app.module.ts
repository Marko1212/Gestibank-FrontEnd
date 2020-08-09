import { BrowserModule } from "@angular/platform-browser";
import { NgModule, forwardRef } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./user.service";
import { HomeComponent } from "./home/home.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { ShowUserComponent } from "./show-user/show-user.component";
import { FooterComponent } from "./footer/footer.component";
import { CompteComponent } from "./compte/compte.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth/auth-guard";
import { CreateCompteComponent } from "./compte/create-compte/create-compte.component";
import { DemandeOuvertureComponent } from "./demande-ouverture/demande-ouverture.component";
import { MouvementComponent } from "./compte/mouvement/mouvement.component";
import { ClientComponent } from "./client/client/client.component";
import { AdminComponent } from "./admin/admin/admin.component";
import { ConseillerComponent } from "./conseiller/conseiller/conseiller.component";
import { CreateDemandeOuvertureComponent } from "./create-demande-ouverture/create-demande-ouverture.component";
import { CreateConseillerComponent } from "./conseiller/create-conseiller/create-conseiller.component";
import { ViewConseillerComponent } from "./conseiller/view-conseiller/view-conseiller.component";
import { ConseillerHomeComponent } from "./conseiller/conseiller-home/conseiller-home.component";
import { EditConseillerComponent } from "./conseiller/edit-conseiller/edit-conseiller.component";
import { PageNotAuthorizedComponent } from "./page-not-authorized/page-not-authorized.component";
import { OperationComponent } from "./compte/operation/operation.component";
import { DemandeOuvertureAssigneComponent } from "./demande-ouverture-assigne/demande-ouverture-assigne.component";
import { ListClientComponent } from "./client/list-client/list-client.component";
import { ConseillerClientComponent } from "./conseiller/conseiller-client/conseiller-client.component";
import { CreateClientComponent } from "./client/create-client/create-client.component";
import { EditClientComponent } from "./client/edit-client/edit-client.component";
import { ViewClientComponent } from "./client/view-client/view-client.component";
import { ConverterModule } from "./currencyConverter/converter.module";
import { NotificationComponent } from "./compte/notification/notification.component";
import { RequeteComponent } from "./compte/requete/requete.component";
import { RequeteClientComponent } from "./client/requetesClients/requeteClient.component";
import { ChangePasswordComponent } from "./client/changePassword/changePassword.component";
import { ValidateEqualModule } from "ng-validate-equal";
import { FileValidator } from "./create-demande-ouverture/file-input.validator";
//import { UploadFilesComponent } from "./create-demande-ouverture/upload-files.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    HomeComponent,
    EditUserComponent,
    HeaderComponent,
    AddUserComponent,
    ShowUserComponent,
    FooterComponent,
    CompteComponent,
    LoginComponent,
    CreateCompteComponent,
    DemandeOuvertureComponent,
    CompteComponent,
    MouvementComponent,
    ClientComponent,
    AdminComponent,
    ConseillerComponent,
    CreateDemandeOuvertureComponent,
    //UploadFilesComponent,
    CreateConseillerComponent,
    CreateClientComponent,
    ViewConseillerComponent,
    ConseillerHomeComponent,
    EditConseillerComponent,
    PageNotAuthorizedComponent,
    OperationComponent,
    DemandeOuvertureAssigneComponent,
    ListClientComponent,
    ConseillerClientComponent,
    EditClientComponent,
    ViewClientComponent,
    NotificationComponent,
    RequeteComponent,
    RequeteClientComponent,
    ChangePasswordComponent,
    FileValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ConverterModule,
    ValidateEqualModule,
  ],
  providers: [
    UserService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DemandeOuvertureComponent),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
