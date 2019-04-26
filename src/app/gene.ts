export interface IGene
{
	Orientation: IOrientation;
	Height: IHeight;
	Color: string;
	Head: string;
	Torso1: string;
	Torso2?: string;
	Arm1?: string;
	Arm2?: string;
	Arm3?: string;
	Arm4?: string;
	Leg1?: string;
	Leg2?: string;
	Wing?: string;
	Tail?: string;
}

export type IOrientation = 'Horizontal' | 'Vertical';
export type IHeight = 'Short' | 'Tall';

export class Gene implements IGene
{
	protected _orientation: IOrientation;
	protected _height: IHeight;
	protected _color: string;
	protected _head1: string;
	protected _head: string;
	protected _head3: string;
	protected _body1: string;
	protected _body2: string;
	protected _arm1: string;
	protected _arm2: string;
	protected _arm3: string;
	protected _arm4: string;
	protected _leg1: string;
	protected _leg2: string;
	protected _wing: string;
	protected _tail: string;

	protected _headsList: string[] = ['Head1', 'Head2', 'Head3', 'Head4'];
	protected _bodiesList: string[] = ['Torso1', 'Torso2', 'Torso3', 'Torso4'];
	protected _armsList: string[] = ['Arm1', 'Arm2', 'Arm3', 'Arm4'];
	protected _legsList: string[] = ['Leg1', 'Leg2', 'Leg3', 'Leg4'];
	protected _tailsList: string[] = ['Tail1', 'Tail2', 'Tail3', 'Tail4'];
	protected _wingsList: string[] = ['Wing1', 'Wing2', 'Wing3', 'Wing4'];

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
		this._head = this._headsList[Math.floor(Math.random() * this._headsList.length)];
	}

	private generateRandomTorso(): void
	{
		this._body1 = this._bodiesList[Math.floor(Math.random() * this._bodiesList.length)];
		if (this._height === 'Tall')
		{
			this._body2 = this._bodiesList[Math.floor(Math.random() * this._bodiesList.length)];
		}
	}

	private generateRandomAppendages(): void
	{
		if (this._orientation === 'Vertical')
		{
			this.generateRandomArms();
			this.generateRandomLegs();
		} else
		{
			this.generateRandomFrontLegs();
			this.generateRandomBackLegs();
			this.generateRandomTail();
			this.generateRandomWings();
		}
	}

	private generateRandomArms(): void
	{
		const armsRemaining = ['1', '2', '3', '4'];
		const numArms = Math.floor(Math.random() * (armsRemaining.length + 1));

		for (let i = 0; i < numArms; i++)
		{
			const index = Math.floor(Math.random() * armsRemaining.length);
			const armNum = armsRemaining[index];
			this[`_arm${armNum}`] = this._armsList[Math.floor(Math.random() * this._armsList.length)];
			armsRemaining.splice(index, 1);
		}
	}

	private generateRandomLegs(): void
	{
		if (Math.random() < 0.75)
		{
			this._leg1 = this._legsList[Math.floor(Math.random() * this._legsList.length)];
		}
	}

	private generateRandomFrontLegs(): void
	{
		if (Math.random() < 0.66)
		{
			this._leg1 = this._legsList[Math.floor(Math.random() * this._legsList.length)];
		}
	}

	private generateRandomBackLegs(): void
	{
		if (Math.random() < 0.75)
		{
			this._leg2 = this._legsList[Math.floor(Math.random() * this._legsList.length)];
		}
	}

	private generateRandomTail(): void
	{
		if (Math.random() < 0.5)
		{
			this._tail = this._tailsList[Math.floor(Math.random() * this._tailsList.length)];
		}
	}

	private generateRandomWings(): void
	{
		if (Math.random() < 0.5)
		{
			this._wing = this._wingsList[Math.floor(Math.random() * this._wingsList.length)];
		}
	}

	public get Orientation() { return this._orientation; }
	public get Height() { return this._height; }
	public get Color() { return this._color; }
	public get Head() { return this._head; }
	public get Torso1() { return this._body1; }
	public get Torso2() { return this._body2; }
	public get Arm1() { return this._arm1; }
	public get Arm2() { return this._arm2; }
	public get Arm3() { return this._arm3; }
	public get Arm4() { return this._arm4; }
	public get Leg1() { return this._leg1; }
	public get Leg2() { return this._leg2; }
	public get Wing() { return this._wing; }
	public get Tail() { return this._tail; }
}
