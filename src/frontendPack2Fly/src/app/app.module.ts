import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFormComponent } from './Pages/search-form/search-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './Pages/contact-form/contact-form.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SliderComponent } from './Components/slider/slider.component';
import { RecommendedpacksComponent } from './Pages/recommendedpacks/recommendedpacks.component';
import { ToppacksComponent } from './Pages/toppacks/toppacks.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UserIdentityComponent } from './Pages/user-identity/user-identity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SearchFormComponent,
    ContactFormComponent,
    AboutusComponent,
    FooterComponent,
    SliderComponent,
    RecommendedpacksComponent,
    ToppacksComponent,
    UserIdentityComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        NgbModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
