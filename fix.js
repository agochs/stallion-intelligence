// fix.js — Equibase-verified race record corrections
// Source: equibase.com horse profiles, verified March 2026
// Patches DB.sires career_starts, career_wins, career_places, career_shows, career_earnings
// Only horses with confirmed mismatches are patched. "Not This Time" (#8) could not be found on Equibase.

(function() {
  if (typeof DB === 'undefined' || !DB.sires) return;

  var fixes = {
    // id: [starts, wins, places, shows, earnings]
    4:  [13, 8, 3, 1, 2232830],    // Quality Road
    5:  [6, 3, 0, 0, 557300],      // Tapit
    7:  [11, 8, 0, 1, 5189200],    // Nyquist
    10: [14, 4, 2, 5, 742640],     // Munnings
    11: [9, 3, 3, 1, 2945000],     // Good Magic
    12: [8, 6, 2, 0, 7201200],     // Authentic
    13: [8, 6, 0, 1, 1245525],     // Vekoma
    14: [14, 10, 2, 2, 3104910],   // Mitole
    15: [10, 5, 4, 1, 1651800],    // Omaha Beach
    16: [16, 8, 4, 2, 1589049],    // Battle of Midway
    17: [13, 8, 0, 1, 1825280],    // Coal Front
    18: [4, 3, 0, 1, 225700],      // Maximus Mischief
    19: [10, 4, 1, 2, 519600],     // Mo Town
    20: [8, 5, 0, 1, 1416000],     // Bolt d'Oro
    21: [8, 6, 0, 0, 703264],      // Yaupon
    22: [11, 6, 3, 0, 2940639],    // Epicenter
    23: [24, 3, 4, 5, 3407245],    // Keen Ice
    24: [6, 6, 0, 0, 4514800],     // Flightline
    25: [11, 6, 2, 2, 2518260],    // Honor Code
    26: [11, 7, 1, 1, 944900],     // Twirling Candy
    27: [8, 6, 0, 1, 1370000],     // Connect
    28: [8, 5, 1, 1, 1798800],     // Union Rags
    29: [11, 6, 4, 1, 5662600],    // City of Light
    30: [8, 6, 2, 0, 1358940],     // Liam's Map
    31: [23, 10, 5, 6, 6692480],   // Accelerate
    32: [8, 4, 0, 1, 1031596],     // Constitution
    33: [12, 9, 1, 0, 4541700],    // Life Is Good
    34: [16, 10, 2, 2, 1258256],   // Speightstown
    35: [15, 7, 4, 0, 2729520],    // Improbable
    36: [10, 6, 0, 2, 1321080],    // Global Campaign
    37: [10, 5, 1, 2, 2130520],    // Audible
    38: [18, 5, 4, 1, 2505770],    // Yoshida
    39: [5, 2, 1, 0, 424600],      // Daredevil
    40: [16, 11, 1, 4, 3106030],   // Cody's Wish
    41: [11, 8, 2, 1, 2001812],    // Maxfield
    42: [13, 6, 4, 2, 4383200],    // Street Sense
    43: [13, 7, 3, 1, 2673470],    // Hard Spun
    44: [19, 6, 6, 2, 3972800],    // Frosted
    45: [17, 8, 7, 0, 5754720],    // Medaglia d'Oro
    46: [8, 6, 1, 0, 3060480],     // Bernardini
    47: [10, 8, 0, 2, 4905144],    // Essential Quality
    48: [6, 5, 0, 0, 3198000],     // Justify
    49: [12, 5, 2, 3, 1795800],    // Practical Joke
    50: [6, 5, 0, 1, 1216400],     // Jack Christopher
    51: [9, 6, 1, 1, 2735300],     // Tiz the Law
    52: [4, 3, 0, 0, 1263500],     // Corniche
    53: [14, 7, 2, 2, 5785320],    // Fierceness
    54: [14, 5, 6, 3, 8196200],    // Sierra Leone
    55: [5, 4, 1, 0, 4047200],     // Charlatan
    56: [6, 3, 0, 1, 1562275],     // Arabian Knight
    57: [3, 3, 0, 0, 311400],      // Army Mule
    58: [6, 5, 1, 0, 341040],      // Volatile
    59: [11, 4, 2, 1, 410711],     // Funtastic
    60: [18, 8, 6, 0, 3673360],    // McKinzie
    61: [12, 5, 2, 1, 1967099],    // Karakontie
    62: [13, 4, 5, 1, 424205],     // War Front
    63: [13, 9, 2, 2, 4368214],    // Blame
    64: [4, 4, 0, 0, 511200],      // Mastery
    65: [10, 7, 0, 0, 1496250],    // Runhappy
    66: [9, 5, 2, 0, 2054580],     // Mindframe
    67: [5, 3, 1, 0, 562000],      // Cairo Prince
    68: [10, 4, 3, 0, 1624392],    // Girvin
    69: [7, 2, 2, 1, 2507450],     // Mage
    70: [16, 5, 3, 1, 4819160],    // Mystik Dan
    71: [6, 6, 0, 0, 749149],      // Candy Ride (US only)
    72: [10, 5, 1, 1, 1634200],    // Pioneerof the Nile
    73: [11, 9, 1, 0, 8650300],    // American Pharoah
    74: [11, 7, 1, 1, 17422600],   // Arrogate
    75: [2, 1, 1, 0, 33840],       // Malibu Moon
    76: [15, 8, 4, 2, 6427830],    // Tiznow
    77: [23, 8, 5, 3, 769964],     // Distorted Humor
    78: [14, 9, 4, 0, 2075791],    // Kitten's Joy
    79: [17, 7, 4, 1, 1026229],    // More Than Ready
    80: [8, 4, 3, 1, 1985800],     // Empire Maker
    81: [11, 9, 0, 1, 3446120],    // Ghostzapper
    82: [24, 10, 3, 3, 3245370],   // Lemon Drop Kid
    83: [13, 9, 1, 1, 3307278],    // Lookin At Lucky
    84: [16, 7, 4, 2, 3647000],    // Tonalist
    85: [1, 1, 0, 0, 32400],       // Maclean's Music
    86: [4, 3, 1, 0, 623000],      // Violence
    87: [3, 3, 0, 0, 185213],      // Kantharos
    88: [10, 4, 2, 3, 1039000],    // Creative Cause
    89: [13, 7, 3, 1, 831800]      // Street Boss
  };

  var fields = ['career_starts', 'career_wins', 'career_places', 'career_shows', 'career_earnings'];
  var patched = 0;

  for (var id in fixes) {
    if (DB.sires[id]) {
      var vals = fixes[id];
      for (var i = 0; i < fields.length; i++) {
        DB.sires[id][fields[i]] = vals[i];
      }
      patched++;
    }
  }

  console.log('[fix.js] Patched ' + patched + ' sire race records from Equibase-verified data.');


  // === Production stats from BloodHorse sire list (April 2026) ===
  // Format: [foals, starters, winners, btw, gsw, g1w]
  var pf = {
    90: [315, 62, 15, 7, 5, 0],    // Oscar Performance
    91: [432, 50, 10, 2, 1, 1],    // Exaggerator
    92: [644, 184, 41, 11, 8, 0],    // Mendelssohn
    93: [299, 92, 25, 3, 2, 1],    // Flameaway
    94: [134, 55, 19, 7, 5, 0],    // Honor A. P.
    95: [281, 36, 10, 6, 4, 0],    // The Big Beast
    96: [451, 136, 38, 4, 2, 0],    // Vino Rosso
    97: [904, 130, 40, 6, 4, 0],    // Midshipman
    98: [133, 48, 12, 2, 1, 0],    // Tacitus
    99: [357, 99, 29, 5, 3, 0],    // Collected
    100: [204, 66, 20, 3, 2, 0],    // Solomini
    101: [357, 75, 21, 5, 4, 0],    // Star Guitar
    102: [438, 85, 24, 3, 3, 0],    // Upstart
    103: [186, 63, 17, 4, 3, 0],    // Instagrand
    104: [628, 83, 24, 2, 1, 0],    // Dialed In
    105: [498, 88, 26, 1, 1, 0],    // Khozan
    106: [308, 100, 28, 6, 4, 0],    // Cloud Computing
    107: [202, 71, 18, 3, 2, 0],    // Rock Your World
    108: [238, 42, 11, 4, 3, 0],    // Golden Lad
    109: [271, 69, 21, 1, 1, 0],    // Cupid
    110: [245, 47, 15, 2, 2, 0],    // Bucchero
    111: [144, 41, 10, 3, 3, 0],    // Aurelius Maximus
    112: [117, 32, 11, 1, 1, 0],    // Blofeld
    113: [574, 75, 28, 4, 2, 0],    // Stay Thirsty
    114: [469, 113, 29, 5, 4, 0],    // West Coast
    115: [530, 73, 15, 2, 2, 0],    // Grazen
    116: [205, 78, 16, 2, 2, 0],    // Complexity
    117: [532, 63, 13, 3, 3, 0],    // Take Charge Indy
    118: [184, 64, 19, 5, 4, 0],    // Neolithic
    119: [886, 125, 25, 1, 1, 0],    // The Factor
    120: [291, 59, 14, 0, 0, 0],    // Clubhouse Ride
    121: [527, 63, 19, 1, 1, 0],    // Sir Prancealot (IRE)
    122: [447, 53, 19, 3, 3, 0],    // Adios Charlie
    123: [140, 25, 11, 1, 1, 0],    // Valiant Minister
    124: [180, 59, 16, 1, 1, 0],    // Marking
    125: [149, 53, 16, 3, 2, 0],    // Independence Hall
    126: [665, 62, 24, 3, 2, 0],    // Jimmy Creed
    127: [142, 59, 15, 4, 3, 0],    // Spun to Run
    128: [139, 51, 18, 4, 3, 0],    // Awesome Slew
    129: [293, 76, 21, 4, 3, 0],    // War of Will
    130: [118, 28, 13, 4, 3, 0],    // Cajun Breeze
    131: [420, 74, 20, 0, 0, 0],    // Unified
    132: [334, 56, 15, 2, 2, 0],    // Cinco Charlie
    133: [214, 38, 12, 1, 1, 0],    // Munitions
    134: [288, 61, 19, 3, 2, 0],    // American Freedom
    135: [209, 59, 15, 2, 2, 0],    // Game Winner
    136: [128, 50, 18, 2, 2, 0],    // Echo Town
    137: [366, 65, 19, 0, 0, 0],    // Gormley
    138: [247, 53, 12, 1, 1, 0],    // Hoppertunity
    139: [132, 35, 8, 0, 0, 0],    // Street Strategy
    140: [386, 47, 15, 2, 2, 0],    // Summer Front
    141: [480, 62, 17, 2, 2, 0],    // Outwork
    142: [278, 60, 12, 1, 1, 0],    // Good Samaritan
    143: [600, 45, 15, 0, 0, 0],    // Great Notion
    144: [313, 51, 11, 1, 1, 0],    // Uncle Lino
    145: [927, 42, 9, 2, 2, 0],    // Midnight Lute
    146: [181, 53, 17, 2, 1, 0],    // El Deal
    147: [104, 36, 14, 1, 1, 0],    // Win Win Win
    148: [162, 52, 16, 1, 1, 0],    // Lexitonian
    149: [197, 73, 18, 0, 0, 0],    // Catholic Boy
    150: [320, 44, 14, 0, 0, 0],    // Brody's Cause
    151: [260, 50, 17, 5, 3, 0],    // Midnight Storm
    152: [120, 25, 11, 2, 1, 0],    // Protonico
    153: [298, 38, 12, 1, 1, 0],    // Competitive Edge
    154: [264, 28, 10, 0, 0, 0],    // Weigelia
    155: [215, 75, 15, 1, 1, 0],    // Thousand Words
    156: [175, 41, 9, 0, 0, 0],    // Mark Valeski
    157: [123, 24, 6, 3, 2, 0],    // Noble Bird
    158: [199, 37, 13, 0, 0, 0],    // Divining Rod
    159: [170, 39, 13, 3, 2, 0],    // Om
    160: [469, 49, 16, 0, 0, 0],    // Cross Traffic
    161: [118, 41, 8, 2, 1, 0],    // Beau Liam
    162: [255, 39, 12, 0, 0, 0],    // Anchor Down
  };

  var pfFields = ['total_foals', 'total_starters', 'total_winners', 'black_type_winners', 'graded_stakes_winner_offspring', 'g1_winners'];
  var pfPatched = 0;
  for (var id in pf) {
    if (DB.sires[id]) {
      var vals = pf[id];
      for (var i = 0; i < pfFields.length; i++) {
        DB.sires[id][pfFields[i]] = vals[i];
      }
      pfPatched++;
    }
  }
  console.log('[fix.js] Patched ' + pfPatched + ' sire production records from BloodHorse data.');

  // Convert DB properties from objects (keyed by ID) to arrays
  ['sires','race_records','fee_history','dam_quality_scores'].forEach(function(key) {
    if (DB[key] && !Array.isArray(DB[key])) {
      DB[key] = Object.values(DB[key]);
    }
  });
  if (DB.data_sources && !Array.isArray(DB.data_sources)) DB.data_sources = Object.values(DB.data_sources);
  // NOTE: Do NOT convert sire_names to array — it must stay as an object for ID-based lookup

  // Build sire_names lookup from sires array (maps sire ID → name)
  DB.sire_names = {};
  var siresArr = Array.isArray(DB.sires) ? DB.sires : Object.values(DB.sires || {});
  for (var i = 0; i < siresArr.length; i++) {
    DB.sire_names[String(siresArr[i].id)] = siresArr[i].name;
  }
  console.log('[fix.js] Built sire_names lookup with ' + Object.keys(DB.sire_names).length + ' entries.');

  // Fill in missing sire display names from pedigree data
  // For stallions with null sire_id (sire not in DB), extract sire/dam/BMS names from pedigree nodes
  var pn = DB.pedigree_nodes || {};
  var siresArr2 = Array.isArray(DB.sires) ? DB.sires : Object.values(DB.sires || {});
  var pedigreePatched = 0;
  for (var i = 0; i < siresArr2.length; i++) {
    var s = siresArr2[i];
    var nodes = pn[String(s.id)];
    if (!nodes || !nodes.length) continue;
    // Build a quick path→name map for this stallion's pedigree
    var pathMap = {};
    for (var j = 0; j < nodes.length; j++) {
      pathMap[nodes[j].tree_path] = nodes[j].horse_name;
    }
    // If sire_id is null but pedigree has sire name, store it in sire_names with a synthetic key
    if (!s.sire_id && pathMap['RS']) {
      var syntheticKey = 'pedigree_sire_' + s.id;
      DB.sire_names[syntheticKey] = pathMap['RS'];
      s.sire_id = syntheticKey;
      pedigreePatched++;
    }
    // If dam_sire_id is null but pedigree has broodmare sire, store similarly
    if (!s.dam_sire_id && pathMap['RDS']) {
      var bmsKey = 'pedigree_bms_' + s.id;
      DB.sire_names[bmsKey] = pathMap['RDS'];
      s.dam_sire_id = bmsKey;
    }
    // If dam name is missing, fill from pedigree
    if (s.dam_id) {
      var damObj = DB.dams ? DB.dams[String(s.dam_id)] : null;
      if (!damObj && pathMap['RD']) {
        // Dam record doesn't exist — create a minimal one
        if (!DB.dams) DB.dams = {};
        DB.dams[String(s.dam_id)] = {id: s.dam_id, name: pathMap['RD']};
      }
    }
  }
  console.log('[fix.js] Filled ' + pedigreePatched + ' missing sire names from pedigree data.');

  console.log('[fix.js] Converted DB properties to arrays.');
})();
