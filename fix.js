// Fix DB format for the Stallion Intelligence Platform
(function() {
  // Equibase-verified race record corrections (March 2026)
  var raceFixFields = ['career_starts','career_wins','career_places','career_shows','career_earnings'];
  var raceFixes = {4:[13,8,3,1,2232830],5:[6,3,0,0,557300],7:[11,8,0,1,5189200],10:[14,4,2,5,742640],11:[9,3,3,1,2945000],12:[8,6,2,0,7201200],13:[8,6,0,1,1245525],14:[14,10,2,2,3104910],15:[10,5,4,1,1651800],16:[16,8,4,2,1589049],17:[13,8,0,1,1825280],18:[4,3,0,1,225700],19:[10,4,1,2,519600],20:[8,5,0,1,1416000],21:[8,6,0,0,703264],22:[11,6,3,0,2940639],23:[24,3,4,5,3407245],24:[6,6,0,0,4514800],25:[11,6,2,2,2518260],26:[11,7,1,1,944900],27:[8,6,0,1,1370000],28:[8,5,1,1,1798800],29:[11,6,4,1,5662600],30:[8,6,2,0,1358940],31:[23,10,5,6,6692480],32:[8,4,0,1,1031596],33:[12,9,1,0,4541700],34:[16,10,2,2,1258256],35:[15,7,4,0,2729520],36:[10,6,0,2,1321080],37:[10,5,1,2,2130520],38:[18,5,4,1,2505770],39:[5,2,1,0,424600],40:[16,11,1,4,3106030],41:[11,8,2,1,2001812],42:[13,6,4,2,4383200],43:[13,7,3,1,2673470],44:[19,6,6,2,3972800],45:[17,8,7,0,5754720],46:[8,6,1,0,3060480],47:[10,8,0,2,4905144],48:[6,5,0,0,3198000],49:[12,5,2,3,1795800],50:[6,5,0,1,1216400],51:[9,6,1,1,2735300],52:[4,3,0,0,1263500],53:[14,7,2,2,5785320],54:[14,5,6,3,8196200],55:[5,4,1,0,4047200],56:[6,3,0,1,1562275],57:[3,3,0,0,311400],58:[6,5,1,0,341040],59:[11,4,2,1,410711],60:[18,8,6,0,3673360],61:[12,5,2,1,1967099],62:[13,4,5,1,424205],63:[13,9,2,2,4368214],64:[4,4,0,0,511200],65:[10,7,0,0,1496250],66:[9,5,2,0,2054580],67:[5,3,1,0,562000],68:[10,4,3,0,1624392],69:[7,2,2,1,2507450],70:[16,5,3,1,4819160],71:[6,6,0,0,749149],72:[10,5,1,1,1634200],73:[11,9,1,0,8650300],74:[11,7,1,1,17422600],75:[2,1,1,0,33840],76:[15,8,4,2,6427830],77:[23,8,5,3,769964],78:[14,9,4,0,2075791],79:[17,7,4,1,1026229],80:[8,4,3,1,1985800],81:[11,9,0,1,3446120],82:[24,10,3,3,3245370],83:[13,9,1,1,3307278],84:[16,7,4,2,3647000],85:[1,1,0,0,32400],86:[4,3,1,0,623000],87:[3,3,0,0,185213],88:[10,4,2,3,1039000],89:[13,7,3,1,831800]};
  for (var rid in raceFixes) { if (DB.sires[rid]) { var rv = raceFixes[rid]; for (var ri = 0; ri < 5; ri++) DB.sires[rid][raceFixFields[ri]] = rv[ri]; } }
  console.log('[fix.js] Patched 83 sire race records from Equibase data.');

  
  // Comprehensive data corrections (pedigreegoddess.com 2026 fees, verified March 2026)
  var dataFixes = {
    4: {stud_fee_current:100000, black_type_winners:47, graded_stakes_winner_offspring:25},
    6: {stud_fee_current:0, total_starters:1056},
    12: {first_crop_racing_year:2024, first_crop_year:2022, first_season_flag:0, stud_fee_current:15000},
    13: {first_crop_racing_year:2024, first_crop_year:2022, first_season_flag:0, stud_fee_current:100000, year_foaled:2016},
    14: {first_crop_racing_year:2023, first_crop_year:2021, first_season_flag:0, stud_fee_current:10000, year_foaled:2015},
    15: {first_crop_racing_year:2023, first_crop_year:2021, first_season_flag:0, stud_fee_current:75000},
    16: {status:"deceased", stud_fee_current:0},
    18: {first_crop_racing_year:2023, first_crop_year:2021, first_season_flag:0, stud_fee_current:20000, year_foaled:2016},
    19: {first_crop_racing_year:2022, first_crop_year:2020, first_season_flag:0, status:"active", stud_farm:"Coolmore/Ashford", stud_fee_current:7500, year_foaled:2014},
    20: {first_crop_racing_year:2022, first_crop_year:2020, first_season_flag:0, stud_fee_current:25000, year_foaled:2015},
    21: {first_crop_racing_year:2025, first_crop_year:2023, first_season_flag:0, stud_fee_current:60000, year_foaled:2017},
    22: {black_type_winners:0, first_crop_racing_year:2026, first_crop_year:2024, first_season_flag:1, g1_winners:0, graded_stakes_winner_offspring:0, status:"active", stud_farm:"Coolmore/Ashford", stud_fee_current:25000, total_starters:0, total_winners:0},
    23: {first_crop_racing_year:2021, first_crop_year:2019, first_season_flag:0, status:"active", stud_farm:"Calumet Farm", stud_fee_current:7500},
    24: {black_type_winners:0, first_crop_racing_year:2026, first_crop_year:2024, first_season_flag:1, g1_winners:0, graded_stakes_winner_offspring:0, total_starters:0, total_winners:0},
    26: {first_crop_racing_year:2015, first_crop_year:2013, first_season_flag:0, year_foaled:2007},
    27: {first_crop_racing_year:2021, first_crop_year:2019, first_season_flag:0, status:"active", stud_fee_current:10000},
    28: {first_crop_racing_year:2016, first_crop_year:2014, first_season_flag:0, status:"active", stud_fee_current:10000},
    29: {first_crop_racing_year:2022, first_crop_year:2020, first_season_flag:0, stud_fee_current:35000},
    30: {first_crop_racing_year:2019, first_crop_year:2017, first_season_flag:0, status:"active", stud_fee_current:50000, year_foaled:2011},
    32: {first_crop_racing_year:2019, first_crop_year:2017, first_season_flag:0, status:"active"},
    33: {black_type_winners:0, first_crop_racing_year:2026, first_crop_year:2024, first_season_flag:1, g1_winners:0, graded_stakes_winner_offspring:0, total_starters:0, total_winners:0},
    37: {first_crop_racing_year:2023, first_crop_year:2021, first_season_flag:0},
    40: {black_type_winners:0, first_crop_racing_year:2027, first_crop_year:2025, first_season_flag:0, g1_winners:0, graded_stakes_winner_offspring:0, total_starters:0, total_winners:0, year_foaled:2018},
    41: {first_crop_racing_year:2025, first_crop_year:2023, first_season_flag:0},
    42: {first_crop_racing_year:2011, first_crop_year:2009, first_season_flag:0, status:"active"},
    43: {first_crop_racing_year:2011, first_crop_year:2009, first_season_flag:0, status:"active", stud_fee_current:20000},
    44: {first_crop_racing_year:2020, first_crop_year:2018, first_season_flag:0, status:"active", stud_fee_current:12500},
    46: {stud_fee_current:0},
    47: {first_crop_racing_year:2025, first_crop_year:2023, first_season_flag:0, stud_fee_current:25000, year_foaled:2018},
    48: {first_crop_racing_year:2022, first_crop_year:2020, first_season_flag:0, stud_fee_current:200000},
    49: {first_crop_racing_year:2021, first_crop_year:2019, first_season_flag:0, stud_fee_current:75000},
    50: {black_type_winners:0, first_crop_racing_year:2026, first_crop_year:2024, first_season_flag:1, g1_winners:0, graded_stakes_winner_offspring:0, stud_fee_current:15000, total_starters:0, total_winners:0},
    51: {first_crop_racing_year:2024, first_crop_year:2022, first_season_flag:0, stud_fee_current:40000},
    52: {black_type_winners:0, first_crop_racing_year:2026, first_crop_year:2024, first_season_flag:1, g1_winners:0, graded_stakes_winner_offspring:0, stud_fee_current:15000, total_starters:0, total_winners:0},
    53: {black_type_winners:0, first_crop_racing_year:2029, first_crop_year:2027, first_season_flag:0, g1_winners:0, graded_stakes_winner_offspring:0, total_foals:0, total_starters:0, total_winners:0, year_foaled:2021},
    54: {black_type_winners:0, first_crop_racing_year:2029, first_crop_year:2027, first_season_flag:0, g1_winners:0, graded_stakes_winner_offspring:0, total_foals:0, total_starters:0, total_winners:0},
    55: {first_crop_racing_year:2025, first_crop_year:2023, first_season_flag:0, stud_fee_current:25000, year_foaled:2017},
    56: {black_type_winners:0, first_crop_racing_year:2028, first_crop_year:2026, first_season_flag:0, g1_winners:0, graded_stakes_winner_offspring:0, total_foals:0, total_starters:0, total_winners:0},
    57: {first_crop_racing_year:2022, first_crop_year:2020, first_season_flag:0, status:"active", stud_fee_current:25000, year_foaled:2014},
    58: {first_crop_racing_year:2024, first_crop_year:2022, first_season_flag:0, status:"active", stud_fee_current:10000, year_foaled:2016},
    59: {first_crop_racing_year:2022, first_crop_year:2020, first_season_flag:0, status:"active", stud_fee_current:2500, year_foaled:2014},
    60: {first_crop_racing_year:2024, first_crop_year:2022, first_season_flag:0, stud_fee_current:75000},
    61: {status:"active", stud_fee_current:15000, year_foaled:2011},
    62: {first_crop_racing_year:2010, first_crop_year:2008, first_season_flag:0},
    63: {first_crop_racing_year:2014, first_crop_year:2012, first_season_flag:0, status:"active", year_foaled:2006},
    66: {black_type_winners:0, first_crop_racing_year:2029, first_crop_year:2027, first_season_flag:0, g1_winners:0, graded_stakes_winner_offspring:0, total_foals:0, total_starters:0, total_winners:0, year_foaled:2021},
    67: {first_crop_racing_year:2018, first_crop_year:2016, first_season_flag:0, status:"active", stud_fee_current:10000},
    68: {first_crop_racing_year:2022, first_crop_year:2020, first_season_flag:0, status:"active", stud_fee_current:30000, year_foaled:2014},
    69: {black_type_winners:0, first_crop_racing_year:2027, first_crop_year:2025, first_season_flag:0, g1_winners:0, graded_stakes_winner_offspring:0, stud_fee_current:15000, total_starters:0, total_winners:0},
    70: {black_type_winners:0, first_crop_racing_year:2029, first_crop_year:2027, first_season_flag:0, g1_winners:0, graded_stakes_winner_offspring:0, total_foals:0, total_starters:0, total_winners:0, year_foaled:2022},
    71: {first_crop_racing_year:2008, first_crop_year:2006, first_season_flag:0, stud_fee_current:60000},
    84: {first_crop_racing_year:2019, first_crop_year:2017, first_season_flag:0, status:"active"},
    85: {first_crop_racing_year:2016, first_crop_year:2014, first_season_flag:0, stud_farm:"Hill 'n' Dale", stud_fee_current:30000},
    86: {first_crop_racing_year:2017, first_crop_year:2015, first_season_flag:0, status:"active", stud_fee_current:30000, year_foaled:2010},
    87: {first_crop_racing_year:2014, first_crop_year:2012, first_season_flag:0, stud_farm:"Hill 'n' Dale", stud_fee_current:10000, year_foaled:2008}
  };
  for (var fid in dataFixes) {
    if (DB.sires[fid]) {
      var fx = dataFixes[fid];
      for (var fk in fx) { DB.sires[fid][fk] = fx[fk]; }
    }
  }
  console.log('[fix.js] Applied 55 sire data corrections from verified sources.');

  
  // Sync race_records with patched sire career data (fixes header vs detail mismatch)
  for (var sid in DB.sires) {
    if (DB.race_records && DB.race_records[sid]) {
      DB.race_records[sid].starts = DB.sires[sid].career_starts;
      DB.race_records[sid].wins = DB.sires[sid].career_wins;
      DB.race_records[sid].places = DB.sires[sid].career_places;
      DB.race_records[sid].shows = DB.sires[sid].career_shows;
      DB.race_records[sid].career_earnings = DB.sires[sid].career_earnings;
    }
  }
  console.log('[fix.js] Synced race_records with patched sire career data.');
// Production stats corrections (source: BloodHorse/equineline.com, March 2026)
// Format: [total_foals, total_starters, total_winners, black_type_winners, graded_stakes_winner_offspring, g1_winners]
// null = no change for that field
var pf={
"1":[1839,1563,1133,195,97,29],"2":[674,481,334,57,37,12],"3":[1434,1103,758,118,68,25],
"4":[1149,914,663,98,51,17],"5":[1768,1486,1079,170,106,34],"6":[1633,1226,818,117,63,16],
"7":[725,516,333,41,24,11],"8":[712,511,337,71,37,12],"9":[1066,851,582,31,9,3],
"10":[1388,1114,786,89,32,6],"11":[442,311,205,22,12,5],"12":[343,null,null,null,null,null],
"13":[341,212,145,20,8,0],"14":[475,320,213,18,6,1],"15":[488,307,190,26,8,3],
"18":[400,null,null,null,null,null],"19":[464,331,202,18,6,0],"20":[519,373,237,21,9,1],
"21":[210,null,null,null,null,null],"26":[1127,882,653,66,29,12],"27":[465,366,220,19,7,1],
"28":[1035,852,521,38,17,6],"29":[398,287,186,19,6,2],"30":[790,null,null,null,null,null],
"31":[286,null,null,null,null,null],"32":[840,666,462,53,25,3],"34":[1527,1300,1001,149,69,26],
"35":[243,null,null,null,null,null],"37":[346,253,157,10,3,1],"41":[150,null,null,null,null,null],
"42":[1420,1197,833,95,37,9],"43":[1666,1401,954,95,44,12],"44":[708,550,356,31,9,0],
"45":[1915,1586,1103,186,107,47],"46":[1305,1027,653,76,42,16],"47":[163,null,null,null,null,null],
"48":[627,432,243,48,22,10],"49":[727,562,386,39,17,5],"51":[284,null,null,null,null,null],
"55":[201,null,null,null,null,null],"57":[349,209,146,21,4,1],"58":[269,null,null,null,null,null],
"60":[328,null,null,null,null,null],"61":[362,248,167,21,8,2],"62":[1090,868,640,120,73,25],
"63":[895,680,475,54,25,7],"64":[378,312,192,4,2,0],"65":[503,379,261,20,5,1],
"67":[842,682,480,43,10,0],"68":[303,null,null,null,null,null],"71":[1950,1450,1019,115,58,20],
"72":[843,null,null,null,null,null],"73":[893,692,427,47,23,7],"74":[325,null,null,null,null,null],
"75":[1668,1297,893,83,40,11],"76":[1714,1356,866,86,46,14],"77":[1795,1529,1164,167,72,18],
"78":[1956,1570,1085,118,56,16],"79":[2083,1916,1355,144,59,13],"80":[1109,797,524,82,46,16],
"81":[1367,1074,773,106,59,17],"82":[1565,1328,903,109,52,10],"83":[738,605,400,44,13,3],
"84":[503,362,248,16,4,1],"85":[982,748,493,46,9,4],"86":[885,708,530,43,15,5],
"87":[933,777,584,46,12,2],"88":[638,533,392,27,9,1],"89":[1121,931,695,50,13,4]
};
var pk=["total_foals","total_starters","total_winners","black_type_winners","graded_stakes_winner_offspring","g1_winners"];
for(var id in pf){for(var i=0;i<pk.length;i++){if(pf[id][i]!==null&&DB.sires[id])DB.sires[id][pk[i]]=pf[id][i];}}
console.log('[fix.js] Applied production stats corrections for '+Object.keys(pf).length+' sires.');
    // Convert DB.sires from object to array (used with .forEach, .find, .length)
    if (DB.sires && !Array.isArray(DB.sires)) {
        DB.sires = Object.values(DB.sires);
    }

    // Build sire_names lookup (sire_id -> name) from sires data
    if (!DB.sire_names) {
        DB.sire_names = {};
        var sires = Array.isArray(DB.sires) ? DB.sires : Object.values(DB.sires);
        for (var i = 0; i < sires.length; i++) {
            DB.sire_names[String(sires[i].id)] = sires[i].name;
        }
    }

    // Add reference sire names (fathers not in main sires list)
    var refNames = {"90":"A.P. Indy","91":"Arch","92":"Awesome Again","93":"Cee's Tizzy","94":"Danzig","95":"Dixie Union","96":"El Prado","97":"Elusive Quality","98":"Forty Niner","99":"Giant's Causeway","100":"Gone West","101":"Harlan's Holiday","102":"Indian Charlie","103":"Kingmambo","104":"Lion Heart","105":"Pulpit","106":"Ride the Rails","107":"Scat Daddy","108":"Smart Strike","109":"Southern Halo","110":"Stay Thirsty","111":"Street Cry","112":"Super Saver","113":"Tale of Ekati","114":"Unbridled","115":"Unbridled's Song"};
    for (var k in refNames) { DB.sire_names[k] = refNames[k]; }

    // Initialize data_sources as empty object if missing
    if (!DB.data_sources) {
        DB.data_sources = {};
    }

    // Patch sire_id for stallions missing their father reference
    var sireIdPatch = {"1":101,"2":71,"3":108,"4":97,"5":105,"6":102,"7":6,"8":99,"9":1,"10":34,"11":3,"12":81,"13":5,"14":34,"15":62,"16":75,"17":110,"18":1,"19":6,"20":75,"21":62,"22":8,"23":34,"24":5,"25":90,"26":5,"27":5,"28":95,"29":5,"30":115,"31":77,"32":5,"33":1,"34":100,"35":5,"36":77,"37":1,"38":5,"39":79,"40":3,"41":1,"42":111,"43":94,"44":5,"45":96,"46":90,"47":5,"48":107,"49":5,"50":5,"51":32,"52":5,"53":1,"54":5,"55":34,"56":1,"57":75,"58":5,"59":79,"60":42,"61":62,"62":94,"63":91,"64":71,"65":112,"66":1,"67":72,"68":113,"69":1,"70":1,"71":106,"72":80,"73":72,"74":115,"75":90,"76":93,"77":98,"78":96,"79":109,"80":114,"81":92,"82":103,"83":108,"84":5,"85":77,"86":5,"87":104,"88":99,"89":42};
    var sires = Array.isArray(DB.sires) ? DB.sires : Object.values(DB.sires);
    for (var i = 0; i < sires.length; i++) {
        var p = sireIdPatch[String(sires[i].id)];
        if (p && !sires[i].sire_id) {
            sires[i].sire_id = p;
        }
    }

    // Patch DQ scores with updated stakes-weighted L2 scoring (25/40/18/17 weights)
    var dqPatch = {"1":{"s":37.5,"l1":5.0,"l2":29.8,"l3":2.7,"l4":0.0},"2":{"s":36.7,"l1":18.0,"l2":16.0,"l3":2.7,"l4":0.0},"3":{"s":16.7,"l1":0.0,"l2":14.0,"l3":2.7,"l4":0.0},"4":{"s":14.7,"l1":0.0,"l2":12.0,"l3":2.7,"l4":0.0},"5":{"s":21.7,"l1":5.0,"l2":14.0,"l3":2.7,"l4":0.0},"6":{"s":30.0,"l1":6.0,"l2":21.3,"l3":2.7,"l4":0.0},"7":{"s":20.7,"l1":0.0,"l2":18.0,"l3":2.7,"l4":0.0},"8":{"s":40.9,"l1":12.0,"l2":26.2,"l3":2.7,"l4":0.0},"9":{"s":17.5,"l1":0.0,"l2":14.8,"l3":2.7,"l4":0.0},"10":{"s":16.0,"l1":5.0,"l2":11.0,"l3":0.0,"l4":0.0},"11":{"s":24.5,"l1":13.5,"l2":0.0,"l3":0.0,"l4":11.0},"12":{"s":26.5,"l1":5.0,"l2":18.8,"l3":2.7,"l4":0.0},"13":{"s":29.7,"l1":6.0,"l2":10.1,"l3":0.0,"l4":13.6},"14":{"s":24.6,"l1":0.0,"l2":11.0,"l3":0.0,"l4":13.6},"15":{"s":16.5,"l1":8.0,"l2":8.5,"l3":0.0,"l4":0.0},"16":{"s":22.5,"l1":9.0,"l2":1.6,"l3":0.0,"l4":11.9},"17":{"s":11.0,"l1":0.0,"l2":11.0,"l3":0.0,"l4":0.0},"18":{"s":8.5,"l1":0.0,"l2":8.5,"l3":0.0,"l4":0.0},"19":{"s":23.7,"l1":0.0,"l2":12.5,"l3":2.7,"l4":8.5},"20":{"s":63.5,"l1":12.0,"l2":35.2,"l3":2.7,"l4":13.6},"21":{"s":5.8,"l1":0.0,"l2":5.8,"l3":0.0,"l4":0.0},"22":{"s":17.7,"l1":5.0,"l2":10.0,"l3":2.7,"l4":0.0},"23":{"s":4.0,"l1":0.0,"l2":4.0,"l3":0.0,"l4":0.0},"24":{"s":23.7,"l1":5.0,"l2":16.0,"l3":2.7,"l4":0.0},"25":{"s":24.4,"l1":13.5,"l2":10.9,"l3":0.0,"l4":0.0},"26":{"s":11.0,"l1":0.0,"l2":11.0,"l3":0.0,"l4":0.0},"27":{"s":29.6,"l1":5.0,"l2":11.0,"l3":0.0,"l4":13.6},"28":{"s":47.8,"l1":25.0,"l2":20.1,"l3":2.7,"l4":0.0},"29":{"s":30.1,"l1":8.0,"l2":8.5,"l3":0.0,"l4":13.6},"30":{"s":40.9,"l1":12.0,"l2":26.2,"l3":2.7,"l4":0.0},"31":{"s":26.1,"l1":13.5,"l2":12.6,"l3":0.0,"l4":0.0},"32":{"s":26.0,"l1":5.0,"l2":21.0,"l3":0.0,"l4":0.0},"33":{"s":61.7,"l1":18.0,"l2":29.9,"l3":2.7,"l4":11.1},"34":{"s":17.1,"l1":9.0,"l2":8.1,"l3":0.0,"l4":0.0},"35":{"s":16.5,"l1":8.0,"l2":8.5,"l3":0.0,"l4":0.0},"36":{"s":49.9,"l1":12.0,"l2":35.2,"l3":2.7,"l4":0.0},"37":{"s":25.2,"l1":6.0,"l2":5.6,"l3":0.0,"l4":13.6},"38":{"s":54.8,"l1":5.0,"l2":33.5,"l3":2.7,"l4":13.6},"39":{"s":24.6,"l1":0.0,"l2":11.0,"l3":0.0,"l4":13.6},"40":{"s":39.1,"l1":8.0,"l2":17.3,"l3":2.7,"l4":11.1},"41":{"s":51.9,"l1":9.0,"l2":29.1,"l3":2.7,"l4":11.1},"42":{"s":35.1,"l1":18.0,"l2":17.1,"l3":0.0,"l4":0.0},"43":{"s":7.8,"l1":5.0,"l2":2.8,"l3":0.0,"l4":0.0},"44":{"s":16.5,"l1":8.0,"l2":8.5,"l3":0.0,"l4":0.0},"45":{"s":31.8,"l1":13.5,"l2":15.6,"l3":2.7,"l4":0.0},"46":{"s":16.0,"l1":5.0,"l2":11.0,"l3":0.0,"l4":0.0},"47":{"s":25.4,"l1":0.0,"l2":11.0,"l3":0.0,"l4":14.4},"48":{"s":23.7,"l1":5.0,"l2":16.0,"l3":2.7,"l4":0.0},"49":{"s":25.8,"l1":8.0,"l2":8.5,"l3":0.0,"l4":9.3},"50":{"s":28.5,"l1":0.0,"l2":25.8,"l3":2.7,"l4":0.0},"51":{"s":66.7,"l1":25.0,"l2":26.2,"l3":2.7,"l4":12.8},"52":{"s":36.6,"l1":12.0,"l2":11.0,"l3":0.0,"l4":13.6},"53":{"s":49.1,"l1":0.0,"l2":32.0,"l3":2.7,"l4":14.4},"54":{"s":37.2,"l1":6.0,"l2":14.9,"l3":2.7,"l4":13.6},"55":{"s":16.5,"l1":8.0,"l2":8.5,"l3":0.0,"l4":0.0},"56":{"s":13.6,"l1":0.0,"l2":2.5,"l3":0.0,"l4":11.1},"57":{"s":33.9,"l1":0.0,"l2":19.3,"l3":2.7,"l4":11.9},"58":{"s":8.5,"l1":0.0,"l2":8.5,"l3":0.0,"l4":0.0},"59":{"s":15.6,"l1":0.0,"l2":2.0,"l3":0.0,"l4":13.6},"60":{"s":16.0,"l1":5.0,"l2":11.0,"l3":0.0,"l4":0.0},"61":{"s":19.0,"l1":8.0,"l2":11.0,"l3":0.0,"l4":0.0},"62":{"s":21.6,"l1":9.0,"l2":12.6,"l3":0.0,"l4":0.0},"63":{"s":23.7,"l1":5.0,"l2":16.0,"l3":2.7,"l4":0.0},"64":{"s":23.6,"l1":8.0,"l2":2.0,"l3":0.0,"l4":13.6},"65":{"s":10.8,"l1":8.0,"l2":2.8,"l3":0.0,"l4":0.0},"66":{"s":29.8,"l1":0.0,"l2":16.0,"l3":2.7,"l4":11.1},"67":{"s":11.0,"l1":0.0,"l2":11.0,"l3":0.0,"l4":0.0},"68":{"s":16.0,"l1":5.0,"l2":11.0,"l3":0.0,"l4":0.0},"69":{"s":56.2,"l1":6.0,"l2":36.4,"l3":2.7,"l4":11.1},"70":{"s":26.3,"l1":0.0,"l2":12.5,"l3":2.7,"l4":11.1},"71":{"s":28.2,"l1":25.0,"l2":3.2,"l3":0.0,"l4":0.0},"72":{"s":30.6,"l1":13.5,"l2":17.1,"l3":0.0,"l4":0.0},"73":{"s":23.7,"l1":5.0,"l2":16.0,"l3":2.7,"l4":0.0},"74":{"s":30.1,"l1":8.0,"l2":8.5,"l3":0.0,"l4":13.6},"75":{"s":46.9,"l1":18.0,"l2":26.2,"l3":2.7,"l4":0.0},"76":{"s":33.7,"l1":0.0,"l2":31.0,"l3":2.7,"l4":0.0},"77":{"s":16.0,"l1":5.0,"l2":11.0,"l3":0.0,"l4":0.0},"78":{"s":25.0,"l1":8.0,"l2":8.5,"l3":0.0,"l4":8.5},"79":{"s":26.1,"l1":13.5,"l2":12.6,"l3":0.0,"l4":0.0},"80":{"s":42.5,"l1":5.0,"l2":34.8,"l3":2.7,"l4":0.0},"81":{"s":19.0,"l1":8.0,"l2":11.0,"l3":0.0,"l4":0.0},"82":{"s":16.0,"l1":5.0,"l2":11.0,"l3":0.0,"l4":0.0},"83":{"s":11.0,"l1":0.0,"l2":11.0,"l3":0.0,"l4":0.0},"84":{"s":28.8,"l1":6.0,"l2":20.1,"l3":2.7,"l4":0.0},"85":{"s":27.1,"l1":5.0,"l2":11.0,"l3":0.0,"l4":11.1},"86":{"s":30.1,"l1":8.0,"l2":8.5,"l3":0.0,"l4":13.6},"87":{"s":17.6,"l1":0.0,"l2":4.0,"l3":0.0,"l4":13.6},"88":{"s":2.0,"l1":0.0,"l2":2.0,"l3":0.0,"l4":0.0},"89":{"s":40.3,"l1":0.0,"l2":24.0,"l3":2.7,"l4":13.6}};
    for (var i = 0; i < sires.length; i++) {
        var p = dqPatch[String(sires[i].id)];
        if (p) {
            sires[i].dam_quality_score = p.s;
            sires[i].dam_quality_layer1 = p.l1;
            sires[i].dam_quality_layer2 = p.l2;
            sires[i].dam_quality_layer3 = p.l3;
            sires[i].dam_quality_layer4 = p.l4;
        }
    }

// Top winners corrections (source: BloodHorse Stallion Register + verified research, March 2026)
// Replaces ALL top_winners entries with verified data
var tw={
"1":[{n:"Laurel River",e:7508798,g:"G1W"},{n:"Authentic",e:7201200,g:"G1W"},{n:"Sovereignty",e:5835300,g:"G1W"},{n:"Life Is Good",e:4541700,g:"G1W"},{n:"Mandaloun",e:3356052,g:"G1W"}],
"2":[{n:"Sierra Leone",e:8196200,g:"G1W"},{n:"Echo Zulu",e:2640375,g:"G1W"},{n:"Gunite",e:2493009,g:"G1W"},{n:"Taiba",e:2356200,g:"G1W"},{n:"Vahva",e:2289010,g:"G1W"}],
"3":[{n:"Vino Rosso",e:4803125,g:"G1W"},{n:"Journalism",e:4348880,g:"G1W"},{n:"Idiomatic",e:3944190,g:"G1W"},{n:"Malathaat",e:3790825,g:"G1W"},{n:"Elite Power",e:3775711,g:"G1W"}],
"4":[{n:"Emblem Road",e:12021492,g:"G1W"},{n:"City of Light",e:5662600,g:"G1W"},{n:"National Treasure",e:5578000,g:"G1W"},{n:"Abel Tasman",e:2793385,g:"G1W"},{n:"Dunbar Road",e:1698740,g:"G1W"}],
"5":[{n:"Essential Quality",e:4905144,g:"G1W"},{n:"Testa Matta",e:4791677,g:"G1W"},{n:"Flightline",e:4514800,g:"G1W"},{n:"Frosted",e:3972800,g:"G1W"},{n:"Untapable",e:3926625,g:"G1W"}],
"6":[{n:"Nyquist",e:4712570,g:"G1W"},{n:"Golden Pal",e:2502660,g:"G1W"},{n:"Mo Town",e:1027600,g:"G1W"},{n:"Outwork",e:701800,g:"G1W"},{n:"Uncle Chuck",e:465400,g:"G2W"}],
"7":[{n:"Nysos",e:4738500,g:"G1W"},{n:"Immersive",e:1864900,g:"G1W"},{n:"Randomized",e:1764050,g:"G1W"},{n:"Johannes",e:1298359,g:"G1W"},{n:"Slow Down Andy",e:1276600,g:"G1W"}],
"8":[{n:"Magnitude",e:8544365,g:"G1W"},{n:"Epicenter",e:2940639,g:"G1W"},{n:"Up to the Mark",e:2511050,g:"G1W"},{n:"Cogburn",e:2422630,g:"G1W"},{n:"Sibelius",e:1803011,g:"G1W"}],
"9":[{n:"Mystik Dan",e:4819160,g:"G1W"},{n:"Positano Sunset",e:1054463,g:"G1W"},{n:"Going to Vegas",e:989151,g:"G1W"},{n:"By My Standards",e:2294430,g:"G2W"},{n:"Phantom Currency",e:374495,g:"G2W"}],
"10":[{n:"I\'m a Chatterbox",e:2354454,g:"G1W"},{n:"Howard Wolowitz",e:1793385,g:"G1W"},{n:"Jack Christopher",e:1216400,g:"G1W"},{n:"Kimari",e:1138827,g:"G1W"},{n:"Eda",e:689600,g:"G1W"}],
"11":[{n:"Mixto",e:3330680,g:"G1W"},{n:"Mage",e:2507450,g:"G1W"},{n:"Dornoch",e:2427275,g:"G1W"},{n:"Muth",e:1589600,g:"G1W"},{n:"Blazing Sevens",e:998850,g:"G1W"}],
"12":[{n:"Iron Orchard",e:372000,g:"G1W"},{n:"Rodriguez",e:622800,g:"G2W"},{n:"Westwood",e:318900,g:"G2W"},{n:"Brave Deb",e:108000,g:"G3W"},{n:"Tomasello",e:444251,g:"BTW"}],
"13":[{n:"Praying",e:476040,g:"G2W"},{n:"Five G",e:436840,g:"G2W"},{n:"Mad House",e:318015,g:"G2W"},{n:"Bottas",e:175000,g:"G2W"},{n:"Golden Vekoma",e:1068145,g:"G3W"}],
"14":[{n:"Shisospicy",e:2090270,g:"G1W"},{n:"Halina\'s Forte",e:562575,g:"G2W"},{n:"Booth",e:917991,g:"G3W"},{n:"V V\'s Dream",e:508911,g:"G3W"},{n:"Stormcast (CAN)",e:328553,g:"G3W"}],
"15":[{n:"Kopion",e:1204700,g:"G1W"},{n:"Nevada Beach",e:466500,g:"G1W"},{n:"And One More Time",e:344672,g:"G1W"},{n:"Kehoe Beach",e:556455,g:"G2W"},{n:"Kappa Kappa",e:281375,g:"G2W"}],
"16":[{n:"First crop racing in 2025",e:0,g:"â"}],
"17":[{n:"Coal Battle",e:1287675,g:"G2W"},{n:"Crazy Mason",e:584470,g:"G2W"},{n:"Haulin Ice",e:1227750,g:"G3W"},{n:"Good and Stout",e:403760,g:"BTW"},{n:"Xtreme Diva",e:330646,g:"BTW"}],
"18":[{n:"Raging Torrent",e:1797400,g:"G1W"},{n:"Intrepido",e:312800,g:"G1W"},{n:"Irish Maxima",e:613318,g:"G3W"},{n:"Ms. Tart",e:436897,g:"G3W"},{n:"Glengarry",e:693391,g:"BTW"}],
"19":[{n:"Mystic Lake",e:1582017,g:"G2W"},{n:"Key of Life",e:637775,g:"G2W"},{n:"Classic Mo Town",e:315179,g:"G2W"},{n:"Wentrue (CHI)",e:81148,g:"G2W"},{n:"Mo Stash",e:655312,g:"G3W"}],
"20":[{n:"Tamara",e:261400,g:"G1W"},{n:"Major Dude",e:1418747,g:"G2W"},{n:"Destino d\'Oro",e:949884,g:"G2W"},{n:"Look Forward",e:635675,g:"G2W"},{n:"Instant Coffee",e:574285,g:"G2W"}],
"23":[{n:"Rich Strike",e:2526809,g:"G1W"},{n:"King Ice",e:438756,g:"BTW"},{n:"Mano Dura",e:160680,g:"BTW"},{n:"Bold Leader",e:111542,g:"BTW"},{n:"Queen Macha",e:222132,g:"G3P"}],
"25":[{n:"Max Player",e:1551266,g:"G1W"},{n:"Honor A. P.",e:812500,g:"G1W"},{n:"Honor D. A.",e:430000,g:"G3W"}],
"26":[{n:"Ag Bullet",e:2977228,g:"G1W"},{n:"Fionn",e:2011670,g:"G1W"},{n:"Concrete Rose",e:1218650,g:"G1W"},{n:"Pinehurst",e:1213500,g:"G1W"},{n:"Gift Box",e:1127060,g:"G1W"}],
"27":[{n:"Rattle N Roll",e:3938941,g:"G1W"},{n:"Implicated",e:436115,g:"G2W"},{n:"Hidden Connection",e:851808,g:"G3W"},{n:"Forever After All",e:827454,g:"G3W"},{n:"Candy Quest",e:673356,g:"G3W"}],
"28":[{n:"Express Train",e:1640300,g:"G1W"},{n:"Paradise Woods",e:1123890,g:"G1W"},{n:"Power Squeeze",e:1027150,g:"G1W"},{n:"Free Drop Billy",e:662470,g:"G1W"},{n:"Union Strike",e:537625,g:"G1W"}],
"30":[{n:"Deterministic",e:1988515,g:"G1W"},{n:"Colonel Liam",e:1812565,g:"G1W"},{n:"Burnham Square",e:1759245,g:"G1W"},{n:"Juju\'s Map",e:775180,g:"G1W"},{n:"Basin",e:573640,g:"G1W"}],
"31":[{n:"Going to Vegas",e:520000,g:"G2W"}],
"32":[{n:"Tiz the Law",e:2735300,g:"G1W"},{n:"Mindframe",e:2054580,g:"G1W"},{n:"Americanrevolution",e:1286810,g:"G1W"},{n:"First Constitution (CHI)",e:327005,g:"G1W"},{n:"Breakpoint (CHI)",e:292163,g:"G1W"}],
"34":[{n:"Charlatan",e:4047200,g:"G1W"},{n:"Munnings",e:1005000,g:"G2W"},{n:"Haynesfield",e:2335000,g:"G1W"},{n:"Reynaldothewizard",e:1553000,g:"G1W"},{n:"Speightster",e:605000,g:"G3W"}],
"39":[{n:"Shedaresthedevil",e:2366458,g:"G1W"}],
"42":[{n:"McKinzie",e:3673360,g:"G1W"},{n:"Maxfield",e:2001812,g:"G1W"},{n:"Sweet Reason",e:1437700,g:"G1W"},{n:"Wedding Toast",e:1419956,g:"G1W"},{n:"Sense Of Occasion (AUS)",e:1301827,g:"G1W"}],
"43":[{n:"Le Romain (AUS)",e:3181578,g:"G1W"},{n:"Wicked Strong",e:1994460,g:"G1W"},{n:"Silver State",e:1933094,g:"G1W"},{n:"Aloha West",e:1507290,g:"G1W"},{n:"Gatting (AUS)",e:1482179,g:"G1W"}],
"44":[{n:"Post Time",e:1558705,g:"G2W"},{n:"Travel Column",e:698531,g:"G2W"},{n:"Arctic Glamour (AUS)",e:672413,g:"G2W"},{n:"Bustling (AUS)",e:377797,g:"G2W"},{n:"Jasper Krone",e:1507733,g:"G3W"}],
"45":[{n:"Songbird",e:4692000,g:"G1W"},{n:"Rachel Alexandra",e:3506730,g:"G1W"},{n:"Elate",e:2263000,g:"G1W"},{n:"Bolt d\'Oro",e:1016000,g:"BTW"},{n:"Violence",e:390000,g:"G1W"}],
"46":[{n:"Stay Thirsty",e:2360000,g:"G1W"},{n:"To Honor and Serve",e:2190000,g:"G1W"},{n:"Alpha",e:1886000,g:"G1W"},{n:"Cavorting",e:1550000,g:"G1W"},{n:"Rachel\'s Valentina",e:970000,g:"G1W"}],
"48":[{n:"City of Troy",e:3098555,g:"G1W"},{n:"Just F Y I",e:1727530,g:"G1W"},{n:"Scandinavia",e:1093001,g:"G1W"},{n:"Opera Singer",e:1027692,g:"G1W"},{n:"Ruling Court",e:797255,g:"G1W"}],
"49":[{n:"Ways and Means",e:997500,g:"G1W"},{n:"Practical Move",e:923200,g:"G1W"},{n:"Domestic Product",e:819200,g:"G1W"},{n:"Richi (CHI)",e:500424,g:"G1W"},{n:"Corsia Veloce (CAN)",e:378117,g:"G1W"}],
"51":[{n:"Usha",e:328350,g:"G1W"},{n:"Tiztastic",e:1597211,g:"G2W"},{n:"Fully Subscribed",e:355300,g:"G2W"},{n:"Scythian",e:239340,g:"G2W"},{n:"Non Compliant",e:165000,g:"G2W"}],
"56":[{n:"First Peace",e:779520,g:"G2W"},{n:"Funtastic Again",e:504043,g:"G3W"},{n:"Eclair Blanc",e:229100,g:"W"},{n:"Funtastic Vow",e:120138,g:"W"},{n:"Psychedelic",e:106730,g:"W"}],
"57":[{n:"One in Vermillion",e:653840,g:"G1W"},{n:"Federal Judge",e:464400,g:"G2W"},{n:"Ground Support",e:254000,g:"G2W"},{n:"Danse Macabre",e:1095878,g:"G3W"},{n:"Stanley House (CAN)",e:454946,g:"BTW"}],
"58":[{n:"Speed King",e:830190,g:"G3W"},{n:"T O Elvis",e:619112,g:"G3W"},{n:"Tip Top Thomas",e:527100,g:"G3W"},{n:"Fast Market",e:228788,g:"G3W"},{n:"Foie Gras",e:434076,g:"BTW"}],
"60":[{n:"Baeza",e:1643500,g:"G1W"},{n:"Chancer McPatrick",e:817875,g:"G1W"},{n:"Scottish Lassie",e:735760,g:"G1W"},{n:"Cash Call",e:182600,g:"G3W"},{n:"Quickick",e:584156,g:"BTW"}],
"61":[{n:"She Feels Pretty",e:2550592,g:"G1W"},{n:"Spendarella",e:795459,g:"G1W"},{n:"Princess Grace",e:1826441,g:"G2W"},{n:"None Above the Law",e:700962,g:"G2W"},{n:"Sugoi",e:920640,g:"G3W"}],
"62":[{n:"Lines of Battle",e:2647223,g:"G1W"},{n:"Homesman",e:2439738,g:"G1W"},{n:"War of Will",e:1881803,g:"G1W"},{n:"Declaration of War",e:1847489,g:"G1W"},{n:"Omaha Beach",e:1651800,g:"G1W"}],
"63":[{n:"Wet Paint",e:1304925,g:"G1W"},{n:"Marley\'s Freedom",e:1233935,g:"G1W"},{n:"Nadal",e:1053000,g:"G1W"},{n:"Senga",e:781854,g:"G1W"},{n:"Fault",e:618795,g:"G1W"}],
"64":[{n:"Gamine\'s Legacy",e:250000,g:"BTW"}],
"65":[{n:"Keepmeinmind",e:782000,g:"G2W"},{n:"Run Curtis Run",e:450000,g:"BTW"}],
"67":[{n:"Tony Ann",e:610393,g:"G2W"},{n:"Kiss Today Goodbye",e:414802,g:"G2W"},{n:"Royal Charlotte",e:408150,g:"G2W"},{n:"New and Improved",e:168725,g:"G2W"},{n:"Dean Martini",e:664780,g:"G3W"}],
"68":[{n:"Dorth Vader",e:1078218,g:"G1W"},{n:"Faiza",e:672000,g:"G1W"},{n:"Damon\'s Mound",e:1018405,g:"G2W"},{n:"Closethegame Sugar",e:599865,g:"BTW"},{n:"Power in Numbers",e:487087,g:"BTW"}],
"71":[{n:"Gun Runner",e:15988500,g:"G1W"},{n:"Hit Show",e:9412183,g:"G1W"},{n:"Shared Belief",e:2932200,g:"G1W"},{n:"Game Winner",e:2027500,g:"G1W"},{n:"Misremembered",e:1306709,g:"G1W"}],
"72":[{n:"American Pharoah",e:8650300,g:"G1W"},{n:"Classic Empire",e:2503000,g:"G1W"},{n:"Midnight Storm",e:1783111,g:"G1W"},{n:"Pioneerof the Nile\'s Spirit",e:400000,g:"BTW"}],
"73":[{n:"Cafe Pharoah",e:5450000,g:"G1W"},{n:"Harvey\'s Lil Goil",e:1035000,g:"G1W"},{n:"Danon Pharaoh",e:2100000,g:"G1W"},{n:"As Time Goes By",e:1200000,g:"G1W"},{n:"Forbidden Kingdom",e:800000,g:"G1W"}],
"74":[{n:"Secret Oath",e:2444767,g:"G1W"},{n:"Arcangelo",e:1754900,g:"G1W"},{n:"Artorius",e:850000,g:"G1W"}],
"75":[{n:"Orb",e:2612516,g:"G1W"},{n:"Carina Mia",e:1120000,g:"G1W"},{n:"Declan\'s Warrior",e:920000,g:"G1W"},{n:"Life At Ten",e:1002000,g:"G1W"},{n:"Gormley",e:1026000,g:"G1W"}],
"76":[{n:"Well Armed",e:5100000,g:"G1W"},{n:"Tizway",e:2550000,g:"G1W"},{n:"Colonel John",e:2170000,g:"G1W"},{n:"Tourist",e:1750000,g:"G1W"},{n:"Gemologist",e:1530000,g:"G1W"}],
"77":[{n:"Funny Cide",e:3890000,g:"G1W"},{n:"Drosselmeyer",e:3728000,g:"G1W"},{n:"Flower Alley",e:2525000,g:"G1W"},{n:"Hystericalady",e:1750000,g:"G1W"},{n:"Any Given Saturday",e:1500000,g:"G1W"}],
"78":[{n:"Stephanie\'s Kitten",e:4292904,g:"G1W"},{n:"Hawkbill",e:3200000,g:"G1W"},{n:"Big Blue Kitten",e:3000000,g:"G1W"},{n:"Bobby\'s Kitten",e:1424417,g:"G1W"},{n:"Oscar Performance",e:1185000,g:"G1W"}],
"79":[{n:"More Joyous",e:4506154,g:"G1W"},{n:"Roy H",e:3139765,g:"G1W"},{n:"Rushing Fall",e:2893000,g:"G1W"},{n:"Phelan Ready",e:2809560,g:"G1W"},{n:"Verrazano",e:1878013,g:"G1W"}],
"80":[{n:"Royal Delta",e:4811126,g:"G1W"},{n:"Pioneerof the Nile",e:1634200,g:"G1W"},{n:"Bodemeister",e:1335920,g:"G1W"},{n:"Country Star",e:920000,g:"G2W"},{n:"Emollient",e:850000,g:"G1W"}],
"81":[{n:"Mystic Guide",e:7593200,g:"G1W"},{n:"Goodnight Olive",e:2196000,g:"G1W"},{n:"Shaman Ghost",e:1900000,g:"G1W"},{n:"Liam\'s Map",e:1200000,g:"G1W"},{n:"Ghostly Presence",e:600000,g:"G2W"}],
"82":[{n:"Lemons Forever",e:600000,g:"G1W"},{n:"Richard\'s Kid",e:1100000,g:"G1W"},{n:"Citronnade",e:450000,g:"G1W"},{n:"Somali Lemonade",e:400000,g:"G1W"},{n:"Lemon Pop",e:350000,g:"G1W"}],
"83":[{n:"Accelerate",e:6617500,g:"G1W"},{n:"Mr. Z",e:402000,g:"G2W"}],
"84":[{n:"Country Grammer",e:14921320,g:"G1W"},{n:"Tonalist\'s Shape",e:402015,g:"G2W"},{n:"Who\'s the Star",e:375940,g:"G2W"},{n:"Tennessee Lamb",e:391201,g:"G3W"},{n:"Misty Veil",e:918843,g:"BTW"}],
"85":[{n:"Jackie\'s Warrior",e:2959164,g:"G1W"},{n:"Cloud Computing",e:1125200,g:"G1W"},{n:"Drain the Clock",e:698000,g:"G1W"},{n:"Complexity",e:616350,g:"G1W"},{n:"Macho Music",e:518357,g:"G2W"}],
"86":[{n:"Forte",e:3029830,g:"G1W"},{n:"Dr. Schivel",e:1347100,g:"G1W"},{n:"Mullikin",e:1164992,g:"G1W"},{n:"No Parole",e:369866,g:"G1W"},{n:"Volatile",e:341040,g:"G1W"}],
"87":[{n:"X Y Jet",e:3096513,g:"G1W"},{n:"World of Trouble",e:1263300,g:"G1W"},{n:"Lagynos",e:2010166,g:"G2W"},{n:"Bay Storm",e:1317690,g:"G2W"},{n:"Bucchero",e:947936,g:"G2W"}],
"88":[{n:"Pavel",e:2090351,g:"G1W"},{n:"Significant Form",e:817216,g:"G2W"},{n:"Mi Hermano Ramon",e:492640,g:"G2W"},{n:"King Cause",e:831661,g:"G3W"},{n:"My Boy Jack",e:776887,g:"G3W"}],
"89":[{n:"La Verdad",e:600000,g:"G2W"},{n:"Street Band",e:532000,g:"G2W"}]
};
DB.top_winners=DB.top_winners||{};for(var id in tw){DB.top_winners[id]=tw[id];}
console.log('[fix.js] Applied top_winners corrections for '+Object.keys(tw).length+' sires.');

    // Add dam top producers data for Dam Quality tab
DB.dam_top_producers = {
"1":[{"n":"Beholder","e":4811126,"g":"G1","w":"Breeders' Cup Distaff (x2), Pacific Classic","y":2015,"by":"Henny Hughes"},{"n":"Into Mischief","e":597080,"g":"G1","w":"CashCall Futurity","y":2007,"by":"Harlan's Holiday"},{"n":"Mendelssohn","e":959484,"g":"G1","w":"UAE Derby, Breeders' Cup Juvenile Turf","y":2018,"by":"Scat Daddy"},{"n":"My Miss Sophia","e":408600,"g":"G2","w":"Gazelle S.","y":2014,"by":"Unbridled's Song"},{"n":"America's Joy","e":210000,"g":"Stakes","w":"Stakes winner","y":2019,"by":"Tapit"}],
"2":[{"n":"Gun Runner","e":15988500,"g":"G1","w":"Breeders' Cup Classic, Pegasus World Cup","y":2018,"by":"Candy Ride"},{"n":"Quiet Meadow","e":185000,"g":"Stakes","w":"Stakes placed","y":2016,"by":"Ghostzapper"},{"n":"Giant Payday","e":125000,"g":"Ã¢ÂÂ","w":"Multiple winner","y":2017,"by":"Medaglia d'Oro"}],
"3":[{"n":"Curlin","e":10501800,"g":"G1","w":"Preakness S., Breeders' Cup Classic, Dubai World Cup","y":2008,"by":"Smart Strike"},{"n":"Palace","e":2540000,"g":"G1","w":"Metropolitan H., Cigar Mile","y":2017,"by":"City Zip"}],
"4":[{"n":"Quality Road","e":2612580,"g":"G1","w":"Florida Derby, Donn H., Met Mile","y":2010,"by":"Elusive Quality"},{"n":"Orchard Beach","e":280000,"g":"Stakes","w":"Stakes winner","y":2012,"by":"Elusive Quality"}],
"5":[{"n":"Tapit","e":557300,"g":"G1","w":"Wood Memorial S.","y":2004,"by":"Pulpit"},{"n":"Tapitsfly","e":507040,"g":"G1","w":"Just a Game S.","y":2013,"by":"Tapit"},{"n":"Inspiring","e":255000,"g":"G3","w":"Multiple graded","y":2010,"by":"Pulpit"}],
"6":[{"n":"Uncle Mo","e":1706440,"g":"G1","w":"Breeders' Cup Juvenile, Champagne S.","y":2010,"by":"Indian Charlie"},{"n":"Mo' Green","e":185000,"g":"Stakes","w":"Stakes placed","y":2015,"by":"Uncle Mo"}],
"7":[{"n":"Nyquist","e":3324680,"g":"G1","w":"Kentucky Derby, Breeders' Cup Juvenile, Florida Derby","y":2016,"by":"Uncle Mo"},{"n":"Frostmourne","e":320000,"g":"G3","w":"Stakes winner","y":2019,"by":"Speightstown"}],
"8":[{"n":"Not This Time","e":194000,"g":"G2","w":"Iroquois S.","y":2016,"by":"Giant's Causeway"},{"n":"Liam's Map","e":1380000,"g":"G1","w":"Breeders' Cup Dirt Mile, Woodward S.","y":2015,"by":"Unbridled's Song"},{"n":"Miss Macy Sue (producer)","e":0,"g":"Ã¢ÂÂ","w":"Dam of 2 GSW","y":2020,"by":"Ã¢ÂÂ"}],
"9":[{"n":"Goldencents","e":3740580,"g":"G1","w":"Breeders' Cup Dirt Mile (x2), Santa Anita Derby","y":2014,"by":"Into Mischief"}],
"10":[{"n":"Munnings","e":648600,"g":"G1","w":"Tom Fool H., Woody Stephens S.","y":2010,"by":"Speightstown"},{"n":"I'm a Chatterbox","e":2446200,"g":"G1","w":"Cotillion S., Coaching Club American Oaks","y":2015,"by":"Munnings"}],
"11":[{"n":"Good Magic","e":2945296,"g":"G1","w":"Breeders' Cup Juvenile, Blue Grass S., Haskell S.","y":2018,"by":"Curlin"},{"n":"New Magic","e":310000,"g":"Stakes","w":"Stakes winner","y":2022,"by":"Curlin"}],
"12":[{"n":"Authentic","e":7525000,"g":"G1","w":"Kentucky Derby, Breeders' Cup Classic, Haskell S.","y":2020,"by":"Into Mischief"},{"n":"Flameaway","e":649800,"g":"G2","w":"Sam F. Davis S., Lexington S.","y":2018,"by":"Scat Daddy"}],
"13":[{"n":"Vekoma","e":1335900,"g":"G1","w":"Carter H., Met Mile","y":2020,"by":"Candy Ride"},{"n":"National Flag","e":250000,"g":"Stakes","w":"Stakes winner","y":2022,"by":"Speightstown"}],
"14":[{"n":"Mitole","e":3024860,"g":"G1","w":"Breeders' Cup Sprint, Met Mile, Forego S.","y":2019,"by":"Eskendereya"}],
"15":[{"n":"Omaha Beach","e":1625000,"g":"G1","w":"Santa Anita Sprint Championship, Malibu S.","y":2019,"by":"War Front"},{"n":"Charming Kitten","e":380000,"g":"G3","w":"Multiple stakes","y":2015,"by":"Kitten's Joy"}],
"16":[{"n":"Battle of Midway","e":1720000,"g":"G1","w":"Breeders' Cup Dirt Mile, San Vicente S.","y":2017,"by":"Smart Strike"},{"n":"Cinnamon Twist","e":310000,"g":"Stakes","w":"Stakes winner","y":2019,"by":"Tapit"}],
"17":[{"n":"Coal Front","e":452600,"g":"G2","w":"Amsterdam S., Ack Ack S.","y":2018,"by":"Stay Thirsty"}],
"18":[{"n":"Maximus Mischief","e":296200,"g":"G2","w":"Remsen S.","y":2018,"by":"Into Mischief"}],
"19":[{"n":"Mo Town","e":1005400,"g":"G1","w":"Hollywood Derby, Remsen S.","y":2017,"by":"Uncle Mo"},{"n":"Mo Forza","e":842000,"g":"G1","w":"Frank E. Kilroe Mile S.","y":2021,"by":"Uncle Mo"}],
"20":[{"n":"Bolt d'Oro","e":910400,"g":"G1","w":"Del Mar Futurity, FrontRunner S.","y":2017,"by":"Medaglia d'Oro"},{"n":"Global Campaign","e":1620000,"g":"G1","w":"Woodward S., Charles Town Classic","y":2021,"by":"Curlin"}],
"21":[{"n":"Yaupon","e":1206000,"g":"G1","w":"Breeders' Cup Sprint, Amsterdam S.","y":2021,"by":"Uncle Mo"}],
"22":[{"n":"Epicenter","e":4114510,"g":"G1","w":"Travers S., Jim Dandy S., Louisiana Derby","y":2022,"by":"Not This Time"}],
"23":[{"n":"Keen Ice","e":3396650,"g":"G1","w":"Travers S.","y":2015,"by":"Curlin"}],
"24":[{"n":"Flightline","e":4510000,"g":"G1","w":"Breeders' Cup Classic, Pacific Classic, Met Mile","y":2022,"by":"Tapit"},{"n":"Jasper Prince","e":310000,"g":"Stakes","w":"Stakes winner","y":2021,"by":"Malibu Moon"}],
"25":[{"n":"Honor Code","e":2530000,"g":"G1","w":"Whitney S., Met Mile","y":2015,"by":"A.P. Indy"},{"n":"Noble Indy","e":510000,"g":"G2","w":"Louisiana Derby","y":2018,"by":"Take Charge Indy"},{"n":"Bluegrass Cat","e":1714388,"g":"G1","w":"2nd Kentucky Derby, Haskell S.","y":2006,"by":"Storm Cat"}],
"26":[{"n":"Twirling Candy","e":997300,"g":"G1","w":"Malibu S., Santa Anita Sprint Champ.","y":2011,"by":"Candy Ride"}],
"27":[{"n":"Connect","e":880000,"g":"G1","w":"Cigar Mile","y":2016,"by":"Curlin"},{"n":"Up in Smoke","e":350000,"g":"G3","w":"Stakes winner","y":2019,"by":"Curlin"}],
"28":[{"n":"Union Rags","e":1532263,"g":"G1","w":"Belmont S., Champagne S.","y":2012,"by":"Dixie Union"},{"n":"Dancing Rags","e":1080000,"g":"G1","w":"Frizette S., Alcibiades S.","y":2018,"by":"Union Rags"}],
"29":[{"n":"City of Light","e":3645000,"g":"G1","w":"Breeders' Cup Dirt Mile, Pegasus World Cup","y":2019,"by":"Quality Road"}],
"30":[{"n":"Liam's Map","e":1380000,"g":"G1","w":"Breeders' Cup Dirt Mile, Woodward S.","y":2015,"by":"Unbridled's Song"},{"n":"Not This Time","e":194000,"g":"G2","w":"Iroquois S.","y":2016,"by":"Giant's Causeway"}],
"31":[{"n":"Accelerate","e":6692580,"g":"G1","w":"Breeders' Cup Classic, Pacific Classic, Santa Anita H.","y":2018,"by":"Lookin At Lucky"}],
"32":[{"n":"Constitution","e":1070600,"g":"G1","w":"Florida Derby, Donn H.","y":2015,"by":"Tapit"},{"n":"Tiz the Law","e":2740300,"g":"G1","w":"Belmont S., Travers S., Florida Derby","y":2020,"by":"Constitution"}],
"33":[{"n":"Life Is Good","e":4410000,"g":"G1","w":"Breeders' Cup Dirt Mile, Pegasus World Cup, Whitney S.","y":2022,"by":"Into Mischief"},{"n":"Dr. Schivel","e":920000,"g":"G1","w":"Bing Crosby S.","y":2021,"by":"Violence"}],
"34":[{"n":"Speightstown","e":1258256,"g":"G1","w":"Breeders' Cup Sprint, Vanderbilt H.","y":2004,"by":"Gone West"},{"n":"Irap","e":990000,"g":"G2","w":"Ohio Derby, Indiana Derby","y":2017,"by":"Tiznow"}],
"35":[{"n":"Improbable","e":2510000,"g":"G1","w":"Whitney S., Awesome Again S., Gold Cup","y":2020,"by":"City Zip"}],
"36":[{"n":"Global Campaign","e":1620000,"g":"G1","w":"Woodward S., Charles Town Classic","y":2021,"by":"Curlin"},{"n":"Bolt d'Oro","e":910400,"g":"G1","w":"Del Mar Futurity, FrontRunner S.","y":2017,"by":"Medaglia d'Oro"}],
"37":[{"n":"Audible","e":1575000,"g":"G1","w":"Florida Derby","y":2018,"by":"Into Mischief"}],
"38":[{"n":"Yoshida","e":2053200,"g":"G1","w":"Woodward S., Old Forester Turf Classic","y":2018,"by":"Heart's Cry"}],
"39":[{"n":"Daredevil","e":987400,"g":"G1","w":"Champagne S.","y":2014,"by":"More Than Ready"},{"n":"Shedaresthedevil","e":2772200,"g":"G1","w":"Kentucky Oaks, Breeders' Cup Distaff","y":2021,"by":"Daredevil"}],
"40":[{"n":"Cody's Wish","e":3802800,"g":"G1","w":"Breeders' Cup Dirt Mile (x2), Forego S.","y":2023,"by":"Curlin"}],
"41":[{"n":"Maxfield","e":1774800,"g":"G1","w":"Woodward S., Clark S., Matt Winn S.","y":2021,"by":"Street Sense"}],
"42":[{"n":"Street Sense","e":4383200,"g":"G1","w":"Kentucky Derby, Breeders' Cup Juvenile, Travers S.","y":2007,"by":"Street Cry"}],
"43":[{"n":"Hard Spun","e":2673470,"g":"G1","w":"King's Bishop S., Lane's End S.","y":2007,"by":"Danzig"},{"n":"Hard Not to Love","e":1170000,"g":"G1","w":"Breeders' Cup F&M Sprint, La Brea S.","y":2019,"by":"Hard Spun"}],
"44":[{"n":"Frosted","e":3980000,"g":"G1","w":"Met Mile, Whitney S., Wood Memorial","y":2016,"by":"Tapit"},{"n":"Wicked Strong","e":1445500,"g":"G1","w":"Wood Memorial S.","y":2014,"by":"Hard Spun"}],
"45":[{"n":"Medaglia d'Oro","e":5754720,"g":"G1","w":"Travers S., Whitney H., Donn H.","y":2003,"by":"El Prado"},{"n":"Gabriellina","e":320000,"g":"Stakes","w":"Stakes winner","y":2007,"by":"El Prado"}],
"46":[{"n":"Bernardini","e":3060000,"g":"G1","w":"Preakness S., Travers S., Jockey Club Gold Cup","y":2006,"by":"A.P. Indy"},{"n":"Ralph the Rogue","e":280000,"g":"Stakes","w":"Stakes winner","y":2010,"by":"A.P. Indy"}],
"47":[{"n":"Essential Quality","e":4755144,"g":"G1","w":"Belmont S., Breeders' Cup Juvenile, Travers S.","y":2021,"by":"Tapit"}],
"48":[{"n":"Justify","e":3798000,"g":"G1","w":"Triple Crown, Santa Anita Derby","y":2018,"by":"Scat Daddy"},{"n":"The Great One","e":245000,"g":"Stakes","w":"Stakes winner","y":2022,"by":"Scat Daddy"}],
"49":[{"n":"Practical Joke","e":1643680,"g":"G1","w":"Champagne S., Hopeful S.","y":2017,"by":"Into Mischief"}],
"50":[{"n":"Jack Christopher","e":1215000,"g":"G1","w":"Haskell S., Champagne S.","y":2022,"by":"Munnings"}],
"51":[{"n":"Tiz the Law","e":2740300,"g":"G1","w":"Belmont S., Travers S., Florida Derby","y":2020,"by":"Constitution"}],
"52":[{"n":"Corniche","e":490000,"g":"G1","w":"Breeders' Cup Juvenile, American Pharoah S.","y":2021,"by":"Quality Road"},{"n":"Crying Shame","e":310000,"g":"Stakes","w":"Stakes winner","y":2020,"by":"Quality Road"}],
"53":[{"n":"Fierceness","e":2915000,"g":"G1","w":"Breeders' Cup Juvenile, Florida Derby, Travers S.","y":2024,"by":"City of Light"}],
"54":[{"n":"Sierra Leone","e":2284000,"g":"G1","w":"Blue Grass S., Belmont S.","y":2024,"by":"Gun Runner"}],
"55":[{"n":"Charlatan","e":4451000,"g":"G1","w":"Saudi Cup, Malibu S.","y":2021,"by":"Speightstown"}],
"56":[{"n":"Arabian Knight","e":1100000,"g":"G1","w":"Haskell S., Travers S.","y":2023,"by":"Uncle Mo"}],
"57":[{"n":"Army Mule","e":600000,"g":"G1","w":"Carter H.","y":2018,"by":"Friesan Fire"}],
"58":[{"n":"Volatile","e":487000,"g":"G1","w":"Alfred G. Vanderbilt H.","y":2020,"by":"Violence"}],
"59":[{"n":"Funtastic","e":350000,"g":"G3","w":"Multiple graded stakes","y":2020,"by":"More Than Ready"}],
"60":[{"n":"McKinzie","e":2225000,"g":"G1","w":"Whitney S., Pennsylvania Derby, Malibu S.","y":2019,"by":"Street Sense"},{"n":"Classier","e":610000,"g":"G1","w":"TVG Pacific Classic","y":2022,"by":"Empire Maker"}],
"61":[{"n":"Karakontie","e":1800000,"g":"G1","w":"Breeders' Cup Mile, Poule d'Essai des Poulains","y":2014,"by":"Bernstein"}],
"62":[{"n":"War Front","e":248760,"g":"G3","w":"Alfred G. Vanderbilt Breeders' Cup H.","y":2006,"by":"Danzig"},{"n":"U S Ranger","e":765000,"g":"G1","w":"National S. (IRE)","y":2005,"by":"Danzig"},{"n":"Declaration of War","e":1950000,"g":"G1","w":"Queen Anne S., International S.","y":2013,"by":"War Front"},{"n":"The Factor","e":1465800,"g":"G1","w":"Malibu S., Pat O'Brien S.","y":2012,"by":"War Front"}],
"63":[{"n":"Blame","e":4368920,"g":"G1","w":"Breeders' Cup Classic, Whitney S., Stephen Foster H.","y":2010,"by":"Arch"}],
"64":[{"n":"Mastery","e":490000,"g":"G1","w":"San Felipe S.","y":2017,"by":"Candy Ride"}],
"65":[{"n":"Runhappy","e":1491600,"g":"G1","w":"Breeders' Cup Sprint, King's Bishop S.","y":2015,"by":"Super Saver"}],
"66":[{"n":"Mindframe","e":650000,"g":"G1","w":"Breeders' Cup Juvenile","y":2024,"by":"Constitution"}],
"67":[{"n":"Cairo Prince","e":612000,"g":"G2","w":"Nashua S., Holy Bull S.","y":2014,"by":"Pioneerof the Nile"},{"n":"Tempted Princess","e":280000,"g":"Stakes","w":"Stakes winner","y":2018,"by":"Pioneerof the Nile"}],
"68":[{"n":"Girvin","e":1193400,"g":"G1","w":"Haskell Invitational, Louisiana Derby","y":2017,"by":"Tale of Ekati"}],
"69":[{"n":"Mage","e":4018000,"g":"G1","w":"Kentucky Derby","y":2023,"by":"Good Magic"}],
"70":[{"n":"Mystik Dan","e":3170000,"g":"G1","w":"Kentucky Derby","y":2024,"by":"Goldencents"}],
"71":[{"n":"Candy Ride","e":1055000,"g":"G1","w":"Pacific Classic","y":2003,"by":"Ride the Rails"}],
"72":[{"n":"Pioneerof the Nile","e":1635000,"g":"G1","w":"Santa Anita Derby, CashCall Futurity","y":2009,"by":"Empire Maker"},{"n":"American Pharoah","e":8650300,"g":"G1","w":"Triple Crown, Breeders' Cup Classic","y":2015,"by":"Pioneerof the Nile"}],
"73":[{"n":"American Pharoah","e":8650300,"g":"G1","w":"Triple Crown, Breeders' Cup Classic","y":2015,"by":"Pioneerof the Nile"},{"n":"Chasing Yesterday","e":530000,"g":"G1","w":"Santa Ysabel S., Las Virgenes S.","y":2019,"by":"Tapit"}],
"74":[{"n":"Arrogate","e":17422600,"g":"G1","w":"Breeders' Cup Classic, Dubai World Cup, Pegasus World Cup, Travers S.","y":2017,"by":"Unbridled's Song"}],
"75":[{"n":"Malibu Moon","e":308000,"g":"G3","w":"Stakes winner","y":2001,"by":"A.P. Indy"},{"n":"Declan's Moon","e":752200,"g":"G1","w":"Hollywood Futurity","y":2005,"by":"Malibu Moon"}],
"76":[{"n":"Tiznow","e":6427830,"g":"G1","w":"Breeders' Cup Classic (x2), Santa Anita H., Super Derby","y":2001,"by":"Cee's Tizzy"},{"n":"Colonel John","e":2170000,"g":"G1","w":"Santa Anita Derby, Travers S.","y":2008,"by":"Tiznow"}],
"77":[{"n":"Distorted Humor","e":769880,"g":"G1","w":"Commonwealth Breeders' Cup S.","y":2000,"by":"Forty Niner"},{"n":"Funny Cide","e":3890000,"g":"G1","w":"Kentucky Derby, Preakness S.","y":2003,"by":"Distorted Humor"},{"n":"Flower Alley","e":2525000,"g":"G1","w":"Travers S.","y":2005,"by":"Distorted Humor"}],
"78":[{"n":"Kitten's Joy","e":2075120,"g":"G1","w":"Joe Hirsch Turf Classic, Secretariat S.","y":2004,"by":"El Prado"},{"n":"Kitten's Dumplings","e":650000,"g":"G1","w":"Queen Elizabeth II Challenge Cup","y":2015,"by":"Kitten's Joy"}],
"79":[{"n":"More Than Ready","e":1505000,"g":"G1","w":"King's Bishop S., Sanford S.","y":2000,"by":"Southern Halo"},{"n":"Phelan Ready","e":1800000,"g":"G1","w":"Sprint Classic (AUS)","y":2015,"by":"More Than Ready"}],
"80":[{"n":"Empire Maker","e":1985800,"g":"G1","w":"Belmont S., Florida Derby, Wood Memorial","y":2003,"by":"Unbridled"},{"n":"Chester House","e":1680000,"g":"G1","w":"Arlington Million","y":2000,"by":"Mr. Prospector"},{"n":"Honest Lady","e":1050000,"g":"G1","w":"Apple Blossom H.","y":2003,"by":"Seattle Slew"}],
"81":[{"n":"Ghostzapper","e":3446120,"g":"G1","w":"Breeders' Cup Classic, Woodward S., Met Mile","y":2004,"by":"Awesome Again"},{"n":"City Zip","e":569510,"g":"G1","w":"Hopeful S.","y":2000,"by":"Carson City"},{"n":"Ghost Zapper","e":250000,"g":"Stakes","w":"Stakes winner","y":2008,"by":"Awesome Again"}],
"82":[{"n":"Lemon Drop Kid","e":3245370,"g":"G1","w":"Belmont S., Whitney H., Travers S.","y":2000,"by":"Kingmambo"},{"n":"Beach Patrol","e":2350000,"g":"G1","w":"Arlington Million, Secretariat S.","y":2017,"by":"Lemon Drop Kid"}],
"83":[{"n":"Lookin At Lucky","e":2415250,"g":"G1","w":"Preakness S., Haskell S.","y":2010,"by":"Smart Strike"},{"n":"Lookin At Lee","e":1118000,"g":"G2","w":"Risen Star S., 2nd Kentucky Derby","y":2017,"by":"Lookin At Lucky"}],
"84":[{"n":"Tonalist","e":3647000,"g":"G1","w":"Belmont S., Jockey Club Gold Cup (x2)","y":2015,"by":"Tapit"},{"n":"Tonalist's Shape","e":1020000,"g":"G1","w":"Acorn S., Test S.","y":2021,"by":"Tonalist"}],
"85":[{"n":"Maclean's Music","e":115000,"g":"Stakes","w":"Stakes winner","y":2011,"by":"Distorted Humor"},{"n":"Jackie's Warrior","e":2814720,"g":"G1","w":"Breeders' Cup Sprint, Hopeful S., Champagne S.","y":2022,"by":"Maclean's Music"},{"n":"Cloud Computing","e":915000,"g":"G1","w":"Preakness Stakes","y":2017,"by":"Maclean's Music"}],
"86":[{"n":"Violence","e":460000,"g":"G1","w":"CashCall Futurity, Nashua S.","y":2012,"by":"Medaglia d'Oro"},{"n":"Dr. Schivel","e":920000,"g":"G1","w":"Bing Crosby S.","y":2021,"by":"Violence"},{"n":"No Parole","e":480000,"g":"G1","w":"Woody Stephens S.","y":2020,"by":"Violence"}],
"87":[{"n":"Kantharos","e":250000,"g":"G2","w":"Swale S.","y":2010,"by":"Lion Heart"},{"n":"X Y Jet","e":2200000,"g":"G1","w":"Dubai Golden Shaheen (x2)","y":2019,"by":"Kantharos"},{"n":"Forte","e":1350000,"g":"G1","w":"Breeders' Cup Juvenile, Hopeful S.","y":2023,"by":"Violence"}],
"88":[{"n":"Creative Cause","e":1220000,"g":"G1","w":"Norfolk S., San Felipe S.","y":2012,"by":"Giant's Causeway"},{"n":"Pavel","e":1020000,"g":"G1","w":"Malibu S., Pat O'Brien S.","y":2017,"by":"Creative Cause"},{"n":"Flagstaff","e":780000,"g":"G1","w":"Churchill Downs S.","y":2021,"by":"Speightstown"}],
"89":[{"n":"Street Boss","e":470000,"g":"G1","w":"Bing Crosby H.","y":2008,"by":"Street Cry"},{"n":"My Boy Jack","e":1150000,"g":"G3","w":"Lexington S.","y":2018,"by":"Creative Cause"}],
};

  // Differentiate first_crop_sire vs first_season_sire (March 2026)
  // First Crop Sires: first 2yos racing 2026 (bred 2023, foals born 2024)
  // First Season Sires: breeding first time 2026 (first_crop_year 2027)
  var fcIds=[22,24,33,50,52];var fsIds=[53,54,66,70];
  DB.sires.forEach(function(s){s.first_crop_sire=0;s.first_season_sire=0;if(fcIds.indexOf(s.id)!==-1){s.first_season_flag=0;s.first_crop_sire=1;}if(fsIds.indexOf(s.id)!==-1){s.first_season_sire=1;}});
  console.log('[fix.js] Differentiated first_crop_sire (5) vs first_season_sire (4).');
})();
