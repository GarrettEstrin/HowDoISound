angular.module('howDoISound')
  .controller('MainController', MainController)

MainController.$inject = ['$rootScope', '$state', '$http']

function MainController($rootScope, $state, $http) {
  var vm = this

  vm.tones = {}

  $rootScope.$on('$stateChangeStart', function() {
    vm.$state = $state
  })
  vm.analyze = function(){
    console.log("Let's analyze");
    console.log(vm.input);
    $http.post('/api/', {"textInput": vm.input}).success(function(data){
      // tone analyzed. Do stuff with it:
      var emotionalTones = data.document_tone.tone_categories[0].tones
      var languageTones = data.document_tone.tone_categories[1].tones
      console.log(emotionalTones)
      console.log(languageTones);
      vm.tones = {
        anger: formatToneScore(emotionalTones[0]),
        joy: formatToneScore(emotionalTones[3]),
        disgust: formatToneScore(emotionalTones[1]),
        fear: formatToneScore(emotionalTones[2]),
        sadness: formatToneScore(emotionalTones[4])

      }
    })
  }

  function formatToneScore(tone) {
    return Math.round(tone.score * 100)
  }

}
