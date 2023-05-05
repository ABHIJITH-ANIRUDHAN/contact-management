import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [//empty strings meanign local 4200 //add contact means local4200/add contact
  {path:'',component:AllContactsComponent},{path:'add-contact',component:AddContactComponent},{path:'edit-contact/:id',component:EditContactComponent},{path:'view-contact/:id',component:ViewContactComponent},{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
