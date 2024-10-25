
import { BrowsePolls } from "./pages/BrowsePolls"
import { Routes, Route} from "react-router-dom";
import { CreatePolls } from "./pages/CreatePolls";

function App() {
 

  return (
    <>
     <Routes>
     <Route path="/" element={<BrowsePolls></BrowsePolls>} />
     <Route path="/CreatePoll" element={<CreatePolls></CreatePolls>} />
    </Routes>
    </>
  )
}

export default App
