import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {


  Highcharts: typeof Highcharts = Highcharts; // required

  chartOptions: Highcharts.Options = {
    chart: {
      width: 1100
    },
    xAxis: {
      categories: [
        'capacite Sensorielles',
        'capacite Attentionnelles',
        'Memoire',
        'Capacites Communicatives',
        'Raisonnement',
        'Capacites Spatiales Et Temporelles',
        'capacites D apprentissage',
        'competences Socio Emotionnelle',
        'manifestation Oropharyngees',
        'Autres ( > 18 ans)'
      ]
    },
    series: [{
      name: 'PARENT',
      data: [1, 2, 3, 1, 2, 3, 5, 8, 4, 7],
      type: 'line'
    },
    {
      name: 'PROFESSIONAL',
      data: [3, 5, 8, 4, 7, 1, 2, 3, 1, 2],
      type: 'line'
    },
    {
      name: 'MEDECIN',
      data: [3, 1, 2, 3, 1, 2, 2, 3, 4, 3],
      type: 'line'
    }
    ]
  };


}


// series: [{
//   name: 'Installation',
//   data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
// }, {
//   name: 'Manufacturing',
//   data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
// }, {
//   name: 'Sales & Distribution',
//   data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
// }, {
//   name: 'Project Development',
//   data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
// }, {
//   name: 'Other',
//   data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
// }],
