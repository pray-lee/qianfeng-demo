import React, { createContext } from 'react';

// 跨组件通讯的方法

const { Provider, Consumer } = createContext()
// Provider相当于一个提供者。而Consumer相当于使用者，前者提供数据源，后者通过函数的参数形式返回数据源里的数据供子组件使用

//定义一个provider包装, 这里是数据的提供者,需要共享的数据都放在这里----------------------------------------------------------------------
class CounterProvider extends React.Component {
    state = {
        counter: 100
    }
    increment = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }))
    }
    decrement = () => {
        this.setState(state => ({
            counter: state.counter - 1
        }))
    }
    render() {
        return (
             <Provider value={{
                 counter: this.state.counter,
                 increment: this.increment,
                 decrement: this.decrement
             }}>
                 {this.props.children}
             </Provider>
        );
    }
}


// -----------------------------------------------------------------------------------------------------------------------------


class Counter extends React.Component {
    render() {
        return (
            // Consumer的children必须是一个方法
            // Consumer 是消费者，如果需要用到共享中心里的数据的时候，就需要用consumer包起来，然后通过函数的参数形式把共享中心的数据返回回来。例子如下:
            <Consumer>
                {
                    ctx => <span>{ctx.counter}</span>
                }
            </Consumer>
        )
    }
}

class CounterBtn extends React.Component {
    render() {
        return (
            // Consumer 是消费者，如果需要用到共享中心里的数据的时候，就需要用consumer包起来，然后通过函数的参数形式把共享中心的数据返回回来。例子如下:
            <Consumer>
                {
                    ctx => {
                        const handler = this.props.type === 'add' ? 
                        ctx.increment
                        :
                        ctx.decrement
                        return <button onClick={handler}>{this.props.children}</button>
                    }
                }
            </Consumer>
        );
    }
}




class CounterWrapper extends React.Component {
    render () {
        return (
            <>
                <h3 style={{borderTop: '3px solid #333'}}>Counter Context Demo</h3>
               <CounterBtn type="minus">-</CounterBtn> 
               <Counter></Counter>
               <CounterBtn type="add">+</CounterBtn> 
            </>
        )
    }
}

const App = () => {
    return (
        <CounterProvider>
            <CounterWrapper></CounterWrapper>
        </CounterProvider>
    )
}

export default App 