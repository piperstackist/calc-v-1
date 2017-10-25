	
	var anchor = document.getElementsByTagName('a');

	//this gets the input from the user and then keeps for later usage
	var input=[''];

	//this will be our output
	var finalOut;
	//operators array for validation without the dot
	var operate1 = ['+', '-', '/', '*'];

	//operator array with the dot, will also be used for validation as well
	var operate2 = ['.'];

	//numbers for validation
	var numbers = [0,1,2,3,4,5,6,7,8,9];

	function getValue(inputa) {
		if(operate2.includes(input[input.length-1])===true && inputa==='.'){
			console.log('hey you cannot do that');
		} else if(input.length===1 && operate1.includes(inputa)===false) {
			input.push(inputa);
		} else if (operate1.includes(input[input.length-1])===false){
			input.push(inputa);
		} else if(numbers.includes(Number(inputa))) {
			input.push(inputa);
		}
		getUpdate();
	}

	function getUpdate(){
		finalOut = input.join('');
		$(".output-fig").html(finalOut);
	}

	function getTotal() {
		finalOut = input.join("");
			$(".output-fig").html(eval(finalOut));
	}

	$('a').on('click', function() {
		if (this.id ==='clearAll'){
			input=[''];
			getUpdate();
		} else if (this.id === 'bckspace') {
			input.pop();
			getUpdate();
		} else if(this.id === 'total') {
			getTotal();
		} else {
			if (input[input.length-1].indexOf('+', '-', '/', '*', '.')===-1) {
				getValue(this.id);
			} else {
				getValue(this.id);
			}
		}
	});
