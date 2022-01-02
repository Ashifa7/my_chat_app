import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
export function App() {
    return ( <
        ChatEngine height = "100vh"
        projectID = '6bf427d8-72bd-4210-af34-86f1973c55af'
        userName = 'ashifa'
        userSecret = '12345xyz'
        renderChatFeed = {
            (chatAppProps) => < ChatFeed {...chatAppProps }
            /> }

            /
            >
        );
    }
    export default App;