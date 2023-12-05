import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [{
  path:'expansion',component:ExpansionPanelComponent
},{
  path:'card',component:CardComponent
},{
  path:'tabs',component:TabsComponent
},

{
  path:'stepper',component:StepperComponent
},
{
  path:'input',component:InputComponent
},
  {
    path:'sidenav',component:SideNavBarComponent
  },{
    path:'grid',component:GridComponent
  },
  {
    path:'menu',component:MenuComponent
  },{
    path:'table',component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
