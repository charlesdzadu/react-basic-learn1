import '../App.css';

import Banner  from './Banner';
import QuestionForm from './QuestionForm';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<QuestionForm>
			<p> Votre question : </p>
		</QuestionForm>
       <h1 > Bienvenue sur la révolution  🥳 </h1>

		<Banner />
		<ShoppingList />
      </header>
    </div>
  );
}

export default App;
