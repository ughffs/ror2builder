import { Item } from '../types/app.type';

//Common Items
const syringe = '/images/Common/syringe.png';
const bear = '/images/Common/bear.png';
const monstertooth = '/images/Common/monstertooth.png';
const lensMakersGlasses = '/images/Common/glasses.png';
const goat = '/images/Common/goat.png';
const fungus = '/images/Common/fungus.png';
const crowbar = '/images/Common/crowbar.png';
const tritip = '/images/Common/tritip.png';
const warbanner = '/images/Common/warbanner.png';
const slug = '/images/Common/slug.png';
const shield = '/images/Common/shield.png';
const medkit = '/images/Common/medkit.png';
const gasoline = '/images/Common/gasoline.png';
const stungrenade = '/images/Common/stunGrenade.png';
const firework = '/images/Common/firework.png';
const drink = '/images/Common/drink.png';
const backupMagazine = '/images/Common/backupMag.png';
const stickybomb = '/images/Common/stickyBomb.png';
const key = '/images/Common/key.png';
const armorRounds = '/images/Common/armorpierce.png';
const topazBrooch = '/images/Common/topaz.png';
const redCrystal = '/images/Common/focuscrys.png';
const freshMeat = '/images/Common/steak.png';
const armor = '/images/Common/armor.png';
const scrapWhite = '/images/Common/scrapWhite.png';

//Uncommon Items
const atgMissile = '/images/Uncommon/missile_mk.png';
const wisp = '/images/Uncommon/wisp.png';
const feather = '/images/Uncommon/feather.png';
const ukulele = '/images/Uncommon/ukulele.png';
const seed = '/images/Uncommon/seed.png';
const instinct = '/images/Uncommon/hat.png';
const whip = '/images/Uncommon/whip.png';
const stealthKit = '/images/Uncommon/phasing.png';
const scythe = '/images/Uncommon/scythe.png';
const cell = '/images/Uncommon/cell.png';
const infusion = '/images/Uncommon/infusion.png';
const bandolier = '/images/Uncommon/bandolier.png';
const berzerk = '/images/Uncommon/berzerk.png';
const buckler = '/images/Uncommon/buckler.png';
const iceRing = '/images/Uncommon/iceRing.png';
const fireRing = '/images/Uncommon/fireRing.png';
const bauble = '/images/Uncommon/bauble.png';
const quail = '/images/Uncommon/quail.png';
const guillotine = '/images/Uncommon/guillotine.png';
const warHorn = '/images/Uncommon/warHorn.png';
const daisy = '/images/Uncommon/healFlower.png';
const razorWire = '/images/Uncommon/razorHeadband.png';
const ghorsTome = '/images/Uncommon/goldBook.png';
const squidTurrent = '/images/Uncommon/squidTurret.png';
const deathMark = '/images/Uncommon/deathMark.png';
const scrapGreen = '/images/Uncommon/scrapGreen.png';

//Legendary Items
const behemoth = '/images/Legendary/behemoth.png';
const dagger = '/images/Legendary/dagger.png';
const ice = '/images/Legendary/ice.png';
const mask = '/images/Legendary/mask.png';
const cuffs = '/images/Legendary/cuffs.png';
const opinion = '/images/Legendary/opinion.png';
const coil = '/images/Legendary/tesla.png';
const clover = '/images/Legendary/clover.png';
const hook = '/images/Legendary/hook.png';
const alien = '/images/Legendary/alien.png';
const soul = '/images/Legendary/soul.png';
const dio = '/images/Legendary/dio.png'
const burner = '/images/Legendary/burner.png';
const headHunter = '/images/Legendary/headhunter.png';
const brain = '/images/Legendary/brain.png';
const horn = '/images/Legendary/horn.png';
const fullBarrier = '/images/Legendary/fullBarrier.png';
const hammer = '/images/Legendary/hammer.png';
const disc = '/images/Legendary/disc.png';
const deskPlant = '/images/Legendary/deskPlant.png';
const microbots = '/images/Legendary/microbot.png';
const scrapRed = '/images/Legendary/scrapRed.png';

//Boss Items
const knurl = '/images/Boss/knurl.png';
const qgland = '/images/Boss/qgland.png';
const halcyon = '/images/Boss/halcyon.png';
const littledisc = '/images/Boss/littledisc.png';
const pearl = '/images/Boss/pearl.png';
const shinypearl = '/images/Boss/shinypearl.png';
const genesis = '/images/Boss/genesis.png';
const artifactkey = '/images/Boss/artifactkey.png';
const magmatooth = '/images/Boss/magmatooth.png';
const spleen = '/images/Boss/spleen.png';
const miredurn = '/images/Boss/miredurn.png';
const scrapsyellow = '/images/Boss/scrapsyellow.png';

//Lunar Items
const sword = '/images/Lunar/sword.png';
const crown = '/images/Lunar/crown.png';
const transc = '/images/Lunar/transc.png';
const corpse = '/images/Lunar/corpse.png';
const fossil = '/images/Lunar/fossil.png';
const beads = '/images/Lunar/beads.png';
const convergence = '/images/Lunar/convergence.png';
const gouge = '/images/Lunar/gouge.png';
const grief = '/images/Lunar/grief.png';
const helfire = '/images/Lunar/helfire.png';
const strideheresy = '/images/Lunar/strideheresy.png';
const meteorite = '/images/Lunar/meteorite.png';
const purity = '/images/Lunar/purity.png';
const rachis = '/images/Lunar/rachis.png';
const spinel = '/images/Lunar/spinel.png';
const visionheresy = '/images/Lunar/visionheresy.png';

