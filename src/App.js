import './App.css';
import { Button } from 'antd-mobile';

function App() {
  return (
    <div className="App">
      <Button type="primary">日记列表</Button>
      <p className="test">你好</p>
      <Button type="primary" style={{position: "fixed", bottom: 0, width: "100%"}}>写日记</Button>
    </div>
  );
}
export default App;
