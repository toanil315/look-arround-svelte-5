// export function createState() {
// 	let value = $state(0);

// 	function increment() {
// 		value += 1;
// 	}

// 	function decrement() {
// 		value -= 1;
// 	}

// 	return {
// 		get value() {
// 			return value;
// 		},
// 		set value(newValue: number) {
// 			value = newValue;
// 		},
// 		increment,
// 		decrement
// 	};
// }

export class ComplexState {
	value = $state(0);

	increment() {
		this.value += 1;
	}

	decrement() {
		this.value -= 1;
	}
}
