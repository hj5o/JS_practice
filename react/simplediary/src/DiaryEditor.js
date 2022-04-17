import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const aurthorInput = useRef();
  const contentInput = useRef();

  const handleChangeDiary = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert("최소 1글자 이상 작성해주세요.");
      // focus
      aurthorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      // focus
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      // 저장 후 초기화
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={aurthorInput}
          name="author"
          value={state.author}
          onChange={handleChangeDiary}
          // onChange={(e) => {
          //     setState({
          //         ...state,
          //         author: e.target.value,
          //         // content: state.content
          //     });
          // }}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeDiary}
          // onChange={(e) => {
          //     setState({
          //         ...state,
          //         content: e.target.value,
          //     });
          // }}
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeDiary}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
