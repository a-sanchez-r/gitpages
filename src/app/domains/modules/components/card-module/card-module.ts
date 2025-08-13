import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import { CardModelModule } from '@shared/models/card.model';

@Component({
  selector: 'app-card-module',
  imports: [FontAwesomeModule, RouterLink, NgFor],
  templateUrl: './card-module.html',
  styleUrl: './card-module.css'
})
export class CardModule implements OnInit {
  faWeightScale = faWeightScale;

  @Input({required: true}) cardInfo!: CardModelModule[];

  ngOnInit() {
    initFlowbite();
  }

}
