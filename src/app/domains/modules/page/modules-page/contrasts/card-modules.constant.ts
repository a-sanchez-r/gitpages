import { faChartSimple, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { CardModelModule } from '@shared/models/card.model';

export const CARD_INFO: CardModelModule[] = [
  {
    title: 'Calculo Parenteral',
    description: 'Monitorea y registra tu peso de manera sencilla.',
    icon: faChartSimple,
    link: '/dashboard/modules/calclulo-parenteral'
  },
  {
    title: 'Calculadores IMC',
    description: 'Administra y controla el acceso de tus usuarios.',
    icon: faCalculator,
    link: '/dashboard/modules/imc'
  },
];
