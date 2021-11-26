export interface IDataElements {
	[key: string]: string[];
	PART1: string[];
	PART2: string[];
	PART3: string[];
	PART4: string[];
	PART5: string[];
	PART6: string[];
	PART7: string[];
	PART8: string[];
}

export const dataElements: IDataElements = {
	PART1: [
		'De factor mens',
		'De kerncompetentie',
		'Het proces',
		'Het management',
		'De communicatie',
		'Human capital',
		'De organisatieontwikkeling',
		'De missie',
		'Kennismanagement',
		'De eerste aanzet',
	],
	PART2: [
		'moet meerwaarde leveren bij',
		'stelt eisen aan',
		'dient te faciliteren bij',
		'is uitgangspunt bij',
		'is onlosmakelijk verbonden met',
		'schept voorwaarden voor',
		'dient te focussen op',
		'stuurt',
		'hangt nauw samen met',
		'moet een opstap bieden voor',
	],
	PART3: [
		'de implementatie van',
		'de terugkoppeling van',
		'het aftimmeren van',
		'het aansturen van',
		'de ontwikkeling van',
		'de integratie van',
		'de inventarisatie van',
		'de definitie van',
		'de insteek van',
	],
	PART4: [
		'complexe',
		'optimale',
		'eenduidige',
		'onderling afhankelijke',
		'van structurele',
		'resultaatgerichte',
		'efficiënte',
		'consistente',
	],
	PART5: [
		'supply chain processen',
		'business architecture',
		'mijlpalen',
		'targets',
		'business units',
		'organisatie-onderdelen',
		"scenario's",
		'best practices',
		'business models',
		'conceptplannen',
	],
	PART6: [
		'waarbij het belang van',
		'waarbij de feedback van',
		'waarbij het kader voor',
		'waarbij afstemming met',
		'waarbij de structuur van',
		'waarbij input van',
		'waarbij commitment van',
		'waarbij klankborden met',
	],
	PART7: [
		'de taskforce',
		'strategisch beleid',
		'de communicatie',
		'de werkgroepen',
		'de markt',
		'de stakeholders',
		'new business development',
		'de systeemintegratie',
		'het management',
		'de projectorganisatie',
	],
	PART8: [
		'moet uitkristalliseren.',
		'voorop staat.',
		'wordt aangestuurd.',
		'toegevoegde waarde levert.',
		'voldoende draagvlak heeft.',
		'doorslaggevend is.',
		'cruciaal is.',
		'moet worden besloten.',
		'afgestemd moet worden.',
		'oplossingsgericht is.',
	],
};

export interface IAuthorElements {
	[key: string]: string[];
	names: string[];
}

export const authorElements: IAuthorElements = {
	names: [
		'Jaap Delfs',
		'Hans van der Velde',
		'Klaas Mox',
		'Henrik de Koning',
		'Han Goens',
		'Ryan Koster',
		'Tom Hiniker',
		'Thijs Lust',
		'Stijn de Capper',
		'Valentin Timmermans',
		'Herman de Groot',
		'Hennie Weith',
		'Marinus Kelder',
		'Gilbert Beckers',
		'Thijs Jacobus',
		'Kees Asselin',
		'Han de Foorman',
		'Stefan Slotten',
	],
};
