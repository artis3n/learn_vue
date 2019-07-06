new Vue({
    el: '#exercise',
    data: {
      highlight: false,
      shrink: false,
      customClass: 'red',
         boolClass: 'false',
      customStyle: 'background-color: yellow',
      progressValue: 0
    },
    methods: {
      startEffect: function() {
        const vm = this;
        this.highlight = true;
        setInterval(function() {
            vm.highlight = !vm.highlight;
          vm.shrink = !vm.shrink;
        }, 1000);
      },
      startProgress: function() {
        const vm = this;
        setInterval(function() {
            if (vm.progressValue >= 100) {
              vm.progressValue = 0;
          } else {
              vm.progressValue += 10;
          }
        }, 1000);
      }
    },
    computed: {
      boldClass: function() {
          return {
            'font-weight': 'bold'
        }
      },
      booleanClass: function() {
          return this.boolClass == 'true' ? 'shrink' : '';
      }
    }
});
