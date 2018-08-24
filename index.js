Vue.component('page', {
    template: '#page'
})
vue = new Vue({
    el: '#app',
    data: {
        clipped: true,
        drawer: true,
        fixed: false,
        items: [{
            icon: 'bubble_chart',
            title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        currentPage: 'me',
        writings: writings
    }
})
