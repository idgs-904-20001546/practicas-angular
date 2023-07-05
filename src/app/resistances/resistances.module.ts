import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistancesComponent } from './resistances.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ResistancesComponent],
    imports: [CommonModule, MatGridListModule, MatInputModule, MatSelectModule, MatButtonModule, MatTableModule, FormsModule],
    exports: [ResistancesComponent],
})
export class ResistancesModule {}
