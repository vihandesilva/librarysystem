import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { BurrowItemComponent } from './burrow-item/burrow-item.component';
import { ReportComponent } from './report/report.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BookService } from './book.service';
import { DVDService } from './dvd.service';
import { DatetimeService } from './datetime.service';
import { WestminsterLibraryManager } from './WestminsterLibraryManager';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    AddItemComponent,
    DeleteItemComponent,
    BurrowItemComponent,
    ReportComponent,
    ListItemComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"add-item",
       component:AddItemComponent},

       {path:"burrow-item",
       component:BurrowItemComponent},

       {path:"list-item",
       component:ListItemComponent},

       {path:"report",
       component:ReportComponent},

      {path:"intro",
        component:IntroComponent}
    ])
  ],
  providers: [BookService, DVDService, DatetimeService, WestminsterLibraryManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
