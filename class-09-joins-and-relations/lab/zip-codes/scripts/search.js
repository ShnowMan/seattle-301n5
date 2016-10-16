(function(module) {

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  function mapFunc(){}

  mapFunc.statesPop = function(){
      webDB.execute([{
        'sql': 'SELECT DISTINCT state FROM zips ORDER BY state'
      }], function(results){
        console.log(results);
        results.forEach(function(result){
          $('#state-select').append('<option>' + result.state + '</option>')
        })
      });
  };

  module.mapFunc = mapFunc;
})(window)
