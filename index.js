

writings = [
  {
    title: "Sinking into the Swirling Torrent",
    body: "A blanket of fatigue so thick it covers the light of your life. I must escape.",
    link: "https://medium.com/@DominicNapoleon/sinking-into-the-swirling-torrent-48cd3924e26c"
  }
]


Vue.component('page', {
    template: '#page'
})
new Vue({
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
