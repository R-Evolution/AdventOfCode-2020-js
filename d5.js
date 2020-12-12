class Range {

	constructor(min, max, cmin, cmax){

		this.Min = min;
		this.Max = max;

		this.ColMin = cmin;
		this.ColMax = cmax;

	}

	get Middle() {
		return Math.round((this.Min + this.Max)/2);
	}

	get ColMiddle(){
		return Math.floor((this.ColMin + this.ColMax)/2);
	}

	Update(l){
		if(l == 'F')
			this.Max = this.Middle;
		else if( l == "B")
			this.Min = this.Middle;
		else if( l == "L" )
			this.ColMax = this.ColMiddle;
		else if(l == "R")
			this.ColMin = this.ColMiddle;
		else
			throw l + " no tiene buena pinta";
	}

	Decode(line){
		this.Line = line;
		for( let l of line ){
			//console.log(this,l);
			this.Update(l);
		}

		let decoded = (this.Min * 8 ) + this.ColMax;
		if(isNaN(decoded))console.log(this);
		return decoded;
	}
	
}


let data = `FBBBFBBLRR
BFFFBBFLRR
BFBFBBFLLR
BBFFFFBLLR
FBBFBBFRLL
BBFFFFBRLL
FBBFBFFLLR
BFFBBBFRRL
FFBFBFFRLR
FBFFFFBLLL
FBFFFFFLRL
FFFBFBBRLR
FFBFFFFLLL
BFBBBFFLLL
FFBBBFBRLR
BFFBFBFLLL
FBFBFFFLLL
BBFFBBBRRL
FBFFBFBLLL
BFFBFBFRRL
FBFBFFFRLR
BFBBBFBRLL
FFBBFBFLRL
FBBFFBFRRR
BFBBBBBLRL
FFBFBFBLRL
FFBFFFFLRL
BFBFBFBRRR
FBBBBBBRRR
BFBFFBBRLL
BBFFBFBLLL
BFBFBBFRLL
FBFBBBBRLR
BFFBBFBRRL
BFBBBFBRRR
FBBBFBBLRL
BBFFBBBLRL
FFBBFFFRRR
FBFFBFFLLL
FBFFBBFRLL
FBBBFBFRLL
BFFBBFFLRL
FFFBFBBRRR
BFBBBBFRLR
FBFBFBBRRL
BFFFFFFRRL
BFBBBBFRRL
FBFBBFFRRL
FBFFBFFRLR
FBBFFBBRRR
FBFBBFFRRR
FFFBBFFRLR
BBFFBFBRRL
FBBBBBFRRR
BFBBBBBRLL
BFFBFFBLRL
FBBBFFBRRR
BFFFBBFRLR
FFBFBBBRLL
BFBBBFFRLL
BFBBFBFRRR
FBFBFBBLLL
BBFBFBBRLL
FBBFFBBRLR
FFBBFBFLRR
FBFFFFFRLL
BFBFBBBRLR
FBFFFFBLRR
FBFFFFBRLL
BFFFFFFRLL
BBFBFFFRRL
BFBFBBBRRR
FFBFFFBLRL
BFFFBBBLLR
FBFFBFFRLL
FFFBFBBLRL
BFBFBBFRRL
FFBFFBBRLL
FBBFBFFLRR
FBFFFFFLLR
FFBFFBFRLL
FFBFFBFLRR
FBFBBBFRLR
FFBFBBFLLR
BBFFBFBLLR
FFBBBBBRRL
BFFBBBBRLL
FFBFBFFLLL
BBFFFBBRRL
FFBFFBFRRL
BBFFBFFRLR
FBFBBFFRLR
FBBFFBFRRL
FBBBFBBRRR
FFBBBBBRRR
BFFBBFBRLL
BFBFBBFLLL
FFBFBBBRRR
BBFFFBBRRR
BFFBFFBLRR
FFFBBFFLRL
BFFBBBFRLR
BFBBFBBRLL
BFBBFBBLLL
FFBFBFBRRL
BFFBBFFRRR
FBFBBBBLLL
FBFFFBFRRR
BFFBFFFLRL
FFFBFBBRRL
FBFBFBBRRR
FBBFBFBLLR
FBBBFFBRLR
FBFBFFBLLR
FBFFBBBRLL
FBFFFBBLRR
BFFFBFFLLL
BFBBBBBLLR
FFBBFFBRLR
BFBFBBFLRL
BBFFBBBRRR
FFBBFFFLRR
BFBFFFFRLR
BFBBBFBRRL
BFFBBBBRLR
BFFBFBBLLR
BFFBBFFLLR
FBFFBBBRLR
FBFFBBBLLR
BBFFBFFLLL
BFFBFBFRRR
BFBFFBFRLR
FBFFFBBLRL
FBBBFBFRRL
BBFFFFBLLL
FFBBBFFLRL
BFFBFFFRLR
FBBFBBFLLL
FBFFBFFRRL
FFBFFBBRLR
BBFFBFFLRR
FBFBBBBLLR
FFBBBFFLRR
BFBBFBFLLR
FBBFBBFLLR
FFBFFBBRRL
BBFFFFBRRL
FBBBBFBRRL
FBFBFFFLLR
BFBFBFBLLR
FFBFBFBRRR
BFFFBFFLLR
BBFFBFFRLL
FBBBFFBRLL
FBBFFFFRRL
FBBBFFFRRR
BBFFFBBRLL
BFFBBFFLRR
BFFBFBBRLR
BFFBFBBLLL
BBFBFFBLLR
FBBBBFFLLL
BFFBBFBLRL
FBBBBFBRRR
FBBFBBBRRL
BFFBBFFRLL
BFFFFFBLLR
BFFBBFBLRR
FFBBFBFRRR
BFBFFBFRRL
BFFFFBBLRR
FFFBBFBLRR
BFFFBBBLRR
FFBFBBFLRL
FBBBFFFLLL
FBFBFBFLRR
FFFBBFBLLL
FFBBFBBLLR
FBBFBBFLRL
FFBFFBBRRR
FBBBBFFRRL
FFFBBBFRLR
FBBFFFBLRL
BFFBFBBLRL
BFFBFBFLRR
BFFBFFBRRR
FFBFBBBRRL
BFFBFFFLLR
BFFBBFBRLR
FBBBFFFRRL
BBFBFFBLRL
BBFFFBBLLR
FBFBFFFRRR
BFFFBBBLRL
FBFFBFFLLR
BBFFFFFRLL
FFBFFFBLLL
BFBBFBBRLR
BFFFFFBLLL
BFBBFFFLLL
FFBBBBFRLR
BBFFFFFLLR
BFFFFBFLRL
FFBFFBBLLR
BBFFBFFLLR
BFBFFBFRRR
FBFFBFFRRR
BBFFFBFLLL
FFBFFFFRRL
FBBFBFFRRR
FFBBFBBRRL
FFBBBFFLLR
BFFFFBBLLR
FFBFBFBLLR
BFFBBBBLLR
FBBBBFBLLL
BFBFBBBRLL
FFBFBBFRRR
FFFBFBBLLR
FFFBBFBRRR
FFFBBBBLRR
FBBFFFFLRL
FFFBBFFLRR
FFBFBFFRLL
FBBFBBBRLR
FFBFBFBRLR
FBBBFFBLRL
BFFFFFFLRL
BFFBBBBLRR
FBBFFBBLRR
BBFFBBFRRL
FFBFBBBLLR
FFBFFFFRRR
FBFFFBBRRL
BFBFFFBLLR
FBBFBFBRRL
BBFBFFBRLR
FBBBBBFRLR
BFFBBBFLRR
BFFFFFBLRR
BBFFBBFRLL
FFFBBFFRRR
FBBBBFFRLL
FFBFFFFRLR
BFFFBFFRRL
FBBBBFFLRL
BBFBFFFRLL
BBFFFBBLRR
FBBBFFFLLR
BFFBFBFLRL
FFBBBBFLLL
BFFFBFFRLL
FBBFFBFLLR
BBFBFBBRRR
FFBFFFBRLL
FBFBBBFRLL
BFBBFBBLRR
FBBBBFFRLR
BFFBBBBLLL
FFFBBBBRLR
FBBFBBBRLL
FFBBBFBLRL
BBFBFFBLRR
FFBBFFFLLR
FFBBFBFRLR
BFBBBFBRLR
FBBFFFFLLL
BBFFFBFRRR
FFBFBBFLLL
FBBFBBBRRR
BFBBFFBRRR
FBBFFBFLLL
FFBFBBBLRL
FBFBBFBRRR
FBFBFFFRLL
BFFFFFFLLR
FBFBBBFLLR
BFBFFBFRLL
BFBFFBBRLR
BFFBBFBLLR
BFFBFBBLRR
BFBBBFFLRL
BFBBFBFLRR
BFBBBFFRLR
FFFBBFFRRL
BFFFBBFRRL
BFFBFBFLLR
BFBFFBBLRR
BFBBBBBRRR
FFBBFBBLRR
BFFBBFFRLR
FFBFBFBRLL
BFBBBBFLRL
FBBFBBFLRR
FBFBBBFLRL
FBFFFBBRRR
BBFBFFFRRR
FBFFBFBRLL
FBBBBBBRLL
FFBBBFFRRL
FFBBFFFRLL
FBFBBFBRLL
FFFBBBBLLL
BFBFBBBLLL
FFFBBBFLLR
FFBFBBFRLL
BBFFBBBLLR
FFFBBFBLRL
FFBBFBBLLL
FBFFFBFRLR
BFBBFBBLRL
FFFBFBFRLR
BFBFFFBRLR
FFBBBBBLLL
FBFBFFBRRR
BFFBBBBRRL
FBBBBFBLLR
BFBBFBFRRL
BBFBFBFLLR
BFFFBFBRRR
FFFBBFBRRL
BFBBBBFLLR
FBBBFBFLLR
FFBFFBFLRL
BFFFBFBLLL
BFBBBBBLRR
BFBFBBBLRR
BFFBFBBRLL
FFBFBFFLRL
FBBBFBBRRL
BFFBBFFLLL
FBFBFFBRLR
FBBFFFFLRR
FBBFBFBLRL
BBFFBBBLRR
BBFFBBFLLL
FBBBBBBRRL
BFFFFBFRRL
BFFFFBBLRL
BBFFFBFRLL
BFFBBFFRRL
FBBBFBFRLR
FBFFBFBLLR
FFBFFFFLRR
FBBBBBBLRL
FFBBFBBRLL
FFBBFBBLRL
FBFFFBBRLR
FFBBFFFLLL
BFFFFBFRRR
BFBFBFBLLL
FFFBBFFLLR
FBBBFBBRLL
BFFFFBBRLL
FBFBFFBRRL
BFBBBFBLLR
BFFBBBBRRR
BBFFFFFRLR
BFFFBBBRRL
BBFFFFFRRL
BFFBFBFRLL
BBFFFFFLRR
FBFBBBBLRR
FBFFBBBLRL
BFBFBFFRLL
FFFBBBBLLR
FBFBBBBRRR
FBBBBBFRRL
BFBFFFBRRL
BFBFFFBRRR
BBFBFBBLRR
FFBBBFBLLR
FFBBBFBRLL
BFBFFFFLLR
BFBFBFFLRL
FBFFFBBLLR
BFFFFFBRLL
BBFBFBBRRL
BFBBFFFRLL
BFFFFFFRLR
FBFFBFBRRR
BBFFBBFRRR
FFBBBFFRRR
FFBBBFFLLL
BFBBFFFLRR
FBBFFBFLRL
FBFFFFBLLR
BFBBBFBLRL
BFFBBBFRRR
BFBBBFFLLR
BFFFBBBRRR
BBFBFBFRRR
FFBFFBFRLR
FBBFFFFRLR
BFBFBBFRRR
BBFFBBFLRR
FBBBFFBLRR
BFBBFFBLRL
FBFBBBBRRL
FFFBBBFLRL
FBBFFFBRLR
FFFBBFFLLL
BFFBFBBRRL
BFFFBFBLRR
FBBFFFBRRR
FBBFFFBRRL
FBBBBBBRLR
FBFFFBFLRL
BBFFBFBLRL
FBBFFFBLLR
BFBFFBBRRR
FBFBBFFLRR
FBBFFBBLLR
FFBBBFFRLR
BFFBFFFLLL
FBBFFFFRLL
BFBFFBBLRL
BFBFFBFLLR
BFBBFFFRRR
BBFFFBFRLR
FBFBBBFRRL
FFBBFBBRLR
BFFFFFFRRR
BBFBBFFLLL
BBFBFFBRRR
FBBFFBBLLL
FFBFBFBLRR
BFBBFFFRRL
BBFBFFFLRR
FBBBBFBLRL
FBBFBFBRRR
FBFBFBBLRR
FBFFBBBLLL
FFBFBFFLRR
BFBFBFFRRR
BFBFBFFLRR
BFFFFFFLRR
FBFBFBBRLR
FFBFFFFRLL
FBBBFBFLRL
BFBFBBFLRR
FFBBFBBRRR
FBFBFFFLRR
BBFBFFBRRL
BFBFBFFLLL
FBFFBFBRLR
FBBBBBBLLR
FFBBBBFRLL
BFBFBBBLLR
FBFBBBBRLL
BFBBBBFLLL
FBFBFFBLRL
FFFBBBBRRR
BFFFFBFLLR
BBFFFFBLRR
BBFFFBFRRL
FBBFBFFLLL
BFFFBFBRLL
FBBBFFBRRL
FFFBFBBLRR
BBFFBBFLRL
BBFFBFFRRR
BFFFFBFRLR
FBFBBFBLRL
FBFFBBFLLL
FBFFFBBLLL
FFBBFFBLRL
FBBFBBFRLR
FBBFBBBLRL
FBFFFBBRLL
BFBFBBBRRL
BFBFBFBRLR
FBFFBFFLRR
BFFFBFFLRR
BFBBBFFLRR
FBBBBBFLLL
FFBFBFFRRR
BBFFBFFRRL
BFBBBFBLLL
FFBBFBFRLL
FBBBFBFRRR
FBFFBBBLRR
BBFFFFBRRR
FBFBFFFRRL
BFFFBBFLRL
FBBFFFBLLL
BFBBFFBLLR
BFBBFFBLLL
FBFFBBFRRR
BFFBBFBRRR
BFFFFFBRLR
FBBBBBBLLL
FFBFBBFLRR
FBFBFBBRLL
BBFBFFFLLR
BFFFFBBRRL
BFFBFFBLLR
BFFFBBFRLL
BBFFFFFLRL
FBFFFFFLLL
BBFFBBBRLL
BFBBFFBRRL
BFFFBBBRLL
FBFFBBFLRL
BBFBFFBLLL
FBFBBFBLRR
FFFBBBFLRR
BBFBFBFLRR
BFBBBBFRRR
BFFFBFFLRL
FBFFFFBRRL
BBFBFBFLLL
BFFFBBBRLR
FBFFBBFRRL
FBBFFBBRRL
FBFBFBFRLR
BFFBFFFRRL
FFFBFBBLLL
BFBBFBFRLL
BFFFBFBLLR
FBBFBBFRRL
FBBBBBFLRR
FBFFBFBLRR
FBBBFFBLLL
BFBBBFFRRR
BFBFFFFLRL
FFBBFFBRRL
BFFFFFFLLL
FFBFFBBLRL
FFFBBBFRLL
BFFFBBFLLL
FBBBFBBRLR
BBFBFFFRLR
BFFBFFBLLL
FFBBFBFLLR
FBFFBBBRRR
BFBFFBFLRR
FBFBFBBLRL
FFBFFFBRRR
FBBFFFFLLR
BFBBBFFRRL
FFBBBFFRLL
FFFBFBFRRR
FFBBBBFLRL
BFBFBFBRLL
FFFBBBFLLL
BFBFFFFLRR
BFFBFFBRRL
BFBFFBBLLL
FBBBBFBLRR
FFBFFBFRRR
FFBFFFBLLR
FFBBFFFRRL
BFBFFFFRLL
BBFFFBBRLR
FBFBBFBRRL
BFFFFFBLRL
FFBFFFFLLR
FBFFFBFLLR
FFFBBFBRLR
BBFBBFFLRL
FFBBBBBLLR
BFBBFBFLLL
BFBFFFFRRL
BFBBFFBRLR
FBBBFFFRLR
FBBFFBFRLR
BBFBFBBRLR
FBBBFFBLLR
FBBBFFFRLL
FBFBFBFRRR
BBFFBFBRRR
FFBBBBBRLL
FBFFBFBRRL
FBFFBBFLRR
FFFBBBFRRL
FFBBFFBRLL
BFBFFFBRLL
FBFFFBFLLL
FBBBBFFRRR
FBBFBFBRLL
BFFBFBFRLR
FFBFBFBLLL
FFBBFFBRRR
FBFFFFBLRL
FBBBFFFLRR
FFBBBBFRRL
FFBFBBBRLR
FBBBBFFLRR
BFBFBFBLRR
BBFBFFFLRL
FFFBBFBRLL
FBBBBBFLRL
FBBFBBBLLR
BFBBFFFLLR
FBFFFFFRLR
BBFFFFBRLR
FBFFFFFRRL
FFBBFFFLRL
FFBBBFBRRR
BBFFFBBLRL
FBBBBFBRLR
FBFBBFFLRL
FBFFBFFLRL
FFBFFFBRRL
FFBBBBFLLR
FBBFBFBLRR
FBFBBFBLLL
FFBBBFBLLL
BFFFFBBRRR
BBFFFBFLRL
FFFBBBBRLL
FFBFFBBLLL
FBFFFBFLRR
FBFBFFBLLL
BFFFBFFRRR
FFBBFFBLRR
BFBBFBFRLR
FFBFBFFRRL
BBFFFFBLRL
FFBBFFFRLR
BFBBFFBLRR
BBFBFBFRLL
FBFFFFBRLR
BBFFBBFLLR
FBBFFBBLRL
BFFFFFBRRL
BFBBFBFLRL
BBFFBFBRLR
BFFFFBFLRR
BFBFBFBLRL
FBFBFFFLRL
BFFFBBFLLR
BBFBFBBLRL
BFFFFBBLLL
BBFBFBBLLL
BFBBBBBRRL
FBFFBBFLLR
FFBFFBBLRR
FFBBFBFRRL
FBFBBBFLRR
FBFBBFFLLR
FFBBBBBRLR
FBFBBBFLLL
FBBFBBFRRR
FBBFBBBLLL
BFBFFBFLRL
FBFBFFBRLL
BFBFBFFLLR
FBBFFBFRLL
BFFBBBFLLR
BFFFFBBRLR
BFFBBFBLLL
BFFFFBFRLL
FFBFBBFRLR
BFFFBBBLLL
FBFBFBFLLL
BFBBBBBRLR
BFBBBFBLRR
FBBBFBFLLL
FBFFBBFRLR
BBFFBBBRLR
FFBFBBFRRL
BFBFBBFRLR
FBFFFFFLRR
BBFFFBFLRR
FBBFBFFRLR
BFBBFFFLRL
FBFBBFBLLR
BFFBBBFLRL
BFFBBBFLLL
BFBBFFFRLR
FBFFBBBRRL
BFFFBFBLRL
FBBBBBFRLL
BFFBBBBLRL
FBBFFFBRLL
FBBFBFFRLL
FBBFFBFLRR
FFBFBBBLLL
FFBFBBBLRR
BFBFFFBLLL
FFBFFFBLRR
FBFBBFBRLR
FBFBBBFRRR
FFFBFBFRLL
FBFFFBFRLL
BBFFBFBRLL
FFFBBBBRRL
FBFBFBBLLR
BBFFBBBLLL
FBBBBBFLLR
BFBFFFFRRR
FBBBBFFLLR
BFBBBBFLRR
BFBFFFBLRR
BFFFBBFRRR
FFFBBFBLLR
BFBBBBFRLL
BBFBFBFRRL
BBFBFFFLLL
FBFBFBFRLL
FBFBFFBLRR
BFBFBFBRRL
BFBBFFBRLL
BBFBFFBRLL
BFBBFBBRRR
FFBBBBFLRR
BBFFFBBLLL
FBBBFBBLLL
FFBBBFBLRR
BFBFBFFRLR
BBFBFBBLLR
BFBFFBFLLL
FBFBBFFRLL
FBFBFBFLRL
FBBFFFBLRR
BFBFFBBRRL
FFBFBFFLLR
FFBBFFBLLR
FFFBBBFRRR
BFFBFBBRRR
FFFBBBBLRL
FBBBBBBLRR
FBBBFBFLRR
FFBBBBFRRR
FFBFFBFLLL
BBFFBBFRLR
FBFFFFFRRR
FBBBFFFLRL
BFFBFFBRLR
FBFFFBFRRL
BBFFFFFLLL
FFBBFBFLLL
BFFBFFBRLL
FFBBFFBLLL
BBFFFBFLLR
FBBFBFBLLL
BFFFFFBRRR
BFBFBBBLRL
FBBFFBBRLL
BFFBFFFRLL
BFFBFFFLRR
BFFBBBFRLL
FBFBBFFLLL
FBFBFBFRRL
BFBBFBBLLR
FBFBBBBLRL
BFFFBFBRLR
FFFBFBFRRL
BBFBBFFLLR
FBBFBFFLRL
FFBBBBBLRR
FBBBBFBRLL
BBFBFBFRLR
BFBBBBBLLL
FBBBFBBLLR
FFFBBFFRLL
FFFBFBBRLL
FFBFFBFLLR
BBFFFFFRRR
BBFFBFFLRL
FBFFFFBRRR
BFBFFFBLRL
BBFFBFBLRR
FFBBBFBRRL
FBFFBFBLRL
FBBFBFBRLR
BFBFBFFRRL
BFFFBFBRRL
BFFFBFFRLR
BBFBFBFLRL
FBBFBFFRRL
BFBBFBBRRL
BFFFFBFLLL
FBBFBBBLRR
BFBFFFFLLL
FFBBBBBLRL
BFBFFBBLLR
FBFBFBFLLR
FFBFFFBRLR
FBBFFFFRRR`.split("\n");

let res = data.map(x => new Range(0,127, 0, 7).Decode(x) );
let res1 = Math.max(...res);
console.log(res1);

let sorted = res.map(Number);
sorted.sort(function(a, b) {
  return a - b;
})

let min = sorted[0];
let max = sorted[sorted.length-1]

for(let i = 0; i < sorted.length; i++){
	if(sorted[i]+1 != sorted[i+1])
		console.log(sorted[i]+1);
}



