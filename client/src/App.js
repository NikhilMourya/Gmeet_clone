import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import Handler from "./components/Handler";

const App = () => {
    return (
        <div className="app-container relative px-5 py-5 overflow-hidden">
            <div>
                <VideoPlayer />
            </div>
            <div>
                <Options>
                    <Notifications />
                </Options>
            </div>
            <div>
                <Handler />
            </div>
        </div>
    )
}

export default App;