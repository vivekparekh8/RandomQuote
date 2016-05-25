var axios = require('axios');
var getQuote = function(){
  return axios.get('http://quotes.rest/qod.json');
}
var helpers = {
  getData : function () {
			return axios.all([getQuote()]).then(function(arr){
          return arr[0].data.contents.quotes[0];
					// return {
					// 	repos : arr[0].data
					// }
			})
    }
}
module.exports = helpers
