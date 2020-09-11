import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SceenHeadingComponent } from './sceen-heading/sceen-heading.component';
import { TableComponent } from './table/table.component';
import { MatTabsModule,MatSelectModule,MatCheckboxModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SceenHeadingComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
