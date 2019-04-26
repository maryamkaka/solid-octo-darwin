export interface IGene
{
	Orientation: IOrientation;
	Height: IHeight;
	Color: string;
	Head1?: string;
	Head2: string;
	Head3?: string;
	Torso1: string;
	Torso2?: string;
	Appendage1?: string;
	Appendage2?: string;
	Appendage3?: string;
	Appendage4?: string;
	Appendage5?: string;
	Appendage6?: string;
	Appendage7?: string;
}

export type IOrientation = 'Horizontal' | 'Vertical';
export type IHeight = 'Short' | 'Tall';

export class Gene implements IGene
{
	protected readonly _orientation: IOrientation;
	protected readonly _height: IHeight;
	protected readonly _color: string;
	protected readonly _head1: string;
	protected readonly _head2: string;
	protected readonly _head3: string;
	protected readonly _torso1: string;
	protected readonly _torso2: string;
	protected readonly _appendage1: string;
	protected readonly _appendage2: string;
	protected readonly _appendage3: string;
	protected readonly _appendage4: string;
	protected readonly _appendage5: string;
	protected readonly _appendage6: string;
	protected readonly _appendage7: string;
	constructor(orientation?: IOrientation, height?: IHeight, color?: string)
	{

	}
}
