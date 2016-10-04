// Display code
module.exports = (function () {
  var instance

  function init(callback) {
    instance = new Vue({
      el: '#app',
      data: {

        player: {
          health: 100,
          level: 0, // start in a neutral room
          location: { x: 0, y: 0, z: 0 },
        },

        // default world layer
        neutral: [
          '#', '#', '#', '#', '+', '#', '#', '#', '#',
          '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',
          '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',
          '+', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '+',
          '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',
          '#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#',
          '#', '#', '#', '#', '+', '#', '#', '#', '#'
        ],

        // this is temporary data (more like a story to me)
        entities: [
          {
            id: 1,
            sprite: '@', // goodguy greg yay :D ggg (aka gennady gennadyevich golovkin)
            bind: 'player'
          },
          {
            id: 2,
            sprite: 'w', // badguy bruce boo :C bbb
            location: {
              x: 2,
              y: 2,
              z: 0
            },
            health: 1000,
            stamina: 40
          }
        ],
      },
      methods: {
        mapName: function () {

        },
        update: function () {
          var map = this.neutral;
          this.neutral = map;
        }
      },
      computed: {},
      mounted: function () {
        callback && callback.call(this);
      },
      components: {
        game: {
          template: "<div class='grid'><div class='tile' v-for='item in neutral'>{{ item }}</div></div>",
          props: ['neutral']
        },
        hud: {
          data: function () {
            props: ['player.health']
          }
        },
        gradient: {
          data: function () {
            props: ['distance']
          }
        },
        mini: {
          data: function () {
            props: ['player.pos']
          }
        }
      }
    })
  }

  return {
    init: init,
    instance: instance
  }
})()