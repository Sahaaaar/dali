import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of these places is the most erotic:',
			answerOptions: [
				{ answerText: 'elevator', isCorrect: false },
				{ answerText: 'my room', isCorrect: false },
				{ answerText: 'the kitchen', isCorrect: true },
				{ answerText: 'near a building', isCorrect: false },
			],
		},
		{
			questionText: 'To make love to three, for you it is:',
			answerOptions: [
				{ answerText: 'shocking', isCorrect: false },
				{ answerText: 'interesting', isCorrect: false },
				{ answerText: 'no , cause i only want my SAHAR.', isCorrect: true },
				{ answerText: 'a possible fantasy', isCorrect: false },
			],
		},
		{
			questionText: 'The moment you prefer:',
			answerOptions: [
				{ answerText: 'sleep like a koala after having sex', isCorrect: false },
				{ answerText: 'hug my SAHAR', isCorrect: false },
				{ answerText: 'precise moment of orgasm', isCorrect: false },
				{ answerText: 'touches and words of love after sex', isCorrect: true },
			],
		},
		{
			questionText: 'The important thing in a sexual partner (your baby = me) is that she is:',
			answerOptions: [
				{ answerText: 'always horny and lovely', isCorrect: true },
				{ answerText: 'sexy and patient', isCorrect: false },
				{ answerText: 'charming and sexy', isCorrect: false },
				{ answerText: 'lovely and sexy', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
