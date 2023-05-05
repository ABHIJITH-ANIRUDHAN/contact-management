import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyContact } from 'src/Models/MyContacts';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactId:any
  contact:MyContact={}
  groupId:string=""
  groupName=""
  constructor(private api:ApiService,private acivatedRoute:ActivatedRoute){}
   ngOnInit(): void {
     this.acivatedRoute.params
     .subscribe((data:any)=>{console.log(data['id']);
     this.contactId=data['id']
     })
     this.api.viewContact(this.contactId)
     .subscribe((result:any)=>{console.log(result);
      this.contact=result
      this.groupId=result.groupId
      console.log(this.groupId);
      //api call to get details of a particular group
      this.api.getGroup(this.groupId)
      .subscribe((result:any)=>{console.log(result);
        this.groupName=result.name
       })
   })
   }
}