import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-alert-imc',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class AlertImc implements OnInit {

  @Input({required: true}) title: string = '';
  @Input({required: true}) message: string = '';
  @Input({required: true}) type: string = '';

  ngOnInit(): void {
    initFlowbite();
  }
}
