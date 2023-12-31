import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CinemaComponent } from "./cinema/cinema.component";
import { ResistancesComponent } from "./resistances/resistances.component";
import { DistanceComponent } from "./distance/distance.component";
import { PizzaComponent } from "./pizza/pizza.component";

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
    },
    {
        path: 'pizzas',
        component: PizzaComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}