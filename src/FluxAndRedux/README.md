### Flux流程 (标准)
- 组件获取到store中保存的数据挂载到自己的状态上
- 用户产生了操作，调用actions的方法
- actions接收到用户的操作，进行一系列的逻辑代码、异步操作
- 然后actions创建对应的action,action是带有标示性的属性
- actions调用dispatcher的dispatch方法将action传递给dispatcher
- dispatcher接收到action并根据标识信息判断之后，调用store的更改数据的方法
- store的方法被调用之后，更改状态，并触发自己的某一个事件
- store更改状态后事件被触发，该事件的处理程序会通知view去获取最新的数据

### 大致流程：（自己理解）
#### 用户触发操作 -> 产生action -> 派发action -> 通过action更改store里的状态 -> 通过store触发的时间更改view