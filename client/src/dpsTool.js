import React, { useState, useEffect, useCallback } from 'react';
import { calcEffectiveStrLvl } from './formulas/effectiveStrLvl';
import { calcEffectiveAttLvl } from './formulas/effectiveAttLvl';
import { calcHitChance } from './formulas/accuracy';
import { calcMaxHit } from './formulas/maxHit';
import { calcMaxAttRoll } from './formulas/maxAttRoll';
import { calcMaxDefRoll } from './formulas/maxDefRoll';
import { calcTotalBonuses } from './formulas/totalBonuses';
import { calcAttSpeed } from './formulas/attSpeed';

import { checkUndead } from './checkGear/checkUndead';
import { checkDragon } from './checkGear/checkDragon';
import { checkDemon } from './checkGear/checkDemon';
import { checkTurothKurask } from './checkGear/checkTurothKurask';
import { checkSlayerHelm } from './checkGear/checkSlayerHelm';
import { checkSlayerHelmImbued } from './checkGear/checkSlayerHelmImbued';
import { checkVoid } from './checkGear/checkVoid';
import { checkSalve } from './checkGear/checkSalve';
import { checkDHCB } from './checkGear/checkDHCB';
import { checkDHL } from './checkGear/checkDHL'; 
import { checkArclight } from './checkGear/checkArclight';
import { checkTbow } from './checkGear/checkTbow';
import { checkLBB } from './checkGear/checkLBB';
import { checkObbySet } from './checkGear/checkObbySet';
import { checkObbyWep } from './checkGear/checkObbyWep';
import { checkObbyNeck } from './checkGear/checkObbyNeck';
import { checkSmokeStaff } from './checkGear/checkSmokeStaff';
import { checkTomeOfFire } from './checkGear/checkTomeOfFire';

import { LvlInputs }  from './dpsComponents/LvlInputs';
import { OutputComparison } from './dpsComponents/OutputComparison';
import { SelectMonster } from './dpsComponents/SelectMonster';
import { SlayerCheck } from './dpsComponents/SlayerCheck'
import { DWHSpec } from './dpsComponents/DWHSpec';
import { DisplayStats } from './dpsComponents/DisplayStats';
import { StatBoosters } from './dpsComponents/StatBoosters';
import { CopySet } from './dpsComponents/CopySet';
import { PasteSet } from './dpsComponents/PasteSet';
import { ClearSet } from './dpsComponents/ClearSet';
import { SelectSpell } from './dpsComponents/SelectEquipment/SelectSpell';
import { SelectWeapon } from './dpsComponents/SelectEquipment/SelectWeapon';
import { SelectAttackStyle } from './dpsComponents/SelectEquipment/SelectAttackStyle';
import { SelectHelm } from './dpsComponents/SelectEquipment/SelectHelm';
import { SelectShield } from './dpsComponents/SelectEquipment/SelectShield';
import { SelectBody } from './dpsComponents/SelectEquipment/SelectBody';
import { SelectLeg } from './dpsComponents/SelectEquipment/SelectLeg';
import { SelectBoot } from './dpsComponents/SelectEquipment/SelectBoot';
import { SelectCape } from './dpsComponents/SelectEquipment/SelectCape';
import { SelectGlove } from './dpsComponents/SelectEquipment/SelectGlove';
import { SelectNeck } from './dpsComponents/SelectEquipment/SelectNeck';
import { SelectRing } from './dpsComponents/SelectEquipment/SelectRing';
import { SelectAmmo } from './dpsComponents/SelectEquipment/SelectAmmo';
const fetch = require('node-fetch');

