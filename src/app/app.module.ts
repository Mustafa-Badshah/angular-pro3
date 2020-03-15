import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './page/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { InformationComponent } from './page/information/information.component';
import { AddComponent } from './shared/add/add.component';
import { DeleteComponent } from './shared/delete/delete.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductComponent } from './page/product/product.component';
import { AddproductComponent } from './shared/addproduct/addproduct.component';
import { DelproductComponent } from './shared/delproduct/delproduct.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SingupComponent } from './page/singup/singup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './page/category/category.component';
import { AddcategoryComponent } from './shared/addcategory/addcategory.component';
import { EditprofileComponent } from './shared/editprofile/editprofile.component';
import { ChppasswordComponent } from './shared/chppassword/chppassword.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    InformationComponent,
    AddComponent,
    DeleteComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    AddproductComponent,
    DelproductComponent,
    ProfileComponent,
    SingupComponent,
    CategoryComponent,
    AddcategoryComponent,
    EditprofileComponent,
    ChppasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
