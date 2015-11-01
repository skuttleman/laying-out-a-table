var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];



module.exports = {
	laying_out_a_table: {
		draw: function(data) {
			var keys = Object.keys(data[0]);
			var dash = [];
			// put input into two dimensional array
			var store = [];
			for (var i = 0; i < data.length; i ++) {
				var newline = [];
				for (var j = 0; j < keys.length; j ++) {
					if (dash.length < keys.length) dash.push(keys[j].length);
					newline.push(String(data[i][keys[j]]));
				}
				store.push(newline.slice());
			}

			// find length
			for (var row = 0; row < store.length; row ++) {
				for (var col = 0; col < store[row].length; col ++) {
					dash[col] = Math.max(dash[col], store[row][col].length);
				}
			}

			// pad keys
			for (i = 0; i < keys.length; i ++) {
				while (keys[i].length < dash[i]) keys[i] += ' ';
			}

			// pad store
			for (row = 0; row < store.length; row ++) {
				for (col = 0; col < store[row].length; col ++) {
					while (store[row][col].length < dash[col]) store[row][col] += ' ';
				}
			}

			// make dash row
			for (i = 0; i < keys.length; i ++) {
				dash[i] = '';
				while (dash[i].length < keys[i].length) dash[i] += '-';
			}
			
			return [keys, dash].concat(store);
		}
	}
};
