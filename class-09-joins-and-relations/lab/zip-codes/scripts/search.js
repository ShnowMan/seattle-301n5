(function(module) {

  // TODO: Write the code to populate your filters, and enable the search queries here in search.js
  // TODO: You will also interact with the map.js file here
  function mapFunc(){}

  mapFunc.zipSearch = function(){
    $('form').on('submit', function(event){
      event.preventDefault();
      if($('input[name="zip"]')){
        initMap.update();
      }
    })
  }

  mapFunc.statesPop = function(){
    webDB.execute([{
      'sql': 'SELECT DISTINCT state FROM zips ORDER BY state'
    }], function(results){
      results.forEach(function(result){
        $('#state-select').append('<option>' + result.state + '</option>')
      })
    });
  };

  mapFunc.cityPop = function(){
    $('#state-select').on('change', function(){
      webDB.execute([{
        'sql': 'SELECT DISTINCT city FROM zips WHERE state = ? ORDER BY city',
        'data': [$('#state-select').val()]
      }],function(results){
        $('#city-select option').remove();
        results.forEach(function(result){
          $('#city-select').append('<option>' + result.city + '</option>')
        })
      });
    })
  }

  mapFunc.runFunc = function(){
    this.statesPop();
    this.cityPop();
    this.zipSearch();
  }

  module.mapFunc = mapFunc;
})(window)

mapFunc.runFunc();
