import { Component, OnInit } from '@angular/core';
import { catsService } from '../services/catsService';
import { HttpResponse } from '../services/HttpResponse';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private cats:catsService) { }
urlAPi='https://catfact.ninja/'

fact:string=''
public catsList=[]
  ngOnInit(): void {this.getCats(1)}

  public getCats(n:number):void{
 this.cats.getCats(n)
  .subscribe((response:HttpResponse)=>{
    if (response.status===200){
      this.catsList=response.body.data !=null?response.body.data:[]
    }
    else {console.log("PB requête cats")}
  })
}
public getFact():void{
  this.cats.getFact()
  .subscribe((response:HttpResponse)=>{
    if (response.status===200){
      this.fact=response.body.fact
      Swal.fire({title:"Did you know that??",text:this.fact})
    }
    else console.log("PB requête fact")
  })
}

}
//CREER DOUBLE LIEN SUR CATS PAGE PRINCIPAL SUR FACTS LIST FACTS DANS LE FOOTER CREER LIEN CONTACT AVEC FONT AWESOME