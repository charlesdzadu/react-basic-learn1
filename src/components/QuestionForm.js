import {useState, useEffect} from 'react'

function QuestionForm (props){
	const [question, setQuestion] = useState('')

	function handleChange (event){
		if (event.target.value.length <= 2){
			setQuestion(event.target.value)
		}
	}
	useEffect(()=>{
		document.title = question.length > 1 ? question : 'Formulaire'
	}, [question])
	useEffect(()=>{
		console.log('Le composant est monté')
	})
	return (
		<div>
			<h1 onClick={handleChange} style={
				{color: question.length > 2 ? 'green' : 'red'}
			}>Formulaire</h1>
			<textarea
			placeholder="Posez votre question ici"
			value={question}
			onChange={(e)=> handleChange(e)}></textarea>
			<span>Nombre de caractères : {question.length}</span>
			{props.children}
		</div>
	)
}

export default QuestionForm
