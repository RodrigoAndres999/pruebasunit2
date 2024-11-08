import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = "";
  age: number | null = null;
  errorMessage: string = "";
  successMessage: string = "";

  constructor() {}

  sumar(a:number, b:number){
    return a+b;
  }

  convertirMayuscula(texto:string){
    return texto.toUpperCase();
  }

  onSubmit(){
    this.onValidate();
    if(!this.errorMessage){
      this.successMessage = "Formulario Validado Correctamente";
    }

  }
  onValidate(){
    if(!this.nombre || this.nombre.trim() === ""){
      this.errorMessage = "Debe rellenar el campo nombre";
    }
    else if(!this.age || this.age <=14){
      this.errorMessage = "La edad debe ser mayor a 14 años";
    }
    else{
      this.errorMessage = "";
    }
  }

}
