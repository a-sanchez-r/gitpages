import { Component } from '@angular/core';
import { CardModule } from "@modules/components/card-module/card-module";
import { CARD_INFO } from "./contrasts/card-modules.constant";

@Component({
  selector: 'app-modules-page',
  imports: [CardModule],
  templateUrl: './modules-page.html',
  styleUrl: './modules-page.css'
})
export class ModulesPage {
  cardInfo = CARD_INFO;
}
