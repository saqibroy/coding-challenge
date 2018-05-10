Vue.filter('date_f', function (value) {
  if (!value) return ''
  value = new Date(value)
  return value.getDate() + '.' + (value.getMonth() + 1) + '.' + value.getFullYear() + ', ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
})
    var vm = new Vue({
        el: '#app',
        data: {
            tweets: [
                { id: 2, name: "Tanja", text: "Hallo Leute, ich tausche Computerspiele. Hat jemand Interesse? Meldet euch!", created_at: "2018-05-04T09:46:12Z" },
                { id: 3, name: "Günter", text: "Ein ertragreicher Tag heute. Die Geschäfte laufen und die Sonne scheint. So kann's weitergehen!", created_at: "2018-05-04T09:48:12Z" }
            ]
    	}
  		}
    )