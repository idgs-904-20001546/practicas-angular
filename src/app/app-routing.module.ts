import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinemaComponent } from "./cinema/cinema.component";
import { ResistancesComponent } from "./resistances/resistances.component";
import { DistanceComponent } from "./distance/distance.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/cinema'
    },
    {
        path: 'cinema',
        component: CinemaComponent
    },
    {
        path: 'resistances',
        component: ResistancesComponent
    },
    {
        path: 'distance',
        component: DistanceComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}