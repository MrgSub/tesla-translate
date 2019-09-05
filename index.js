
const ColorCodes = {
	PBSB: 'Sierra Black',
	PMNG: 'Midnight Silver Metallic',
	PPSB: 'Deep Blue Metallic',
	PPSW: 'Shasta Pearl White Multi-Coat',
	PPMR: 'Muir Red Multi-Coat',
	PPSR: 'Signature Red',
	PMMR: 'Multi-Coat Red',
	PMMB: 'Monterey Blue Metallic',
	PMBL: 'Obsidian Black Multi-Coat',
	PMAB: 'Anza Brown Metallic',
	PBCW: 'Catalina White',
	PMSG: 'Sequoia Green Metallic',
	PMSS: 'San Simeon Silver Metallic',
	PMTG: 'Dolphin Grey Metallic',
	PPTI: 'Titanium Metallic'
};

const WheelCodes = {
	WT22: 'Unknown',
	W32P: '20" Performance Wheels',
	W38B: '18" Aero Wheels',
	W39B: '19" Sport Wheels',
	WT20: '20" Silver Slipstream Wheels',
	WTAS: '19" Silver Slipstream Wheels',
	WTDS: '19" Grey Slipstream Wheels',
	WTSG: '21" Turbine Wheels',
	WTSP: '21" Turbine Wheels',
	WTSS: '21" Turbine Wheels',
	WTTB: '19" Cyclone Wheels',
	WTW4: '19" Winter Tire Set',
	WTW5: '21" Winter Tire Set	',
	WTX1: '19" Michelin Primacy Tire Upgrade'
};

const ModelCodes = {
	MDLS: 'Model S',
	MS03: 'Model S',
	MS04: 'Model S',
	MDLX: 'Model X',
	MDL3: 'Model 3'
};

const ModelShortCodes = {
	MDLS: 'ms',
	MS03: 'ms',
	MS04: 'ms',
	MDLX: 'mx',
	MDL3: 'm3'
};

// Finds and returns the color name
const findColor = data => {
	let array = data.split(',');
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (ColorCodes.hasOwnProperty(element)) {
			return ColorCodes[element];
		}
	}
};

// Finds and returns the color code
const findColorCode = data => {
	let array = data.split(',');
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (ColorCodes.hasOwnProperty(element)) {
			return element;
		}
	}
};

// Finds and returns the wheels model
const findWheels = data => {
	let array = data.split(',');
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (WheelCodes.hasOwnProperty(element)) {
			return element;
		}
	}
};


// Returns a model short code, useful for Tesla's image compositor
const findModelCode = data => {
	let array = data.split(',');
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (ModelShortCodes.hasOwnProperty(element)) {
			return ModelShortCodes[element];
		}
	}
};

export default {
	findColor,
	findModel,
	findModelCode,
	findColorCode,
	findWheels
};
