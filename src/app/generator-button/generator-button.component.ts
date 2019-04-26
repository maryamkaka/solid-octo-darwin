import { Component, OnInit } from '@angular/core';
import { IGene, Gene } from '../gene';

@Component({
	selector: 'app-generator-button',
	templateUrl: './generator-button.component.html',
	styleUrls: ['./generator-button.component.sass']
})
export class GeneratorButtonComponent implements OnInit
{

	protected _gene: IGene;
	constructor() { }

	ngOnInit()
	{
	}

	public click()
	{
		this._gene = new Gene();
		console.log(this._gene);
	}

}
