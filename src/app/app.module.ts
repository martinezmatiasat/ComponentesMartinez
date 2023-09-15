import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CardBarilocheComponent } from './card-bariloche/card-bariloche.component';
import { CardIguazuComponent } from './card-iguazu/card-iguazu.component';
import { CardMardelComponent } from './card-mardel/card-mardel.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentComponent,
    CardBarilocheComponent,
    CardIguazuComponent,
    CardMardelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
