import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutes } from './routes/admin.routing';
import { LoginComponent } from './components/login/login.component';

//cấu hình route
const routes: Routes = [
  { path: "productList", component: ProductListComponent },
  { path: "productDetail/:id", component: ProductDetailComponent },
  { path: "login", component: LoginComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminRoutes,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
