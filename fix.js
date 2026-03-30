// fix.js â Equibase-verified race record corrections
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

  // Convert DB properties from objects (keyed by ID) to arrays
  ['sires','dams','race_records','fee_history','dam_quality_scores','pedigree_nodes'].forEach(function(key) {
    if (DB[key] && !Array.isArray(DB[key])) {
      DB[key] = Object.values(DB[key]);
    }
  });
  if (DB.data_sources && !Array.isArray(DB.data_sources)) DB.data_sources = Object.values(DB.data_sources);
  if (DB.sire_names && !Array.isArray(DB.sire_names)) DB.sire_names = Object.values(DB.sire_names);
  console.log('[fix.js] Converted DB properties to arrays.');
})();
