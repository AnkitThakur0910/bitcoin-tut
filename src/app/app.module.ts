import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { BtcComponent } from './btc/btc.component';
import { TokenInterceptorService } from './token-interceptor.service';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { UsernameComponent } from './username/username.component';
import {MatCardModule} from '@angular/material/card';
import { CompeteComponent } from './compete/compete.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    LandingComponent,
    BtcComponent,
    UsernameComponent,
    CompeteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    HammerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [AppService,AuthGuard,{provide : HTTP_INTERCEPTORS,multi:true,useClass : TokenInterceptorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
