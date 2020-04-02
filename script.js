const randomNumber = 23;

// const randomNumber = Math.round(Math.random() * 100);

// const isNumber = function(n) {
// 	return !isNaN(parseFloat(n)) && isFinite(n);
// };

const game = (num, tries) => {

	const question = (message) => {
		// вывод сообщения на экран
		if (message) {alert(message)}
		const ask = confirm("Угадай число от 1 до 100");
		if (!ask) {
			alert('До скорых встреч');
			return
		}

		// запрос ответа
		const answer = +prompt('Введите предполагаемый вариант');
		
		// обработка различных вариантов ответа
		if (isNaN(answer)) {question("Введи число!")}

		// кол-во попыток
		tries -= 1;
		if (tries <= 0) {
			if (confirm('Попытки закончились. Хотите сыграть еще?')) {
				game(56, 10);
			} else {
				alert('До скорых встреч');
				return
			}
		}
		
		if (answer < num) {
			question(`Загаданное число больше, осталось попыток ${tries}`);
		} else if (answer > num) {
			question(`Загаданное число меньше, осталось попыток ${tries}`);
		} else if (answer === num) {
			if (confirm('Вы угадали!!!! Хотите сыграть еще?')) {
				game(56, 10);
			} else {
				alert('До скорых встреч');
				return
			}
		}

	};

	question();

}

game(23, 10);