//Equipment
const backup = '/images/Equipment/backup.png';
const blackhole = '/images/Equipment/blackhole.png';
const blastshield = '/images/Equipment/blastshield.png';
const capacitor = '/images/Equipment/capacitor.png';
const crowdfund = '/images/Equipment/crowdfund.png';
const eccentric = '/images/Equipment/eccentric.png';
const egg = '/images/Equipment/egg.png';
const elephant = '/images/Equipment/elephant.png';
const fruit = '/images/Equipment/fruit.png';
const gorag = '/images/Equipment/gorag.png';
const hud = '/images/Equipment/hud.png';
const leech = '/images/Equipment/leech.png';
const milky = '/images/Equipment/milky.png';
const missile = '/images/Equipment/missile.png';
const preon = '/images/Equipment/preon.png';
const radar = '/images/Equipment/radar.png';
const recycler = '/images/Equipment/recycler.png';
const sawmerang = '/images/Equipment/sawmerang.png';
const voodoo = '/images/Equipment/voodoo.png';
const woodsprite = '/images/Equipment/woodsprite.png';


const GetItems = (): Item[] => {
    return (
        [
            //Common Items
            {
                id: 1,
                title: "Soldier's Syringee",
                description: 'Increase {"type":"offense", "value":"Attack Speed"} by {"type":"offense", "value":"15%"} {"type":"stacking", "value":"(+15% per stack)"}.',
                image: syringe,
                type: 'common',

            },
            {
                id: 2,
                title: 'Tougher Times',
                description: '{"type":"defense", "value":"+15%"} {"type":"stacking", "value":"(+15% per stack)"} per stack chance to {"type":"defense", "value":"block"} incoming damage. {"type":"misc", "value":"Unaffected by the luck."}',
                image: bear,
                type: 'common',

            },
            {
                id: 3,
                title: 'Monster Tooth',
                description: 'Killing an enemy spawns a {"type":"healing", "value":"Healing Orb"} that heals for {"type":"healing", "value":"8"} plus an additional {"type":"healing", "value":"2%"} {"type":"stacking", "value":"(+2% per stack)"} of your maximum health.',
                image: monstertooth,
                type: 'common',

            },
            {
                id: 4,
                title: "Lens-Maker's Glasses",
                description: 'Your attacks have a {"type":"offense", "value":"10%"} {"type":"stacking", "value":"(+10% per stack)"} chance to "{"type":"offense", "value":"Critically Strike"}", dealing {"type":"offense", "value":"double damage"}.',
                image: lensMakersGlasses,
                type: 'common',

            },
            {
                id: 5,
                title: "Paul's Goat Hoof",
                description: 'Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"14%"} {"type":"stacking", "value":"(+14% per stack)"}.',
                image: goat,
                type: 'common',

            },
            {
                id: 6,
                title: "Bustling Fungus",
                description: 'After standing still for {"type":"healing", "value":"2"} seconds create a zone that {"type":"healing", "value":"heals"} for {"type":"healing", "value":"4.5%"} {"type":"stacking", "value":"(+2.25% per stack)"} of your {"type":"healing", "value":"health"} every second to all allies within {"type":"healing", "value":"3m"} {"type":"stacking", "value":"(+1.5m per stack)"}.',
                image: fungus,
                type: 'common',

            },
            {
                id: 7,
                title: "Crowbar",
                description: 'Deal {"type":"offense", "value":"150%"} {"type":"stacking", "value":"(+30% per stack)"} damage to enemies above {"type":"offense", "value":"90% health"}.',
                image: crowbar,
                type: 'common',

            },
            {
                id: 8,
                title: "Tri-Tip Dagger",
                description: '{"type":"offense", "value":"15%"} {"type":"stacking", "value":"(+15% per stack)"} chance to {"type":"offense", "value":"bleed"} an enemy for {"type":"offense", "value":"240%"} base damage.',
                image: tritip,
                type: 'common',

            },
            {
                id: 9,
                title: "Warbanner",
                description: 'On {"type":"misc", "value":"level up"} or starting the {"type":"misc", "value":"Teleporter event"}, drop a banner that strengthens all allies within {"type":"misc", "value":"16m"} {"type":"stacking", "value":"(+8m per stack)"}. <br /> Raise {"type":"offense", "value":"attack"} and {"type":"misc", "value":"movement speed"} by {"type":"offense", "value":"30%"}.',
                image: warbanner,
                type: 'common',

            },
            {
                id: 10,
                title: "Cautious Slug",
                description: 'Increases {"type":"healing", "value":"base health regeneration"} by {"type":"healing", "value":"+4 hp/s"} {"type":"misc", "value":"(+4 hp/s per stack)"} while outside of combat.',
                image: slug,
                type: 'common',

            },
            {
                id: 11,
                title: "Personal Shield ",
                description: 'Gain a {"type":"defense", "value":"shield"} equal to {"type":"defense", "value":"8%"} {"type":"stacking", "value":"(+8% per stack)"} of your maximum health. Recharges outside of danger.',
                image: shield,
                type: 'common',

            },
            {
                id: 12,
                title: "Medkit",
                description: '2 seconds after getting hurt, {"type":"healing", "value":"heal"} for {"type":"healing", "value":"20"} plus an additional {"type":"healing", "value":"5%"} {"type":"stacking", "value":"(+5% per stack)"} of {"type":"healing", "value":"maximum health"}.',
                image: medkit,
                type: 'common',

            },
            {
                id: 13,
                title: "Gasoline",
                description: 'Killing an enemy {"type":"offense", "value":"ignites"} all enemies within {"type":"offense", "value":"12m"} {"type":"stacking", "value":"(+4 per stack)"}.<br /> {"type":"offense", "value":"Enemies"} burn for {"type":"offense", "value":"150%"} {"type":"stacking", "value":"(+75% per stack)"} base damage.',
                image: gasoline,
                type: 'common',

            },
            {
                id: 14,
                title: "Stun Grenade",
                description: '{"type":"misc", "value":"5%"} {"type":"stacking", "value":"(+5% per stack)"} chance on hit to {"type":"misc", "value":"stun"} enemies for {"type":"misc", "value":"2"} seconds.',
                image: stungrenade,
                type: 'common',

            },
            {
                id: 15,
                title: "Bundle of Fireworks",
                description: 'Opening a chest {"type":"offense", "value":"launches 8"} {"type":"stacking", "value":"(+4 per stack)"} {"type":"offense", "value":"fireworks"} that deal {"type":"offense", "value":"300%"} base damage.',
                image: firework,
                type: 'common',

            },
            {
                id: 16,
                title: "Energy Drink",
                description: '{"type":"misc", "value":"Sprint speed"} is improved by {"type":"misc", "value":"30%"} {"type":"stacking", "value":"(+20% per stack)"}.',
                image: drink,
                type: 'common',

            },
            {
                id: 17,
                title: "Backup Magazine",
                description: 'Add {"type":"misc", "value":"+1"} {"type":"stacking", "value":"(+1 per stack)"} charge of your {"type":"misc", "value":"Secondary skill"}.',
                image: backupMagazine,
                type: 'common',

            },
            {
                id: 18,
                title: "Sticky Bomb",
                description: '{"type":"offense", "value":"5%"} {"type":"stacking", "value":"(+5% per stack)"} chance on hit to attach a {"type":"offense", "value":"bomb"} to an enemy, detonating for {"type":"offense", "value":"180%"} TOTAL damage.',
                image: stickybomb,
                type: 'common',

            },
            {
                id: 19,
                title: "Rusted Key",
                description: 'A {"type":"misc", "value":"hidden cache"} containing an item will appear in a random location  {"type":"misc", "value":"on each stage"} {"type":"stacking", "value":"(Increase type of the item per stack)"}.',
                image: key,
                type: 'common',

            },
            {
                id: 20,
                title: "Armor-Piercing Rounds",
                description: 'Deal an additional {"type":"offense", "value":"20%"} damage {"type":"stacking", "value":"(+10% per stack)"} to bosses.',
                image: armorRounds,
                type: 'common',

            },
            {
                id: 21,
                title: "Topaz Brooch",
                description: 'Gain a {"type":"healing", "value":"temporary barrier"} on kill for {"type":"healing", "value":"15 health"} {"type":"stacking", "value":"(+15 per stack)"}.',
                image: topazBrooch,
                type: 'common',

            },
            {
                id: 22,
                title: "Focus Crystal",
                description: 'Increase damage to enemies within {"type":"misc", "value":"13m"} by {"type":"misc", "value":"15%"}{"type":"stacking", "value":"+15% per stack"}.',
                image: redCrystal,
                type: 'common',

            },
            {
                id: 23,
                title: "Fresh Meat",
                description: 'Increase {"type":"healing", "value":"base health regeneration"} by {"type":"offense", "value":"+2 hp/s"} for {"type":"misc", "value":"3s"} {"type":"misc", "value":"(+3s per stack)"} after killing an enemy.',
                image: freshMeat,
                type: 'common',

            },
            {
                id: 24,
                title: "Repulsion Armor Plate",
                description: 'Reduce all {"type":"offense", "value":"incoming damage"} by {"type":"offense", "value":"5"} {"type":"stacking", "value":"(+5 per stack)"}. <br /> Cannot be reduced below {"type":"offense", "value":"1"}.',
                image: armor,
                type: 'common',

            },
            {
                id: 25,
                title: "Item Scrap, White",
                description: 'Does nothing. Prioritised when used with 3D Printers.',
                image: scrapWhite,
                type: 'common',

            },
            //Uncommon Items
            {
                id: 26,
                title: "AtG Missile Mk.1",
                description: '{"type":"offense", "value":"10%"} chance to fire a missile that deals {"type":"offense", "value":"300%"} {"type":"stacking", "value":"(+300% per stack)"} TOTAL damage.',
                image: atgMissile,
                type: 'uncommon',

            },
            {
                id: 27,
                title: "Will-O'-the-wisp",
                description: 'On killing an enemy, spawn a {"type":"offense", "value":"lava pillar"} in a {"type":"offense", "value":"12m"} {"type":"stacking", "value":"(+2.4m per stack)"} radius for {"type":"offense", "value":"350%"} {"type":"stacking", "value":"(+280% per stack)"} base damage.',
                image: wisp,
                type: 'uncommon',

            },
            {
                id: 28,
                title: "Hopoo Feather",
                description: 'Gain {"type":"misc", "value":"+1"} {"type":"stacking", "value":"(+1 per stack)"} maximum {"type":"misc", "value":"jump count"}.',
                image: feather,
                type: 'uncommon',

            },
            {
                id: 29,
                title: "Ukulele",
                description: '{"type":"offense", "value":"25%"} chance to fire a {"type":"offense", "value":"chain of lightning"} for {"type":"offense", "value":"80%"} TOTAL damage up to {"type":"offense", "value":"3"} {"type":"stacking", "value":"(+2 per stack)"} targets within {"type":"offense", "value":"20m"} {"type":"stacking", "value":"(+2m per stack)"}.',
                image: ukulele,
                type: 'uncommon',

            },
            {
                id: 30,
                title: "Leeching Seed",
                description: 'Dealing damage {"type":"healing", "value":"heals"} you for {"type":"healing", "value":"1"} {"type":"stacking", "value":"(+1 per stack)"} {"type":"healing", "value":"health"}.',
                image: seed,
                type: 'uncommon',

            },
            {
                id: 31,
                title: "Predatory Instincts",
                description: '{"type":"offense", "value":"Critical Strikes"} increase {"type":"offense", "value":"attack speed"} by {"type":"offense", "value":"12%"}. Maximum cap of {"type":"offense", "value":"36%"} {"type":"stacking", "value":"(+24% per stack)"} {"type":"offense", "value":"attack speed"}.',
                image: instinct,
                type: 'uncommon',

            },
            {
                id: 32,
                title: "Red Whip",
                description: 'Leaving combat boosts {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"30%"} {"type":"stacking", "value":"(+30% per stack)"}.',
                image: whip,
                type: 'uncommon',

            },
            {
                id: 33,
                title: "Old War Stealthkit",
                description: 'Chance on taking damage to gain {"type":"misc", "value":"40% movement speed"} and {"type":"misc", "value":"invisibility"} for {"type":"misc", "value":"3s"} {"type":"stacking", "value":"(+1.5s per stack)"}. <br />Chance increases the more damage you take.',
                image: stealthKit,
                type: 'uncommon',

            },
            {
                id: 34,
                title: "Harvester's Scythe",
                description: 'Gain {"type":"offense", "value":"5% critical chance"}.<br />{"type":"offense", "value":"Critical strikes"} {"type":"healing", "value":"heal"} for {"type":"healing", "value":"8"} {"type":"stacking", "value":"(+4 per stack)"} {"type":"healing", "value":"health"}.',
                image: scythe,
                type: 'uncommon',

            },
            {
                id: 35,
                title: "Fuel Cell",
                description: 'Hold an {"type":"misc", "value":"additional equipment charge"} {"type":"stacking", "value":"(+1 per stack)"}. <br>{"type":"stacking", "value":"Reduce equipment cooldown"} by {"type":"misc", "value":"15%"} {"type":"stacking", "value":"(+15% per stack)"}.',
                image: cell,
                type: 'uncommon',

            },
            {
                id: 36,
                title: "Infusion",
                description: 'Killing an enemy increases your {"type":"healing", "value":"health permanently"} by {"type":"healing", "value":"1"}, up to a {"type":"healing", "value":"maximum"} of {"type":"healing", "value":"100"} {"type":"stacking", "value":"(+100 per stack)"} {"type":"healing", "value":"health"}.',
                image: infusion,
                type: 'uncommon',

            },
            {
                id: 37,
                title: "Bandolier",
                description: '{"type":"misc", "value":"18%"} {"type":"stacking", "value":"(+10% per stack)"} chance on kill tpo drop an ammo pack that {"type":"misc", "value":"resets all cooldowns"}.',
                image: bandolier,
                type: 'uncommon',

            },
            {
                id: 38,
                title: "Bezerker's Pauldron",
                description: '{"type":"offense", "value":"Killing 3 enemies"} within {"type":"offense", "value":"1"} second sends you into a {"type":"offesnse", "value":"frenzy"} for {"type":"offense", "value":"6s"} {"type":"stacking", "value":"(+4s per stack)"}.<br />Increases {"type":"misc", "value":"movement speed"} by {"type":"misc", "value":"50%"} and {"type":"offense", "value":"attack speed"} by {"type":"offense", "value":"100%"}.',
                image: berzerk,
                type: 'uncommon',

            },
            {
                id: 39,
                title: "Rose Buckler",
                description: '{"type":"healing", "value":"Increases armor"} by {"type":"healing", "value":"30"} {"type":"healing", "value":"30"} {"type":"stacking", "value":"(+30 per stack)"} while {"type":"misc", "value":"sprinting"}.',
                image: buckler,
                type: 'uncommon',

            },
            {
                id: 40,
                title: "Runald's Band",
                description: 'Hits that deals {"type":"offense", "value":"more than 400% damage"} also blasts enemies with a {"type":"offense", "value":"runic ice blast"}, {"type":"misc", "value":"slowing"} them by {"type":"misc", "value":"80%"} for {"type":"misc", "value":"3s"} {"type":"stacking", "value":"(+3s per stack)"} and dealing {"type":"offense", "value":"250%"} {"type":"stacking", "value":"(+250% per stack)"} TOTAL damage. Recharge every {"type":"misc", "value":"10"} seconds.',
                image: iceRing,
                type: 'uncommon',

            },
            {
                id: 41,
                title: "Kjaro's Band",
                description: 'Hits that deals {"type":"offense", "value":"more than 400% damage"} also blasts enemies with a {"type":"offense", "value":"runic flame tornado"}, dealing {"type":"offense", "value":"300%"} {"type":"stacking", "value":"(+300% per stack)"} TOTAL damage over time. Recharge every {"type":"misc", "value":"10"} seconds.',
                image: fireRing,
                type: 'uncommon',

            },
            {
                id: 42,
                title: "Chronobauble",
                description: '{"type":"misc", "value":"Slow"} enemies for {"type":"misc", "value":"-60% movement speed"} for {"type":"misc", "value":"2s"} {"type":"stacking", "value":"(+2s per stack)"}.',
                image: bauble,
                type: 'uncommon',

            },
            {
                id: 43,
                title: "Wax Quail",
                description: '{"type":"healing", "value":"Jumping"} while {"type":"healing", "value":"sprinting"} boosts you forward by {"type":"healing", "value":"10m"} {"type":"stacking", "value":"(+10m per stack)"}.',
                image: quail,
                type: 'uncommon',

            },
            {
                id: 44,
                title: "Old Guillotine",
                description: 'Instantly kill Elite Monsters below {"type":"debuff", "value":"13%"} {"type":"stacking", "value":"(+13% per stack)"} {"type":"debuff", "value":"health"}.',
                image: guillotine,
                type: 'uncommon',

            },
            {
                id: 45,
                title: "War Horn",
                description: 'Activating your Equipment gives you {"type":"offense", "value":"70% attack speed"} for {"type":"offense", "value":"8s"} {"type":"(+4s per stack)"}.',
                image: warHorn,
                type: 'uncommon',

            },
            {
                id: 46,
                title: "Lepton Daisy",
                description: 'Release a {"type":"healing", "value":"healing nova"} during the Teleporter event, {"type":"healing", "value":"healing"} all nearby allies for {"type":"healing", "value":"50%"} of their maximum health. Occurs {"type":"healing", "value":"1"} {"type":"stacking", "value":"(+1 per stack)"} times.',
                image: daisy,
                type: 'uncommon',

            },
            {
                id: 47,
                title: "Razorwire",
                description: 'Getting hit causes you to explode in a burst of razors, dealing {"type":"offense", "value":"160% damage"}.<br />Hits up to {"type":"offense", "value":"5"} {"type":"stacking", "value":"(+2 per stack)"} in a {"type":"offense", "value":"25m"} {"type":"stacking", "value":"(+10m per stack)"} radius.',
                image: razorWire,
                type: 'uncommon',

            },
            {
                id: 48,
                title: "Ghor's Tome",
                description: '{"type":"misc", "value":"4%"} {"type":"stacking", "value":"(+4% per stack)"} chance on kill to drop a treasure worth {"type":"misc", "value":"$25"}. {"type":"misc", "value":"scales over time"}.',
                image: ghorsTome,
                type: 'uncommon',

            },
            {
                id: 49,
                title: "Squid Polyp",
                description: 'Activating an interactable summons a {"type":"offense", "value":"Squid Turrent"} that attacks nearby enemies at {"type":"offense", "value":"100%"} {"type":"stacking", "value":"(+100% per stack)"} {"type":"offense", "value":"attack speed"}. Lasts {"type":"misc", "value":"30"} seconds.',
                image: squidTurrent,
                type: 'uncommon',

            },
            {
                id: 50,
                title: "Death Mark",
                description: 'Enemies with {"type":"offense", "value":"4"} or more debuffs are {"type":"offense", "value":"marked for death"}, increasing damage taken by {"type":"offense", "value":"50%"} = all sources for {"type":"misc", "value":"7"} {"type":"stacking", "value":"(+7 per stack)"} seconds.',
                image: deathMark,
                type: 'uncommon',

            },
            {
                id: 51,
                title: "Item Scrap, Green",
                description: 'Does nothing. Prioritised when used with 3D Printers.',
                image: scrapGreen,
                type: 'uncommon',

            },
            //Legendary Items
            {
                id: 52,
                title: "Brilliant Behemoth",
                description: 'All your {"type":"offense", "value":"attacks explode"} in a {"type":"offense", "value":"4m"} {"type":"stacking", "value":"(+1.5m per stack)"} radius for a bonus {"type":"offense", "value":"60%"} TOTAL damage to nearby enemies.',
                image: behemoth,
                type: 'legendary',

            },
            {
                id: 53,
                title: "Ceremonial Dagger",
                description: 'Killing an enemy fires out {"type":"offense", "value":"3 homing daggers"} that deal {"type":"offense", "value":"150%"} {"type":"stacking", "value":"(+150% per stack)"} base damage.',
                image: dagger,
                type: 'legendary',

            },
            {
                id: 54,
                title: "Frost Relic",
                description: 'Killing an enemy surrounds you with an {"type":"offense", "value":"ice storm"} that deals {"type":"offense", "value":"600% damage per second"}.',
                image: ice,
                type: 'legendary',

            },
            {
                id: 55,
                title: "Happiest Mask",
                description: 'Killing enemies has {"type":"offense", "value":"7%"} chance to {"type":"offense", "value":"spawn a ghost"} of the killed enemey with {"type":"offense", "value":"1500%"} damage. Lasts {"type":"offense", "value":"30s"} {"type":"stacking", "value":"(+30s per stack)"}.',
                image: mask,
                type: 'legendary',

            },
            {
                id: 56,
                title: "H3AD-5T v2",
                description: 'Increase {"type":"misc", "value":"jump height"}. Creates a {"type":"offense", "value":"5m-100m"} radius {"type":"offense", "value":"kinetic explosion"} on hitting the ground dealing {"type":"offense", "value":"1000%-10000%"} base damage that scales up with {"type":"offense", "value":"speed"}. Recharges in {"type":"offense", "value":"10"} {"type":"stacking", "value":"(-50% per stack)"} seconds.',
                image: cuffs,
                type: 'legendary',

            },
            {
                id: 57,
                title: "N'kuhana's Opinion",
                description: 'Store {"type":"healing", "value":"100%"} {"type":"stacking", "value":"(+100% per stack)"} of healing as {"type":"healing", "value":"Soul Energy"}. After your {"type":"healing", "value":"Soul Energy"} reaches {"type":"healing", "value":"10%"} of your {"type":"healing", "value":"maximum health"}, {"type":"offense", "value":"fire a skull"} that deals {"type":"offense", "value":"250%"} of your {"type":"healing", "value":"Soul Energy"} as {"type":"offense", "value":"damage"}.',
                image: opinion,
                type: 'legendary',

            },
            {
                id: 58,
                title: "Unstable Tesla Coil",
                description: 'Fire out {"type":"offense", "value":"lightning"} that hits {"type":"offense", "value":"3"} {"type":"stacking", "value":"(+2 per stack)"} enemies for {"type":"offense", "value":"200%"} base damage every {"type":"offense", "value":"0.5s"}. The Tesla Coil switches off every {"type":"offense", "value":"10 seconds"}.',
                image: coil,
                type: 'legendary',

            },
            {
                id: 59,
                title: "57 Leaf Clover",
                description: 'All random effects are rolled {"type":"misc", "value":"+1"} {"type":"stacking", "value":"(+1 per stack)"} {"type":"misc", "value":"times for a favourable outcome."}.',
                image: clover,
                type: 'legendary',

            },
            {
                id: 60,
                title: "Sentient Meat Hook",
                description: '{"type":"offense", "value":"20%"} {"type":"stacking", "value":"(+20% per stack)"} chance on hit to {"type":"offense", "value":"fire homing hooks"} at up to {"type":"offense", "value":"10"} {"type":"stacking", "value":"(+5 per stack)"} enemies for {"type":"offense", "value":"100%"} TOTAL damage.',
                image: hook,
                type: 'legendary',

            },
            {
                id: 61,
                title: "Alien Head",
                description: '{"type":"misc", "value":"Reduce skill cooldown"} by {"type":"misc", "value":"25%"} {"type":"stacking", "value":"(+25% per stack)"}.',
                image: alien,
                type: 'legendary',

            },
            {
                id: 62,
                title: "Soundbound Catalyst",
                description: '{"type":"offense", "value":"Kills reduce"} {"type":"misc", "value":"equipment cooldown"} by {"type":"misc", "value":"4s"} {"type":"stacking", "value":"(+2s per stack)"}.',
                image: soul,
                type: 'legendary',

            },
            {
                id: 63,
                title: "Dio's Bestfriend",
                description: '{"type":"misc", "value":"Upon Death"}, this item will be {"type":"misc", "value":"consumed"} and you will {"type":"healing", "value":"return to life"} with {"type":"healing", "value":"3 seconds of invulnerability"}.',
                image: dio,
                type: 'legendary',

            },
            {
                id: 64,
                title: "Hardlight Afterburner",
                description: 'Add {"type":"misc", "value":"+2"} {"type":"stacking", "value":"(+2 per stack)"} charges of your {"type":"misc", "value":"Utility skill"}.<br />{"type":"misc", "value":"Reduces Utility skill cooldown"} by {"type":"misc", "value":"33%"}.',
                image: burner,
                type: 'legendary',

            },
            {
                id: 65,
                title: "Wake of Vultures",
                description: 'Gain the {"type":"offense", "value":"power"} of any killed elite monster for {"type":"offense", "value":"8s"} {"type":"stacking", "value":"(+5s per stack)"}.',
                image: headHunter,
                type: 'legendary',

            },
            {
                id: 66,
                title: "Brainstalks",
                description: 'Upon killing an elite monster, {"type":"offense", "value":"enter a frenzy"} for {"type":"offense", "value":"4s"} {"type":"stacking", "value":"(+4s per stack)"} where {"type":"misc", "value":"skills have no cooldowns"}.',
                image: brain,
                type: 'legendary',

            },

            {
                id: 67,
                title: "Rejuvenation Rack",
                description: '{"type":"healing", "value":"Heal 100%"} {"type":"stacking", "value":"(+100% per stack)"} more.',
                image: horn,
                type: 'legendary',

            },
            {
                id: 68,
                title: "Aegis",
                description: 'Healing past full grants you a {"type":"healing", "value":"temporary barrier"} for up to {"type":"healing", "value":"50%"} {"type":"stacking", "value":"(+50% per stack)"} of the amount you {"type":"healing", "value":"healed"}.',
                image: fullBarrier,
                type: 'legendary',

            },
            {
                id: 69,
                title: "Shattering Justice",
                description: 'After hitting an enemy {"type":"offense", "value":"5"} times, reduce their {"type":"offense", "value":"armor"} by {"type":"offense", "value":"60"} for {"type":"offense", "value":"8"} {"type":"stacking", "value":"(+8 per stack)"} seconds.',
                image: hammer,
                type: 'legendary',

            },
            {
                id: 70,
                title: "Resonance Disc",
                description: 'After hitting an enemy {"type":"offense", "value":"5"} times, reduce their {"type":"offense", "value":"armor"} by {"type":"offense", "value":"60"} for {"type":"offense", "value":"8"} {"type":"stacking", "value":"(+8 per stack)"} seconds.',
                image: disc,
                type: 'legendary',

            },
            {
                id: 71,
                title: "Interstellar Desk Plant",
                description: 'On kill, plant a {"type":"healing", "value":"healing"} fruit seed that grows into a plant after {"type":"misc", "value":"5"} seconds.<br />The plant {"type":"healing", "value":"heals"} for {"type":"healing", "value":"10%"} of {"type":"healing", "value":"maximum health"} every second to all allies withing {"type":"healing", "value":"5m"} {"type":"stacking", "value":"(+5m per stack)"}. Last {"type":"misc", "value":"10"} seconds.',
                image: deskPlant,
                type: 'legendary',

            },
            {
                id: 72,
                title: "Defensive Microbots",
                description: 'Shoot down {"type":"offense", "value":"1"} {"type":"stacking", "value":"(+1 per stack)"} projectiles within {"type":"offense", "value":"20m"} every {"type":"offense", "value":"0.5 seconds"}. {"type":"misc", "value":"Recharge rate scales with attack speed"}.',
                image: microbots,
                type: 'legendary',

            },
            {
                id: 73,
                title: "Item Scrap, Red",
                description: 'Does nothing. Prioritised when used with 3D Printers.',
                image: scrapRed,
                type: 'legendary',

            },
            //Boss Items
            {
                id: 74,
                title: "Titanic Knurl",
                description: '{"type":"healing", "value":"Increases maximum health"} {"type":"healing", "value":"40"} {"type":"stacking", "value":"(+40 per stack)"} and {"type":"healing", "value":"base health regeneration"} by {"type":"healing", "value":"+1.6 hp/s"} {"type":"stacking", "value":"(+1.6 hp/s per stack)"}.',
                image: knurl,
                type: 'boss',

            },
            {
                id: 75,
                title: "Queen's Gland",
                description: 'Every 30 seconds, {"type":"misc", "value":"summon a Beetle Guard"} with bonus {"type":"offense", "value":"300%"} damage and {"type":"defense", "value":"100%"} health. Can have up to {"type":"misc", "value":"1"} {"type":"stacking", "value":"(+1 per stack)"} Guards at a time.',
                image: qgland,
                type: 'boss',

            },
            {
                id: 76,
                title: "Halcyon Seed",
                description: 'Summon {"type":"offense", "value":"Aurelionnite"} during the teleporter event. It has {"type":"offense", "value":"100%"} {"type":"stacking", "value":"(+50% per stack)"} {"type":"offense", "value":"damage"} and {"type":"healing", "value":"100%"} {"type":"stacking", "value":"(+100% per stack)"} {"type":"healing", "value":"health"} .',
                image: qgland,
                type: 'boss',

            },
            {
                id: 77,
                title: "Little Disciple",
                description: 'Fire a {"type":"offense", "value":"tracking wisp"} for {"type":"offense", "value":"300%"} {"type":"stacking", "value":"(+300% per stack)"} {"type":"offense", "value":"damage"}. <br /> Fires every 1.6 seconds while sprinting. Fire rate increases with {"type":"misc", "value":"movement speed"}.',
                image: littledisc,
                type: 'boss',

            },
            {
                id: 78,
                title: "Pearl",
                description: 'Increases {"type":"healing", "value":"maximum health"} by {"type":"healing", "value":"10%"} {"type":"stacking", "value":"(+10% per stack)"}.',
                image: pearl,
                type: 'boss',

            },
            {
                id: 79,
                title: "Irradiant Pearl",
                description: 'Increases {"type":"misc", "value":"ALL stats"} by {"type":"misc", "value":"10%"} {"type":"stacking", "value":"(+10% per stack)"}.',
                image: shinypearl,
                type: 'boss',

            },
            {
                id: 80,
                title: "Genesis Loop",
                description: 'Falling below {"type":"debuff", "value":"25% health"} causes you to explode, dealing {"type":"offense", "value":"6000% base damage"}. Recharges every {"type":"misc", "value":"30 seconds"} {"type":"stacking", "value":"(+50% per stack)"}.',
                image: shinypearl,
                type: 'boss',

            },
            {
                id: 81,
                title: "Artifact Key",
                description: 'A stone shared with immense power.',
                image: artifactkey,
                type: 'boss',

            },
            {
                id: 82,
                title: "Molten Perforator",
                description: '{"type":"offense", "value":"10%"} chance on hit to call forth {"type":"offense", "value":"3 magma balls"} = an enemy, dealing {"type":"offense", "value":"300%"} {"type":"stacking", "value":"(+300% per stack)"} damage each.',
                image: magmatooth,
                type: 'boss',

            },
            {
                id: 83,
                title: "Shatterspleen",
                description: '{"type":"offense", "value":"Critical Strikes bleed"} enemies for {"type":"offense", "value":"240%"} base damage. {"type":"offense", "value":"Bleeding"} enemies {"type":"offense", "value":"explode"} on death for {"type":"offense", "value":"400%"} {"type":"stacking", "value":"(+400% per stack)"} damage, plus an additional {"type":"offense", "value":"15%"} {"type":"stacking", "value":"(+15% per stack)"} of their maximum health.',
                image: spleen,
                type: 'boss',

            },
            {
                id: 84,
                title: "Mired Urn",
                description: 'While in combat, the nearest 1 {"type":"stacking", "value":"(+1 per stack)"} characters to you within {"type":"misc", "value":"13m"} whill be tethered to you, dealing {"type":"offense", "value":"100%"} damage per second, applying {"type":"offense", "value":"tar"}, and {"type":"healing", "value":"healing"} you for {"type":"healing", "value":"100%"} of the damage dealt.',
                image: miredurn,
                type: 'boss',

            },
            {
                id: 85,
                title: "Item Scrap, Yellow",
                description: 'Does Nothing, prioritized when used with 3D printers.',
                image: scrapsyellow,
                type: 'boss',

            },
            //Lunar Items
            {
                id: 86,
                title: "Shaped Glass",
                description: 'Increase base damage by {"type":"offense", "value":"100%"} {"type":"stacking", "value":"(+100% per stack)"}. <br /> Reduce {"type":"healing", "value":"maximum health"} by {"type":"defense", "value":"50%"} {"type":"stacking", "value":"(+50% per stack)"}.',
                image: sword,
                type: 'lunar',

            },
            {
                id: 87,
                title: "Brittle Crown",
                description: '',
                image: crown,
                type: 'lunar',

            },
            {
                id: 88,
                title: "Transcendence",
                description: '',
                image: transc,
                type: 'lunar',

            },
            {
                id: 89,
                title: "Corpsebloom",
                description: '',
                image: corpse,
                type: 'lunar',

            },
            {
                id: 90,
                title: "Gesture of the Drowned",
                description: '',
                image: fossil,
                type: 'lunar',

            },
            {
                id: 91,
                title: "Strides of Heresy",
                description: '',
                image: strideheresy,
                type: 'lunar',

            },
            {
                id: 92,
                title: "Visions of Heresy",
                description: '',
                image: visionheresy,
                type: 'lunar',

            },
            {
                id: 93,
                title: "Beads of Fealty",
                description: 'Seems to do nothing... {"type":"misc", "value":"but..."}',
                image: beads,
                type: 'lunar',

            },
            {
                id: 94,
                title: "Focused Convergence",
                description: '',
                image: convergence,
                type: 'lunar',

            },
            {
                id: 95,
                title: "Defiant Gouge",
                description: '',
                image: gouge,
                type: 'lunar',

            },
            {
                id: 96,
                title: "Mercurial Rachis",
                description: '',
                image: rachis,
                type: 'lunar',

            },
            {
                id: 97,
                title: "Purity",
                description: '',
                image: purity,
                type: 'lunar',

            },
            {
                id: 98,
                title: "Glowing Meteorite",
                description: '',
                image: meteorite,
                type: 'lunar',

            },
            {
                id: 99,
                title: "Helfire Tincture",
                description: '',
                image: helfire,
                type: 'lunar',

            },
            {
                id: 100,
                title: "Effigy of Grief",
                description: '',
                image: grief,
                type: 'lunar',

            },
            {
                id: 101,
                title: "Spinel Affliction",
                description: '',
                image: spinel,
                type: 'lunar',

            },
            // Equipment
            {
                id: 102,
                title: "Disposable Missile Launcher",
                description: 'Fire a swarm of {"type":"offense", "value":"12"} missiles that deal {"type":"offense", "value":"12x300%"} damage. <br /> Cooldown: {"type":"cdr", "value":"45s"}.',
                image: missile,
                type: 'equipment',

            },
            {
                id: 103,
                title: "Foreign Fruit",
                description: '',
                image: fruit,
                type: 'equipment',

            },
            {
                id: 104,
                title: "Blackhole",
                description: '',
                image: blackhole,
                type: 'equipment',

            },
            {
                id: 105,
                title: "Ocular HUD",
                description: '',
                image: hud,
                type: 'equipment',

            },
            {
                id: 106,
                title: "The Back-up",
                description: '',
                image: backup,
                type: 'equipment',

            },
            {
                id: 107,
                title: "Preon Accumulator",
                description: '',
                image: preon,
                type: 'equipment',

            },
            {
                id: 108,
                title: "Milky Chrisalis",
                description: '',
                image: milky,
                type: 'equipment',

            },
            {
                id: 109,
                title: "Royal Capacitor",
                description: '',
                image: capacitor,
                type: 'equipment',

            },
            {
                id: 110,
                title: "The Crowdfunder",
                description: '',
                image: crowdfund,
                type: 'equipment',

            },
            {
                id: 111,
                title: "Gnarled Woodsprite",
                description: '',
                image: woodsprite,
                type: 'equipment',

            },
            {
                id: 112,
                title: "Radar Scanner",
                description: '',
                image: radar,
                type: 'equipment',

            },
            {
                id: 113,
                title: "Eccentric Vase",
                description: '',
                image: eccentric,
                type: 'equipment',

            },
            {
                id: 114,
                title: "Blast Shower",
                description: '',
                image: blastshield,
                type: 'equipment',

            },
            {
                id: 115,
                title: "Volcania Egg",
                description: '',
                image: egg,
                type: 'equipment',

            },
            {
                id: 116,
                title: "Jade Elephant",
                description: '',
                image: elephant,
                type: 'equipment',

            },
            {
                id: 117,
                title: "Sawmerang",
                description: '',
                image: sawmerang,
                type: 'equipment',

            },
            {
                id: 118,
                title: "Recycler",
                description: '',
                image: recycler,
                type: 'equipment',

            },
            {
                id: 119,
                title: "Super Massive Leech",
                description: '',
                image: leech,
                type: 'equipment',

            },
            {
                id: 120,
                title: "Gorag's Opus",
                description: '',
                image: gorag,
                type: 'equipment',

            },
            {
                id: 121,
                title: "Forgive Me Please",
                description: '',
                image: voodoo,
                type: 'equipment',

            },
        ]
    );
};

export default GetItems;