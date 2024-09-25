import { Component } from '@angular/core';
import { shoes } from '../data/datas';
import { CardShoe } from '../modelli/model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  
  shoes: CardShoe[] = shoes;
  newShoes: CardShoe[] = [];
  isDitailVisibile: boolean = false;
  isCardVisibile: boolean = true;
  isFormVisibile: boolean = false;
  adds = 'add'
  shoe:any = {};
  form:NgForm;

  newShoe:any = {}

  showDetail(shoe:any):void{
    this.shoe = shoe
    this.isDitailVisibile = true
    this.isCardVisibile = false
  }

  goBack():void{
    this.isDitailVisibile = false
    this.isCardVisibile = true
  }

  isAvailable(shoe:any):any{
    return {
      'available': shoe.disponibile,
      'not-available': !shoe.disponibile,
    }
  }



  isBarrato(shoe:any):any{
    return {
      'text-decoration': shoe.disponibile? 'none' : 'line-through',
    }
  }

  deleteShoe(shoe:any):void{
    if(confirm('Sei sicuro di voler cancellare?')){
      this.shoes = this.shoes.filter(s => s.id !== shoe.id)
    }
  }

  showForm(){
    this.isFormVisibile = true
    this.isCardVisibile = false
  }

  onSubmit(form:NgForm) {
    this.newShoe = {
      id: this.shoes.length + 1,
       nome: form.value.name,
       descrizione: form.value.descrizione,
       costo: form.value.costo,
       disponibile: form.value.disp,
       immagine: form.value.image,
       taglie: form.value.taglie,
       colori:form.value.color, 
     }
      console.log(this.newShoe)
      this.shoes.push(this.newShoe)
      this.isFormVisibile = false
      this.isCardVisibile = true
      console.log(this.shoes)
  }

 

}
