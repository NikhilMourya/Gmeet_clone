import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

const App = () => {
    return (
        <div>
            <VideoPlayer />

            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App;