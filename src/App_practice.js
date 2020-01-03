import React from 'react';
// react的样式
// classnames npm
import classNames from 'classnames'
// styled-components
import styled from 'styled-components'

function App() {
  // 行内样式
  const style={
    color:'#f00'
  }
  // styled-components
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    .detail{
      color:#ff5252
    }
  `

  return (
    <div className="App">
      <header className="App-header" style={style}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <p className={classNames('a', {'b': true}, {'c': false})}>
          使用classnames npm 包管理class
        </p>
      </main>
      <footer>
        <Title>使用styled-components管理样式
          <p class="detail">支持和className一起混用</p>
        </Title>
      </footer>
    </div>
  );
}

// jsx原理
// class的jsx渲染编译成下面这样

// const appVDom = {
//   tag: 'div',
//   attributes: {
//     className: 'App'
//   },
//   children: [
//     {
//       tag: 'p',
//          attributes: null,
//       children: [
//         {
//           tag: 'code'
//         }
//       ]
//     }
//   ]
// }

// render() {
//   return (
//     React.createElement(
//       'div',
//       {
//         className: 'App'
//       },
//       React.createElement(
//         'p',
//         null,
//         'Edit and reload it'
//       )
//     )
//   )
// }



export default App;
