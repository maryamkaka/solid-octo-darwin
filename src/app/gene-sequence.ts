import { HeadsList, BodiesList, ArmsList, LegsList, TailsList, WingsList, IGene } from './genes';

export interface IGeneSequence
{
	Orientation: IOrientation;
	Height: IHeight;
	Color: string;
	Strength: number;
	Health: number;
	Speed: number;
	Defense: number;
	Magic: number;
	Head: IGene;
	Body1: IGene;
	Body2?: IGene;
	Arm1?: IGene;
	Arm2?: IGene;
	Arm3?: IGene;
	Arm4?: IGene;
	Leg1?: IGene;
	Leg2?: IGene;
	Wing?: IGene;
	Tail?: IGene;
}

export type IOrientation = 'Horizontal' | 'Vertical';
export type IHeight = 'Short' | 'Tall';

export class Gene implements IGeneSequence
{
	protected _orientation: IOrientation;
	protected _height: IHeight;
	protected _color: string;
	protected _head: IGene;
	protected _body1: IGene;
	protected _body2: IGene;
	protected _arm1: IGene;
	protected _arm2: IGene;
	protected _arm3: IGene;
	protected _arm4: IGene;
	protected _leg1: IGene;
	protected _leg2: IGene;
	protected _wing: IGene;
	protected _tail: IGene;

	protected _baseStrength: number;
	protected _baseDefense: number;
	protected _baseSpeed: number;
	protected _baseMagic: number;
	protected _baseHealth: number;

	constructor(orientation?: IOrientation, height?: IHeight, color?: string)
	{
		this.generateGene(orientation, height, color);
		this._baseStrength = 10;
		this._baseDefense = 10;
		this._baseSpeed = 10;
		this._baseMagic = 10;
		this._baseHealth = 10;
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
		this._head = HeadsList[Math.floor(Math.random() * HeadsList.length)];
	}

	private generateRandomTorso(): void
	{
		this._body1 = BodiesList[Math.floor(Math.random() * BodiesList.length)];
		if (this._height === 'Tall')
		{
			this._body2 = BodiesList[Math.floor(Math.random() * BodiesList.length)];
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
			this[`_arm${armNum}`] = ArmsList[Math.floor(Math.random() * ArmsList.length)];
			armsRemaining.splice(index, 1);
		}
	}

	private generateRandomLegs(): void
	{
		if (Math.random() < 0.75)
		{
			this._leg1 = LegsList[Math.floor(Math.random() * LegsList.length)];
		}
	}

	private generateRandomFrontLegs(): void
	{
		if (Math.random() < 0.66)
		{
			this._leg1 = LegsList[Math.floor(Math.random() * LegsList.length)];
		}
	}

	private generateRandomBackLegs(): void
	{
		if (Math.random() < 0.75)
		{
			this._leg2 = LegsList[Math.floor(Math.random() * LegsList.length)];
		}
	}

	private generateRandomTail(): void
	{
		if (Math.random() < 0.5)
		{
			this._tail = TailsList[Math.floor(Math.random() * TailsList.length)];
		}
	}

	private generateRandomWings(): void
	{
		if (Math.random() < 0.5)
		{
			this._wing = WingsList[Math.floor(Math.random() * WingsList.length)];
		}
	}

	public get Orientation() { return this._orientation; }
	public get Height() { return this._height; }
	public get Color() { return this._color; }
	public get Head() { return this._head; }
	public get Body1() { return this._body1; }
	public get Body2() { return this._body2; }
	public get Arm1() { return this._arm1; }
	public get Arm2() { return this._arm2; }
	public get Arm3() { return this._arm3; }
	public get Arm4() { return this._arm4; }
	public get Leg1() { return this._leg1; }
	public get Leg2() { return this._leg2; }
	public get Wing() { return this._wing; }
	public get Tail() { return this._tail; }

	public get Strength()
	{
		return this.getGenes().map(gene => gene.str).reduce(this.reducer, this._baseStrength);
	}

	public get Speed()
	{
		return this.getGenes().map(gene => gene.speed).reduce(this.reducer, this._baseSpeed);
	}

	public get Health()
	{
		return this.getGenes().map(gene => gene.hp).reduce(this.reducer, this._baseHealth);
	}

	public get Magic()
	{
		return this.getGenes().map(gene => gene.mgc).reduce(this.reducer, this._baseMagic);
	}

	public get Defense()
	{
		return this.getGenes().map(gene => gene.dfn).reduce(this.reducer, this._baseDefense);
	}

	private getGenes(): IGene[]
	{
		const limbs = [];
		if (this._head) { limbs.push(this._head); }
		if (this._body1) { limbs.push(this._body1); }
		if (this._body2) { limbs.push(this._body2); }
		if (this._arm1) { limbs.push(this._arm1); }
		if (this._arm1) { limbs.push(this._arm1); }
		if (this._arm2) { limbs.push(this._arm2); }
		if (this._arm3) { limbs.push(this._arm3); }
		if (this._arm4) { limbs.push(this._arm4); }
		if (this._leg1) { limbs.push(this._leg1); }
		if (this._leg2) { limbs.push(this._leg2); }
		if (this._tail) { limbs.push(this._tail); }
		if (this._wing) { limbs.push(this._wing); }
		return limbs;
	}

	private reducer = (acc, curr) => acc + curr;
}
