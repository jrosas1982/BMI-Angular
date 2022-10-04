import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad=25;
  peso=60;  
  altura = 170;
  sexo = 'Masculino';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // el peso es subido desde el event binding (clic) = " peso = peso +/- 1

  subirEdad(){
    this.edad = this.edad + 1;
    console.log(this.edad);
  }
  restarEdad(){
        this.edad = this.edad - 1;
  }
cambiarAltura(event :any){
this.altura = event.target.value;
}
masculino(){
  this.sexo = 'Masculino';
}
femenino(){
  this.sexo = 'Femenino';
}
calcularBMI()
{
  //calculos
  const BMI = this.peso / Math.pow(this.altura/100,2);
  
this.router.navigate(['/resultado', BMI.toFixed(1)]);
}
}
