import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { AlertImc } from '@imc/components/alert/alert';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-page-imc',
  imports: [FormsModule, AlertImc, NgFor, NgIf, NgClass],
  templateUrl: './page-imc.html',
  styleUrl: './page-imc.css'
})
export class ImcPage implements OnInit {

  cdr = inject(ChangeDetectorRef);

  historialIMC: { 
    paciente: string, 
    type: string, 
    imc: number,
    peso: number,
    talla: number
  }[] = [];
  data = {
    paciente: '',
    peso: 0,
    talla: 0.0,
    imc: 0
  };
  showAlert = false;
  alert = {
    title: 'Resultado del IMC',
    message: '',
    type: '' // 'blue', 'red', 'green', 'yellow'
  }

  ngOnInit(): void {
    initFlowbite();
  }

  calcularIMC() {
    
    const { paciente, peso, talla } = this.data;

    if (!peso || !talla) {
      console.error('Por favor ingresa peso y talla válidos');
      return;
    }

    // Convertir talla a metros
    const alturaMetros = talla / 100;

    // Calcular IMC
    const imc = peso / (alturaMetros * alturaMetros);

    if (this.historialIMC.length >= 5) {
      this.historialIMC.shift();
    }

    this.setAlert(imc, paciente);
  }

  setAlert(imc: number, paciente: string) {
    
    const imcFloat = parseFloat(imc.toFixed(2));

    const ranges = [
      { min: -Infinity, max: 18.5, type: 'blue',   text: 'Estás por debajo del peso ideal.' },
      { min: 18.5, max: 24.9, type: 'green',  text: 'Estás en el rango de peso normal.' },
      { min: 25, max: 29.9, type: 'yellow', text: 'Tienes sobrepeso.' },
      { min: 29.9, max: Infinity, type: 'red', text: 'Tienes obesidad.' }
    ] as const;

    const found = ranges.find(r => imc >= r.min && imc < r.max);

    if (found) {
      this.alert.type = found.type;
      this.alert.message = `El IMC de ${this.data.paciente} es ${imcFloat}. ${found.text}`;
    }

    // Agregar al final
    this.historialIMC.push({ 
      paciente, 
      type: this.alert.type, 
      peso: this.data.peso, 
      talla: this.data.talla, 
      imc: parseFloat(imc.toFixed(2)) 
    });

    this.showAlert = true;
    this.resetForm();
    this.cdr.detectChanges();

    setTimeout(() => {
      this.showAlert = false;
      this.cdr.detectChanges();
    }, 3000);
  }

  eliminarHistorial(index: number) {
    this.historialIMC.splice(index, 1);
  }

  resetForm() {
    this.data = {
      paciente: '',
      peso: 0,
      talla: 0.0,
      imc: 0
    };
  }

  enviarDatos(item: any) {
    console.log('Datos enviados:', item);
  }

}
