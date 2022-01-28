import {useEffect} from "react";
function Index(){
    useEffect(() => {
        window.requestIdleCallback((deadline) => {
            deadline.timeRemaining();
        });
    }, []);
    return <img src={ require("@images/icon_ac_label.png").default }/>;
}
export default Index;