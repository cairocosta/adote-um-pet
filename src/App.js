import { PetCollection } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <PetCollection />
    </div>
  );
}

export default withAuthenticator(App);
