import './App.css';
import formularioImg from './assets/formulario.svg'
import  ContactMe  from './components/ContactMe'

function App() {

return (
		<div className="container mt-3">
			<div className="row">
				<div className="col md-5">
					<ContactMe />
				</div>
				<div className="col md-7 my-auto">
					<img className='img-fluid w-100' src={formularioImg} alt="" />
				</div>
			</div>
		</div>
);
}

export default App;
