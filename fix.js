// Fix DB format for the Stallion Intelligence Platform
(function() {
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

  // Initialize data_sources as empty object if missing
  if (!DB.data_sources) {
    DB.data_sources = {};
  }
})();