export default function DpsTool() {

	// equipmentAPI is an array of routes for each piece of equipement and monsters
	const equipmentAPI = [
		'/api/weapons',
		'/api/shields',
		'/api/helmets',
		'/api/chests',
		'/api/legs',
		'/api/boots',
		'/api/capes',
		'/api/gloves',
		'/api/necklaces',
		'/api/rings',
		'/api/ammos',
		'/api/monsters',
	];

	// equipmentList is an object where each property represents an equipment piece
	// corresponding value is an array of objects that contains every single corresponding equipment piece in the game
	const [equipmentList, setEquipmentList] = useState({
		weapon: null,
		shield: null,
		helm: null,
		body: null,
		leg: null,
		boot: null,
		cape: null,
		glove: null,
		neck: null,
		ring: null,
		ammo: null,
	});

	// equippedGear & equippedGear2 are objects that will contain the CURRENTLY equipped item(object) for each slot
	const [equippedGear, setEquippedGear] = useState({
		weapon: null,
		shield: null,
		helm: null,
		body: null,
		leg: null,
		boot: null,
		cape: null,
		glove: null,
		neck: null,
		ring: null,
		ammo: null,
	});

	const [equippedGear2, setEquippedGear2] = useState({
		weapon: null,
		shield: null,
		helm: null,
		body: null,
		leg: null,
		boot: null,
		cape: null,
		glove: null,
		neck: null,
		ring: null,
		ammo: null,
	});

	const [equippedGearCopy, setEquippedGearCopy] = useState({
		weapon: null,
		shield: null,
		helm: null,
		body: null,
		leg: null,
		boot: null,
		cape: null,
		glove: null,
		neck: null,
		ring: null,
		ammo: null,
	})

	// monstersList is an array of objects where each object represents a monster
	const [monstersList, setMonstersList] = useState(null);

	// currentMonster is the object that represents the currently selected monster
	const [currentMonster, setCurrentMonster] = useState(null);

	// currentMonsterCopy is a copy of the base stats of the currentMonster
	const [currentMonsterCopy, setCurrentMonsterCopy] = useState(null);

	// userStats & userStats2 contains the current useful stats of the player for future DPS calculations
	const [userStats, setUserStats] = useState({
		attackLvl: '',
		strengthLvl: '',
		rangeLvl: '',
		magicLvl: '',
		equipmentAttBonus: {
			stab: null,
			slash: null,
			crush: null,
			magic: null,
			range: null,
		},
		equipmentMeleeStrBonus: null,
		equipmentRangeStrBonus: null,
		equipmentMagicDmgBonus: null,
		attPotion: 0,
		attPrayer: 0,
		strPotion: 0,
		strPrayer: 0,
		rngPotion: 0,
		rngPrayer: 0,
		magPotion: 0,
		magPrayer: 0,
		attType: null,
		attStyle: null,
		isRange: false,
		isMagic: false,
		chosenSpell: null,
		isSlayerTask: false,
		isMonsterUndead: false,
		isMonsterDragon: false,
		isMonsterDemon: false,
		isMonsterTurothKurask: false,
	});

	const [userStats2, setUserStats2] = useState({
		attackLvl: '',
		strengthLvl: '',
		rangeLvl: '',
		magicLvl: '',
		equipmentAttBonus: {
			stab: null,
			slash: null,
			crush: null,
			magic: null,
			range: null,
		},
		equipmentMeleeStrBonus: null,
		equipmentRangeStrBonus: null,
		equipmentMagicDmgBonus: null,
		attPotion: 0,
		attPrayer: 0,
		strPotion: 0,
		strPrayer: 0,
		rngPotion: 0,
		rngPrayer: 0,
		magPotion: 0,
		magPrayer: 0,
		attType: null,
		attStyle: null,
		isRange: false,
		isMagic: false,
		chosenSpell: null,
		isSlayerTask: false,
		isMonsterUndead: false,
		isMonsterDragon: false,
		isMonsterDemon: false,
		isMonsterTurothKurask: false,
	});

	const [checkBonus, setCheckBonus] = useState({
		isSlayerHelm: false,
		isSlayerHelmImbued: false,
		isVoidMelee: false,
		isVoidRange: false,
		isVoidRangeElite: false,
		isVoidMage: false,
		isVoidMageElite: false,
		isSalve: false,
		isSalveE: false,
		isSalveI: false,
		isSalveEI: false,
		isDHCB: false,
		isDHL: false,
		isArclight: false,
		isTbow: false,
		isLBB: false,
		isObbySet: false,
		isObbyWep: false,
		isObbyNeck: false,
		isSmokeStaff: false,
		isTomeOfFire: false,
	})

	const [checkBonus2, setCheckBonus2] = useState({
		isSlayerHelm: false,
		isSlayerHelmImbued: false,
		isVoidMelee: false,
		isVoidRange: false,
		isVoidRangeElite: false,
		isVoidMage: false,
		isVoidMageElite: false,
		isSalve: false,
		isSalveE: false,
		isSalveI: false,
		isSalveEI: false,
		isDHCB: false,
		isDHL: false,
		isArclight: false,
		isTbow: false,
		isLBB: false,
		isObbySet: false,
		isObbyWep: false,
		isObbyNeck: false,
		isSmokeStaff: false,
		isTomeOfFire: false,
	})

	// finalOutput & finalOutput2 contains useful information for calculating DPS
	const [finalOutput, setFinalOutput] = useState({
		maxHit: null,
		accuracy: null,
	});

	const [finalOutput2, setFinalOutput2] = useState({
		maxHit: null,
		accuracy: null,
	});

	// dps & dps2 contains the final dps 
	const [dps, setDps] = useState(null);

	const [dps2, setDps2] = useState(null);

	// for the initial fetch of all equipment lists and monster list
	// WOULD LIKE TO DO SOMETHING ABOUT THE LOADING TIME
	// NEED TO HAVE A CATCH ERROR AS I RANDOMELY GET ERRORS AT POSITION 0?
	useEffect(() => {
		async function fetchData() {
			await Promise.all(equipmentAPI.map(equipment => fetch(equipment)))
				.then(responses => Promise.all(responses.map(response => response.json())))
				.then(lists => {
					setEquipmentList({
						weapon: lists[0],
						shield: lists[1],
						helm: lists[2],
						body: lists[3],
						leg: lists[4],
						boot: lists[5],
						cape: lists[6],
						glove: lists[7],
						neck: lists[8],
						ring: lists[9],
						ammo: lists[10],
					})
					setMonstersList(lists[11])
				})
				.catch(err => console.log(err))
		}
		fetchData();
	}, []);

	// for updating userStats everytime there is an equipment change (equippedGear)
	// refer to ./formulas/totalBonuses for the function
	useEffect(() => {
		// for set 1
		const totalBonusObject = calcTotalBonuses(equippedGear);

		// updating all attack + other bonuses
		setUserStats((userStats) => ({
			...userStats,
			equipmentAttBonus: {
				stab: totalBonusObject.totalStabAttBonus,
				slash: totalBonusObject.totalSlashAttBonus,
				crush: totalBonusObject.totalCrushAttBonus,
				magic: totalBonusObject.totalMagicAttBonus,
				range: totalBonusObject.totalRangeAttBonus,
			},
			equipmentMeleeStrBonus: totalBonusObject.totalMeleeStrBonus,
			equipmentRangeStrBonus: totalBonusObject.totalRangeStrBonus,
			equipmentMagicDmgBonus: totalBonusObject.totalMagicDmgBonus,
		}));

		checkUndead(currentMonster, userStats, setUserStats);
		checkDragon(currentMonster, userStats, setUserStats);
		checkDemon(currentMonster, userStats, setUserStats);
		checkTurothKurask(currentMonster, userStats, setUserStats);

		checkSlayerHelm(equippedGear, checkBonus, setCheckBonus);
		checkSlayerHelmImbued(equippedGear, checkBonus, setCheckBonus);
		checkVoid(equippedGear, checkBonus, setCheckBonus);
		checkSalve(equippedGear, checkBonus, setCheckBonus);
		checkDHCB(equippedGear, checkBonus, setCheckBonus);
		checkDHL(equippedGear, checkBonus, setCheckBonus);
		checkArclight(equippedGear, checkBonus, setCheckBonus);
		checkTbow(equippedGear, checkBonus, setCheckBonus);
		checkLBB(equippedGear, checkBonus, setCheckBonus);
		checkObbySet(equippedGear, checkBonus, setCheckBonus);
		checkObbyWep(equippedGear, checkBonus, setCheckBonus);
		checkObbyNeck(equippedGear, checkBonus, setCheckBonus);
		checkSmokeStaff(equippedGear, setCheckBonus);
		checkTomeOfFire(equippedGear, setCheckBonus);

		// for set 2
		const totalBonusObject2 = calcTotalBonuses(equippedGear2);			

		// updating all attack + other bonuses
		setUserStats2((userStats2) => ({
			...userStats2,
			equipmentAttBonus: {
				stab: totalBonusObject2.totalStabAttBonus,
				slash: totalBonusObject2.totalSlashAttBonus,
				crush: totalBonusObject2.totalCrushAttBonus,
				magic: totalBonusObject2.totalMagicAttBonus,
				range: totalBonusObject2.totalRangeAttBonus,
			},
			equipmentMeleeStrBonus: totalBonusObject2.totalMeleeStrBonus,
			equipmentRangeStrBonus: totalBonusObject2.totalRangeStrBonus,
			equipmentMagicDmgBonus: totalBonusObject.totalMagicDmgBonus,
		}));

		checkUndead(currentMonster, userStats2, setUserStats2);
		checkDragon(currentMonster, userStats2, setUserStats2);
		checkDemon(currentMonster, userStats2, setUserStats2);
		checkTurothKurask(currentMonster, userStats2, setUserStats2);

		checkSlayerHelm(equippedGear2, checkBonus2, setCheckBonus2);
		checkSlayerHelmImbued(equippedGear2, checkBonus2, setCheckBonus2);
		checkVoid(equippedGear2, checkBonus2, setCheckBonus2);
		checkSalve(equippedGear2, checkBonus2, setCheckBonus2);
		checkDHCB(equippedGear2, checkBonus2, setCheckBonus2);
		checkDHL(equippedGear2, checkBonus2, setCheckBonus2);
		checkArclight(equippedGear2, checkBonus2, setCheckBonus2);
		checkTbow(equippedGear2, checkBonus2, setCheckBonus2);
		checkLBB(equippedGear2, checkBonus2, setCheckBonus2);
		checkObbySet(equippedGear2, checkBonus2, setCheckBonus2);
		checkObbyWep(equippedGear2, checkBonus2, setCheckBonus2);
		checkObbyNeck(equippedGear2, checkBonus2, setCheckBonus2);
		checkSmokeStaff(equippedGear2, setCheckBonus2);
		checkTomeOfFire(equippedGear2, setCheckBonus2);

	}, [equippedGear, equippedGear2, currentMonster])

	// for updating finalOutput everytime there is a change in userStats or currentMonster
	// calls multiple formulas from ./formulas
	useEffect(() => {
		// for set 1
		const effectiveAttLvl = calcEffectiveAttLvl(userStats, checkBonus);
		const effectiveStrLvl = calcEffectiveStrLvl(userStats, checkBonus);
		const maxAttRoll = calcMaxAttRoll(userStats, effectiveAttLvl, equippedGear, checkBonus, currentMonster);
		const maxDefRoll = calcMaxDefRoll(userStats, currentMonster);

		const maxHit = calcMaxHit(userStats, effectiveStrLvl, equippedGear, checkBonus, currentMonster);
		const accuracy = calcHitChance(maxAttRoll, maxDefRoll);

		setFinalOutput({
			maxHit: maxHit,
			accuracy: accuracy,
		});

		// for set 2
		const effectiveAttLvl2 = calcEffectiveAttLvl(userStats2, checkBonus2);
		const effectiveStrLvl2 = calcEffectiveStrLvl(userStats2, checkBonus2);
		const maxAttRoll2 = calcMaxAttRoll(userStats2, effectiveAttLvl2, equippedGear2, checkBonus2);
		const maxDefRoll2 = calcMaxDefRoll(userStats2, currentMonster);
		
		const maxHit2 = calcMaxHit(userStats2, effectiveStrLvl2, equippedGear2, checkBonus2, currentMonster);
		const accuracy2 = calcHitChance(maxAttRoll2, maxDefRoll2);

		setFinalOutput2({
			maxHit: maxHit2,
			accuracy: accuracy2,
		});

		//console.log(equippedGear.weapon)

	}, [userStats, userStats2, currentMonster])


	// for updating dps whenever there is a change in finalOutput
	useEffect(() => {
		// for set 1
		const maxHit = finalOutput.maxHit;
		const accuracy = finalOutput.accuracy;
		const attSpeed = calcAttSpeed(equippedGear, userStats);

		const dps = (accuracy * (maxHit/2)) / (attSpeed*0.6);
		setDps(dps);

		// for set 2
		const maxHit2 = finalOutput2.maxHit;
		const accuracy2 = finalOutput2.accuracy;
		const attSpeed2 = calcAttSpeed(equippedGear2, userStats2);

		const dps2 = (accuracy2 * (maxHit2/2)) / (attSpeed2*0.6);
		setDps2(dps2);

		console.log(maxHit, accuracy, attSpeed, userStats.chosenSpell, equippedGear.weapon)

	}, [finalOutput, finalOutput2])

	// event handler for Lvl inputs
	// updating userStats whenever called
	const handleStatsChange = useCallback((e) => {
		e.persist();

		setUserStats(prevStats => ({
			...prevStats,
			[e.target.name]: parseFloat(e.target.value, 10),
		}));
		setUserStats2(prevStats => ({
			...prevStats,
			[e.target.name]: parseFloat(e.target.value, 10),
		}));
	}, [])

	// updates equippedGear whenever a new gear piece is chosen
	// function only renders when equipmentList changes (should only be once)
	const handleEquipmentChange = useCallback((equipType, id) => {
		const itemID = id;
		const equipmentType = equipType;

		equipmentList[equipmentType].forEach((item) => {
			if (item.id == itemID) {
				setEquippedGear((equippedGear) => ({
					...equippedGear,
					[equipmentType]: item,
				}));
			}
		})
	}, [equipmentList])

	const handleEquipmentChange2 = useCallback((equipType, id) => {
		const itemID = id;
		const equipmentType = equipType;

		equipmentList[equipmentType].forEach((item) => {
			if (item.id == itemID) {
				setEquippedGear2((equippedGear2) => ({
					...equippedGear2,
					[equipmentType]: item,
				}));
			}
		})
	}, [equipmentList])



	return (
		<div className="grid-container">
			<div className="title">
				<h1>OSRS DPS Calculator</h1>
			</div>

			<div className="second-row-container">
				<div className="stat-block-container">
					<h2 className="stat-title">Stats & Boosts</h2>
					<LvlInputs handleStatsChange={handleStatsChange} userStats={userStats}/>
					<StatBoosters handleStatsChange={handleStatsChange} userStats={userStats}/>
				</div>

				<div className="monster-and-outputs-container">
					<h2 className="final-title">Armor Set 1 vs Armor Set 2</h2>
					<OutputComparison finalOutput={finalOutput} finalOutput2={finalOutput2} dps={dps} dps2={dps2} equippedGear={equippedGear} equippedGear2={equippedGear2} userStats={userStats} userStats2={userStats2} currentMonster={currentMonster}/>
					<SelectMonster monstersList={monstersList} setCurrentMonster={setCurrentMonster} setCurrentMonsterCopy={setCurrentMonsterCopy}/>
					<div className="misc-row">
						<SlayerCheck userStats={userStats} setUserStats={setUserStats} userStats2={userStats2} setUserStats2={setUserStats2}/>
						<DWHSpec currentMonster={currentMonster} setCurrentMonster={setCurrentMonster} currentMonsterCopy={currentMonsterCopy}/>
					</div>
				</div>
			</div>
			
			<div className="equipment-select">
				<div className="armor-set1-title"><h2>Armor Set 1</h2></div>
				<DisplayStats equippedGear={equippedGear}/>
				<SelectSpell userStats={userStats} setUserStats={setUserStats}/>
				<SelectAttackStyle equippedGear={equippedGear} userStats={userStats} setUserStats={setUserStats}/>
				<div className="buttons-section">
					<CopySet setEquippedGearCopy={setEquippedGearCopy} equippedGear={equippedGear}/>
					<PasteSet equippedGearCopy={equippedGearCopy} setEquippedGear={setEquippedGear}/>
					<ClearSet setEquippedGear={setEquippedGear} setUserStats={setUserStats} handleEquipmentChange={handleEquipmentChange} equippedGear={equippedGear}/>
				</div>
				<SelectWeapon handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear} setEquippedGear={setEquippedGear}/>
				<SelectHelm handleEquipmentChange={handleEquipmentChange}  equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectShield handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectBody handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectLeg handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectBoot handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectCape handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectGlove handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectNeck handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectAmmo handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
				<SelectRing handleEquipmentChange={handleEquipmentChange} equipmentList={equipmentList} equippedGear={equippedGear}/>
			</div>

			<div className="equipment-select2">
				<div className="armor-set2-title"><h2>Armor Set 2</h2></div>
				<DisplayStats equippedGear={equippedGear2}/>
				<SelectSpell userStats={userStats2} setUserStats={setUserStats2}/>
				<SelectAttackStyle equippedGear={equippedGear2} userStats={userStats2} setUserStats={setUserStats2}/>
				<div className="buttons-section">
					<CopySet setEquippedGearCopy={setEquippedGearCopy} equippedGear={equippedGear2}/>
					<PasteSet equippedGearCopy={equippedGearCopy} setEquippedGear={setEquippedGear2}/>
					<ClearSet setEquippedGear={setEquippedGear2} setUserStats={setUserStats2}/>
				</div>
				<SelectWeapon handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectHelm handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectShield handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectBody handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectLeg handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectBoot handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectCape handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectGlove handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectNeck handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectAmmo handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
				<SelectRing handleEquipmentChange={handleEquipmentChange2} equipmentList={equipmentList} equippedGear={equippedGear2}/>
			</div>	
		</div>
	)
}

