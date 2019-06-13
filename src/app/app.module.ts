import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { RotasModule } from './app.routes';
import { Page404Component } from './modules/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroRoutingModule } from './modules/cadastro/cadastro-routing.module';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { CmailFormModule } from './shared/modules/cmail-form-group.module';
import { LoginService } from './modules/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InboxComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CmailFormModule,
    RotasModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
