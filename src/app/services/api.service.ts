import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
    getAllContacts(){
      return this.http.get('http://localhost:3000/contacts')
    }
    viewContact(contactId:any){
      return this.http.get('http://localhost:3000/contacts/'+contactId)
    }
    getGroup(groupId:string){
      return this.http.get('http://localhost:3000/groups/'+groupId)
    }
    getAllGroups(){
      return this.http.get('http://localhost:3000/groups')
    }
    //to add / store contact details to server
    addContact(contact:any){
      return this.http.post('http://localhost:3000/contacts',contact)
    }
    //api call to delete stored contact
    removeContact(id:any){
      return this.http.delete('http://localhost:3000/contacts/'+id)
    }
    //api call to update an exsiting contact from server
    updateContact(id:any,contact:any){
       return this.http.put('http://localhost:3000/contacts/'+id,contact)
    }
}
