import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
        }
        // this.timer;
    }
    // componentWillUnmount() {
    //     console.log("unmount")
    // }


    // componentDidMount(prevState) {
    //     // timer = setTimeout(() => 
    //     // this.setState({time: this.state.time + 1}), 1000)
    //     // console.log(prevState)
  timer = setInterval(() => this.setState({ time: this.state.time + 1}), 1000)
    // }
      
      componentWillUnmount() {
        console.log('timer will unmount')
        clearTimeout(this.timer);
      }


render(){
    const {time} = this.state
    return (
        <div className="login" style={{ border: '1px solid black', borderRadius: '25px', marginLeft: '20px', backgroundColor: 'chocolate' }}>
            <form>
                <input type="text" placeholder="login" style={{ border: '1px solid black', borderRadius: '25px' }} />
                <input type="text" placeholder="password" style={{ border: '1px solid black', borderRadius: '25px' }} />
               <div> {time}</div>
            </form>
        </div>
    )
}
}

export default Login