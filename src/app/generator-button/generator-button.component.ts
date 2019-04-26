import { Component, OnInit } from '@angular/core';
import { IGeneSequence, Gene } from '../gene-sequence';

@Component({
	selector: 'app-generator-button',
	templateUrl: './generator-button.component.html',
	styleUrls: ['./generator-button.component.sass']
})
export class GeneratorButtonComponent implements OnInit
{

	protected _gene: IGeneSequence;
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
