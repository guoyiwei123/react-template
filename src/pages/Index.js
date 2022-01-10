import {useEffect} from "react";
function Index(){
    useEffect(() => {
        window.requestIdleCallback((deadline) => {
            Promise.reject(deadline.timeRemaining());
        });
    }, []);
    return <img src={ require("@assets/images/icon_ac_label.png").default }/>;
}
export default Index;