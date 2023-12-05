import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{FormsModule} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import { MenuComponent } from './menu/menu.component';
import{MatMenuModule} from '@angular/material/menu';
import{MatToolbarModule} from '@angular/material/toolbar';
import { GridComponent } from './grid/grid.component';
import{MatGridListModule} from '@angular/material/grid-list';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { InputComponent } from './input/input.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule} from '@angular/material/dialog';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator'
@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    MenuComponent,
    GridComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatDividerModule,MatListModule,MatMenuModule,MatToolbarModule,MatCardModule,
    AppRoutingModule,MatSidenavModule,FormsModule,MatIconModule,MatButtonToggleModule,MatGridListModule,MatExpansionModule,
    MatTabsModule,MatStepperModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatAutocompleteModule,
    MatCheckboxModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatTooltipModule,MatDialogModule
    ,MatTableModule,MatSortModule,MatPaginatorModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
