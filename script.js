const randomNumber = 23;

// const randomNumber = Math.round(Math.random() * 100);

// const isNumber = function(n) {
// 	return !isNaN(parseFloat(n)) && isFinite(n);
// };

const game = (num) => {

	const question = (message) => {
		if (message) {alert(message)}
		const ask = confirm("Угадай число от 1 до 100");
		if (!ask) return
		const answer = +prompt('Введите предполагаемый вариант');
		if (isNaN(answer)) {question("Введи число!")}
		
		if (answer < num) {
			question("Загаданное число больше")
		} else if (answer > num) {
			question("Загаданное число меньше")
		} else if (answer === num) {
			alert('Вы выиграли!!!');
			return
		}

	};

	question();

}

game(randomNumber);


