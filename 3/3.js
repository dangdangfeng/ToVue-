var obj = {
    foo: 'bar'
}

Object.freeze(obj)

var app = new Vue({
    el: '#app',
    data: obj
})

var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})