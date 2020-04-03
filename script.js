const randomNumber = () => {
	return Math.round(Math.random() * 100);
};

// const isNumber = function(n) {
// 	return !isNaN(parseFloat(n)) && isFinite(n);
// };

const game = (num) => {

	const number = num();

	const question = (message) => {
		if (message) {alert(message)}
		const ask = confirm("Угадай число от 1 до 100");
		if (!ask) return
		const answer = +prompt('Введите предполагаемый вариант');
		if (isNaN(answer)) {question("Введи число!")}
		
		if (answer < number) {
			question("Загаданное число больше")
		} else if (answer > number) {
			question("Загаданное число меньше")
		} else if (answer === number) {
			alert('Вы выиграли!!!');
			return
		}

	};

	question();

}

game(randomNumber);


