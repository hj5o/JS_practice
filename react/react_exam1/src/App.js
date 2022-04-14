import './App.css';
import MyHedaer from './MyHeader';
import Counter from './Counter';
import Container from './Container';

function App() {

  const counterProps = {
      a:1,
      b:2,
      c:3,
      d:4,
      e:5,
      // initialValue:5
  }
  return (
    <Container>
    <div>
      <MyHedaer />
      <Counter {...counterProps} />
      {/* prop << 초기값 지정 */}
    </div>
    </Container>
  );
}

Counter.defaultProps={
  initialValue:0
}

export default App;
