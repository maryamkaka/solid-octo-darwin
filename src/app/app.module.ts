import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatureComponent } from './creature/creature.component';
import { GeneratorButtonComponent } from './generator-button/generator-button.component';

@NgModule({
	declarations: [
		AppComponent,
		GeneratorButtonComponent,
		CreatureComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
