import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  let name = "안녕";

  // const style = {          inline styling
  //   App : {
  //     backgroundColor: 'black'
  //   }
  // }

  const num = 5;

  return (
    <div className="App">
    {/* <div style={style.App}> */}
      <MyHeader />
      <h2>안녕{name} 리액트</h2>
      <b id="bold_text">React.js</b> <br/>
      <b id="bold_text">{num}는 : {num % 2 === 0 ? "짝수" : "홀수"}
      </b>
      <MyFooter />
    </div>
  );
}

export default App;
