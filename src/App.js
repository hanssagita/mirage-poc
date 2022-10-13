import DummyGet from './components/DummyGet'
import DummyPost from './components/DummyPost'
import DummyPutDelete from './components/DummyPutDelete'
import DummyOtherDomain from './components/DummyOtherDomain'
import DummyGetWithAxios from './components/DummyGetWithAxios'
import CombineRealAndMock from './components/CombineRealAndMock'



const App = () => {
  return (
    <div className="App">
      <DummyGet />
      <DummyPost />
      <DummyPutDelete />
      <DummyOtherDomain />
      <DummyGetWithAxios />
      <CombineRealAndMock />
    </div>
  );
}

export default App;