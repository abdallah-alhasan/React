import './App.css';
import Card from "./components/Card";
import Line from './components/Line';
import Message from './components/Message';
import Navbar from "./components/Navbar";
import Para from './components/Para';

function App() {
  return (
    <div className="App">
      <Para/>
      <Line lang='HTML' img='https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=8080'/>
      <Line lang='PHP' img='https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
      <Line lang='CSS' img='https://images.unsplash.com/photo-1524666643752-b381eb00effb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'/>
      {/* <Navbar link='link'/>
      <Card title='one' subtitle='first subtitle'>
      </Card>
      <Card title='two' subtitle='second subtitle'/>
      <Card title='three' subtitle='third subtitle'/> */}
    </div>
  );
}

export default App;
