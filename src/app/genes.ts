export interface IGene
{
	class: string;
	speed: number;
	str: number;
	hp: number;
	mgc: number;
	dfn: number;
}

export const HeadsList: IGene[] = [
	{
		class: 'Head1',
		hp: 2,
		dfn: 2,
		mgc: 5,
		speed: 0,
		str: 1,
	},
	{
		class: 'Head2',
		hp: 2,
		dfn: 2,
		mgc: 6,
		speed: 0,
		str: 1,
	},
	{
		class: 'Head3',
		hp: 2,
		dfn: 2,
		mgc: 4,
		speed: 0,
		str: 1,
	},
	{
		class: 'Head4',
		hp: 2,
		dfn: 2,
		mgc: 5,
		speed: 0,
		str: 1,
	},
];
export const BodiesList: IGene[] = [
	{
		class: 'Torso1',
		hp: 20,
		dfn: 7,
		mgc: 0,
		speed: -1,
		str: 2,
	},
	{
		class: 'Torso2',
		hp: 25,
		dfn: 7,
		mgc: 0,
		speed: -2,
		str: 3,
	},
	{
		class: 'Torso3',
		hp: 25,
		dfn: 7,
		mgc: 0,
		speed: -2,
		str: 3,
	},
	{
		class: 'Torso4',
		hp: 30,
		dfn: 7,
		mgc: 0,
		speed: -3,
		str: 4,
	},
];
export const ArmsList: IGene[] = [
	{
		class: 'Arm1',
		hp: 5,
		dfn: 3,
		mgc: 0,
		speed: -1,
		str: 2,
	},
	{
		class: 'Arm2',
		hp: 5,
		dfn: 3,
		mgc: 0,
		speed: -2,
		str: 3,
	},
	{
		class: 'Arm3',
		hp: 5,
		dfn: 3,
		mgc: 0,
		speed: -1,
		str: 2,
	},
	{
		class: 'Arm4',
		hp: 5,
		dfn: 3,
		mgc: 0,
		speed: -2,
		str: 3,
	},
];
export const LegsList: IGene[] = [
	{
		class: 'Leg1',
		hp: 2,
		dfn: 2,
		mgc: 0,
		speed: 5,
		str: 1,
	},
	{
		class: 'Leg2',
		hp: 2,
		dfn: 2,
		mgc: 0,
		speed: 4,
		str: 2,
	},
	{
		class: 'Leg3',
		hp: 2,
		dfn: 2,
		mgc: 0,
		speed: 5,
		str: 1,
	},
	{
		class: 'Leg4',
		hp: 2,
		dfn: 2,
		mgc: 0,
		speed: 4,
		str: 1,
	},
];
export const TailsList: IGene[] = [
	{
		class: 'Tail1',
		hp: 1,
		dfn: 1,
		mgc: 3,
		speed: 0,
		str: 1,
	},
	{
		class: 'Tail2',
		hp: 1,
		dfn: 1,
		mgc: 2,
		speed: 1,
		str: 0,
	},
	{
		class: 'Tail3',
		hp: 1,
		dfn: 1,
		mgc: 3,
		speed: 1,
		str: 0,
	},
	{
		class: 'Tail4',
		hp: 1,
		dfn: 1,
		mgc: 2,
		speed: 0,
		str: 1,
	},
];
export const WingsList: IGene[] = [
	{
		class: 'Wing1',
		hp: 5,
		dfn: 2,
		mgc: 0,
		speed: 3,
		str: 2,
	},
	{
		class: 'Wing2',
		hp: 5,
		dfn: 3,
		mgc: 0,
		speed: 2,
		str: 2,
	},
	{
		class: 'Wing3',
		hp: 5,
		dfn: 2,
		mgc: 0,
		speed: 3,
		str: 2,
	},
	{
		class: 'Wing4',
		hp: 5,
		dfn: 3,
		mgc: 0,
		speed: 2,
		str: 2,
	},
];
