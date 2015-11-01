var code = require('../main');
var expect = require('chai').expect;

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

describe('Laying out a Table', function(){
	it('should have a draw method.', function() {
		console.log(typeof code.laying_out_a_table.draw);
		expect(typeof code.laying_out_a_table.draw).to.equal('function');
	});

	it('should have columns named \'name\', \'height\', and \'country\'.', function() {
		var answer = code.laying_out_a_table.draw(MOUNTAINS)[0];
		var keys = Object.keys(MOUNTAINS[0]);
		for (var i = 0; i < answer.length; i ++) {
			expect(answer[i].trim()).to.equal(keys[i]);
		}
	});

	it('should have equal length strings in each colum', function() {
		var answer = code.laying_out_a_table.draw(MOUNTAINS);
		var pass = true;
		for (var col = 0; col < answer[0].length; col ++) {
			var column = answer.map(function(e) { return e[0]; });
			for (var i = 1; i < column.length; i ++) {
				if (column[i].length !== column[i - 1].length) pass = false;
			}
		}
		expect(pass).to.equal(true);
	});

	it('should have two more rows than the number of rows input.', function() {
		expect(code.laying_out_a_table.draw(MOUNTAINS).length).to.equal(MOUNTAINS.length + 2);
	});

	it('should have a second row of just dashes', function() {
		var dashrow = code.laying_out_a_table.draw(MOUNTAINS)[1];
		var pass = true;
		var dash = '';
		for (var i = 0; i < dashrow.length; i ++) {
			for (var j = 0; j < dashrow[i]; j ++) {
				dash += '-';
			}
			if (dash !== dashrow[i]) pass = false;
		}
		expect(pass).to.equal(true);
	});
});
