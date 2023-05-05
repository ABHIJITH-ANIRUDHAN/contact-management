import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/Models/MyContacts';
import { MyGroup } from 'src/Models/MyGroups';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
   contact:MyContact={}
   allGroups:MyGroup[]=[]
   constructor(private api:ApiService,private router:Router){
     this.contact.groupId="Select a catogory"
   }
   ngOnInit():void{
    this.api.getAllGroups()
    .subscribe((result:any)=>{console.log(result);
      this.allGroups=result
  })
  }
  addContact(){
    this.api.addContact(this.contact)
    .subscribe(
      (result)=>{
        console.log(result);
        alert("New contact added successfully")
        this.router.navigateByUrl('')
      }
    )
  }
 }

