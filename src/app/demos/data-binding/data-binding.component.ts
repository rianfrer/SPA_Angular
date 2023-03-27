import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {

  public contadorClique: number = 0;

  public aumentarContador(){
    this.contadorClique ++;
  }

  public nome: string = "";

  perdaDeFoco(event: any){
    this.nome = event.target.value;
  }

}
