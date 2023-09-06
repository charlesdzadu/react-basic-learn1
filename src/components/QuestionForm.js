import {useState} from 'react'

function QuestionForm (props){
	const [question, setQuestion] = useState('')

	function handleChange (event){
		if (event.target.value.length <= 2){
			setQuestion(event.target.value)
		}
	}
	return (
		<div>
			<h1 onClick={handleChange} style={
				{color: question.length > 2 ? 'green' : 'red'}
			}>Formulaire</h1>
			<textarea
			placeholder="Posez votre question ici"
			value={question}
			onChange={(e)=> handleChange(e)}></textarea>
			<span>Nombre de caractères : {question}</span>
			{props.children}
		</div>
	)
}

export default QuestionForm
