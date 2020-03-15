import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './page/student/student.component';
import { InformationComponent } from './page/information/information.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './page/login/login.component';
import { ProductComponent } from './page/product/product.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';
import { SingupComponent } from './page/singup/singup.component'
import { CategoryComponent } from './page/category/category.component';
import { format } from 'url';





const routes: Routes = [
  {
    path: "student",
    component: StudentComponent

  },
  {
    path: "information",
    component: InformationComponent

  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "product",
    component: ProductComponent

  },
  {
    path: "category",
    component: CategoryComponent

  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "singup",
    component: SingupComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
