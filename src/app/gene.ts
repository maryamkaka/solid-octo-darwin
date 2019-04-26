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
	protected _orientation: IOrientation;
	protected _height: IHeight;
	protected _color: string;
	protected _head1: string;
	protected _head2: string;
	protected _head3: string;
	protected _torso1: string;
	protected _torso2: string;
	protected _appendage1: string;
	protected _appendage2: string;
	protected _appendage3: string;
	protected _appendage4: string;
	protected _appendage5: string;
	protected _appendage6: string;
	protected _appendage7: string;
	constructor(orientation?: IOrientation, height?: IHeight, color?: string)
	{
		this.generateGene(orientation, height, color);

	}

	private generateGene(
		orientation = this.generateRandomOrientation(),
		height = this.generateRandomHeight(),
		color = this.generateRandomColor())
	{
		this._orientation = orientation;
		this._height = height;
		this._color = color;
		this.generateRandomHead();
		this.generateRandomTorso();
		this.generateRandomAppendages();
	}

	private generateRandomOrientation(): IOrientation
	{
		return (Math.random() > 0.5) ? 'Horizontal' : 'Vertical';
	}

	private generateRandomHeight(): IHeight
	{
		return (Math.random() > 0.5) ? 'Short' : 'Tall';
	}

	private generateRandomColor(): string
	{
		return '';
	}

	private generateRandomHead(): void
	{
		const numHeads = Math.floor(Math.random() * 3) + 1;
		if (numHeads > 1)
		{
			this._head1 = 'head1';
		}
		if (numHeads > 2)
		{
			this._head3 = 'head3';
		}
		this._head2 = 'head2';
	}

	private generateRandomTorso(): void
	{
		this._torso1 = 'First Torso';
		if (this._height === 'Tall')
		{
			this._torso2 = 'secondTorso';
		}
	}

	private generateRandomAppendages(): void
	{
		const numAppendages = Math.floor(Math.random() * 7);
		for (let i = 0; i < numAppendages; i++)
		{
			this[`_appendage${i + 1}`] = `New Appendage ${i + 1}`;
		}
	}

	public get Orientation() { return this._orientation; }
	public get Height() { return this._height; }
	public get Color() { return this._color; }
	public get Head1() { return this._head1; }
	public get Head2() { return this._head2; }
	public get Head3() { return this._head3; }
	public get Torso1() { return this._torso1; }
	public get Torso2() { return this._torso2; }
	public get Appendage1() { return this._appendage1; }
	public get Appendage2() { return this._appendage2; }
	public get Appendage3() { return this._appendage3; }
	public get Appendage4() { return this._appendage4; }
	public get Appendage5() { return this._appendage5; }
	public get Appendage6() { return this._appendage6; }
	public get Appendage7() { return this._appendage7; }
}
