import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/Models/MyContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit{
  allContacts:MyContact[]=[]
  searchKey:string=''
  constructor(private api:ApiService){}
  ngOnInit():void{
   this.getAllcontact()
  }
  getAllcontact(){
    this.api.getAllContacts()
    .subscribe((result:any)=>{
    this.allContacts=result})
  }
  deleteContact(contactId:any){
    this.api.removeContact(contactId)
    .subscribe(
      (result:any)=>{
        console.log(result)
        this.getAllcontact()
      }
    )
  }
}
