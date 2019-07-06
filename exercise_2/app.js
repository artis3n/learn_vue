new Vue({
    el: '#exercise',
    data: {
    value: ''
    },
    methods: {
    showAlert: function() {
        alert('Clicked button');
    },
    storeText: function(event) {
        this.value = event.target.value;
    }
    }
});
