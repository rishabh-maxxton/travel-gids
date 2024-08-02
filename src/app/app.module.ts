import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { TopDestinationComponent } from './top-destination/top-destination.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MapsComponent } from './maps/maps.component';
import { AddressComponent } from './address/address.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { ReviewComponent } from './review/review.component';
import { provideHttpClient } from '@angular/common/http';
import { NoModuleFoundComponent } from './no-module-found/no-module-found.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { OurTeamComponent } from './our-team/our-team.component'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    TopDestinationComponent,
    ContactUsComponent,
    AboutUsComponent,
    MapsComponent,
    AddressComponent,
    ContactDetailsComponent,
    RegisterComponent,
    LoginComponent,
    BlogsComponent,
    TourPackagesComponent,
    ReviewComponent,
    NoModuleFoundComponent,
    BlogPageComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routes,
    HttpClientModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
