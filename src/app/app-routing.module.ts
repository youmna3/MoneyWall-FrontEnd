import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './layouts/aboutpage/aboutpage.component';
import { BalancepageComponent } from './layouts/balancepage/balancepage.component';
import { PaymentpageComponent } from './layouts/paymentpage/paymentpage.component';
import { AddAssetsComponent } from './layouts/add-assets/add-assets.component';
import { AssetsComponent } from './layouts/myassets/assets.component';
import { MytransactionComponent } from './layouts/mytransactions/mytransaction.component';
import { LoginComponent } from './layouts/login/login.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { RegisterComponent } from './layouts/register/register.component';
import { ContactpageComponent } from './layouts/contactpage/contactpage.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { ServicesComponent } from './layouts/services/services.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'balance', component: BalancepageComponent },
  { path: 'payment', component: PaymentpageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'assets/add-asset', component: AddAssetsComponent },
  { path: 'transactions', component: MytransactionComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'home/services', component: ServicesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
