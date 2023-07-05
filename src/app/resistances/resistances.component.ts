import { Component } from '@angular/core';
import { Resistance } from './resistance.model';

@Component({
  selector: 'app-resistances',
  templateUrl: './resistances.component.html',
  styleUrls: ['./resistances.component.css']
})
export class ResistancesComponent {
    bandColors = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'gray',
        'white'
    ];
    toleranceColors = [
        'gold',
        'silver'
    ];
    currentResistance: Resistance = {
        firstBand: 'black',
        secondBand: 'black',
        thirdBand: 'black',
        tolerance: 'gold'
    }

    resistanceList: Resistance[] = []

    getResistanceValues({firstBand, secondBand, thirdBand, tolerance}: Resistance): Resistance {
        console.log({firstBand, secondBand, thirdBand, tolerance});
        console.log(this.bandColors.indexOf(firstBand));
        const value = parseInt(`${this.bandColors.indexOf(firstBand)}${this.bandColors.indexOf(secondBand)}`) * parseInt(`1${'0'.repeat(this.bandColors.indexOf(thirdBand))}`)
        const diference =  (value * (tolerance === 'gold' ? 0.05: 0.1));
        return  {
            firstBand,
            secondBand,
            thirdBand,
            tolerance,
            value,
            min: value - diference,
            max: value + diference
        };
    }


    addResistance() {
        this.resistanceList.push({...this.currentResistance});
        this.currentResistance = {
            firstBand: 'black',
            secondBand: 'black',
            thirdBand: 'black',
            tolerance: 'gold'
        }
    }
}
