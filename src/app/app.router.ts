//import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NoModuleFoundComponent } from './no-module-found/no-module-found.component';
import { BlogPageComponent } from './blog-page/blog-page.component';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    {path: 'contact', component: ContactUsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'blog', component: BlogsComponent},
    {path: 'blog-page', component: BlogPageComponent},
    {path: '**', component: NoModuleFoundComponent},
];

export const routes = RouterModule.forRoot(router);