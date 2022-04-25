import { HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catsService } from '../services/catsService';
import { HttpResponse } from '../services/HttpResponse';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  constructor(private http:HttpClient,private facts:catsService) { }

  ngOnInit(): void {this.getFacts()
  }
FactsList=[]
public getFacts():void{
  this.facts.getFacts()
  .subscribe((response:HttpResponse)=>{
    if (response.status===200){
      this.FactsList=response.body.data
    }
    else console.log('PB requete Facts')
  })

}
}
