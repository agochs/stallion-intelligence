// Convert DB properties from objects (keyed by ID) to arrays
(function() {
  var keys = ['sires','dams','race_records','fee_history','dam_quality_scores','pedigree_nodes','data_sources','sire_names'];
    keys.forEach(function(k) {
        if (DB[k] && !Array.isArray(DB[k])) DB[k] = Object.values(DB[k]);
          });
            // Clean up stray text nodes in body (from embedded DB data)
              document.addEventListener('DOMContentLoaded', function() {
                  var body = document.body;
                      var nodes = body.childNodes;
                          for (var i = nodes.length - 1; i >= 0; i--) {
                                if (nodes[i].nodeType === 3) nodes[i].textContent = '';
                                    }
                                      });
                                      })();
