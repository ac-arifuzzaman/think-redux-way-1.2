import './App.css';
import Counter from './componets/Counter';

function App() {
  return (
    <div className="App">
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application Edited by Arifuzzaman
            </h1>
            <Counter/>
        </div>
    </div>
  );
}

export default App;
