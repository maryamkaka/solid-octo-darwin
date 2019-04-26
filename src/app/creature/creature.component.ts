import { Component, OnInit } from '@angular/core';
import { IGene } from '../gene';

@Component({
	selector: 'app-creature',
	templateUrl: './creature.component.html',
	styleUrls: ['./creature.component.scss']
})
export class CreatureComponent implements OnInit {

	protected gene = {
		Color: "", 
		Height:'Tall', 
		Orientation: "Vertical",

		Head2: "icon-square", 
		Body1: "icon-square", 
		Body2: "icon-square",
		Arm1: "icon-circle",  
		Arm2: "icon-circle",  
		Arm3: "icon-circle",  
		Arm4: "icon-circle",
		Leg1: "icon-more-colours"
	}
	constructor() { }

	ngOnInit() {
	}
}
