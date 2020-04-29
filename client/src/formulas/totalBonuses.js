export function calcTotalBonuses(equippedGear) {
	// creating array of every equipment type name (helm, body, legs, etc..)
	const equipmentTypeList = Object.getOwnPropertyNames(equippedGear);

	// using reduce to find the total sum of each type of bonus (stab att, slash att, melee str, etc..)
	let stabAttBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.attStab : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let slashAttBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.attSlash : null)
		.reduce((acc, curVal) => {
			return acc + curVal
		});
	let crushAttBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.attCrush : null)
		.reduce((acc, curVal) => {
			return acc + curVal
		});
	let magicAttBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.attMagic : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let rangeAttBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.attRanged : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});

	let stabDefBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.defStab : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let slashDefBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.defSlash : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let crushDefBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.defCrush : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let magicDefBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.defMagic : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let rangedDefBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.defRanged : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});

	let meleeStrBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.strBonus : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let rangeStrBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.rngStrBonus : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let magicDmgBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.magBonus : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});
	let prayerBonus = equipmentTypeList.map((equipment) => equippedGear[equipment] ? equippedGear[equipment].stats.prayBonus : null)
		.reduce((acc, curVal) => {
			return acc + curVal;
		});


	return {
		totalStabAttBonus: stabAttBonus,
		totalSlashAttBonus: slashAttBonus,
		totalCrushAttBonus: crushAttBonus,
		totalMagicAttBonus: magicAttBonus,
		totalRangeAttBonus: rangeAttBonus,
		totalStabDefBonus: stabDefBonus,
		totalSlashDefBonus: slashDefBonus,
		totalCrushDefBonus: crushDefBonus,
		totalMagicDefBonus: magicDefBonus,
		totalRangeDefBonus: rangedDefBonus,
		totalMeleeStrBonus: meleeStrBonus,
		totalRangeStrBonus: rangeStrBonus,
		totalMagicDmgBonus: magicDmgBonus,
		totalPrayerBonus: prayerBonus,
	}

}