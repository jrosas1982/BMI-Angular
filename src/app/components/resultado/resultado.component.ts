import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(this.bmi);
  }


  ngOnInit(): void {
    this.getResultado();

  }
  getResultado() {
    if (this.bmi >= 25) {
      this.resultado = "Exceso de peso";
      this.interpretacion = "BMI superior al normal"
    }else if(this.bmi >= 18.5){
      this.resultado = "Normal"
      this.interpretacion = "Peso corporal normal "
    }
    else{
      this.resultado = 'Bajo peso corporal' ;
      this.interpretacion = 'Se recomienda que meriende algo masl'; 
    }
  }


}
