import {Component} from "react";
export default function(WrapComponent){
    return class extends Component{
        constructor(){
            super();
            this.state = {
                errContext: null
            };
        }
        componentDidCatch(error, errorInfo) {
            const errorStackList = errorInfo.componentStack.split("\n").slice(1);
            this.setState({
                errContext: 
                    <div className="error_catch">
                        <p>{error.name}</p>
                        <p>{error.message}</p>
                        <p>stack: </p>
                        <ul>
                            {errorStackList.map((item, index) => <li key={ index }>{item}</li>)}
                        </ul>
                    </div>
                
            });
            
        }
        render() {
            return this.state.errContext || <WrapComponent />;
        }
    };
}