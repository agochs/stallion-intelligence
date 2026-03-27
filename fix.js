// Only convert DB.sires from object to array (for .forEach, .find, .length)
// Keep dams, race_records, fee_history, pedigree_nodes, sire_names, data_sources as objects (used for keyed lookups)
(function() {
  if (DB.sires && !Array.isArray(DB.sires)) {
    DB.sires = Object.values(DB.sires);
  }
})();