// db.monsters.update({ id: 2044 },
// {
// 	$set: {
// 		name: 'Zulrah (Tanzanite)'
// 	}
// })

// db.monsters.remove({
// 	name: 'Zulrah (green)'
// })

// db.weapons.remove({
// 	id: 20554
// })

// db.weapons.insert({
// 	"stats": {
//             "attStab": 0,
//             "attSlash": 0,
//             "attCrush": 0,
//             "attMagic": 0,
//             "attRanged": 0,
//             "defStab": 0,
//             "defSlash": 0,
//             "defCrush": 0,
//             "defMagic": 0,
//             "defRanged": 0,
//             "strBonus": 0,
//             "rngStrBonus": 0,
//             "magBonus": 0,
//             "prayBonus": 0,
//             "slot": "weapon"
//         },
//         "stances": {
//             "stance0": {
//                 "cmbStyle": "punch",
//                 "attType": "crush",
//                 "attStyle": "accurate"
//             },
//             "stance1": {
//                 "cmbStyle": "kick",
//                 "attType": "crush",
//                 "attStyle": "aggressive"
//             },
//             "stance2": {
//                 "cmbStyle": "block",
//                 "attType": "crush",
//                 "attStyle": "defensive"
//             }
//         },
//         "id": 100000,
//         "name": "None",
//         "equipableByPlayer": true,
//         "equipableWeapon": true,
//         "attSpeed": 4,
//         "wepType": "unarmed",
// })