import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BikeService } from "./services/bike.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth.guard";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ViewRegistrationComponent } from "./components/view-registration/view-registration.component";
import { CallbackComponent } from "./components/callback/callback.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BikeService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
