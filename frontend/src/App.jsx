import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(prev => !prev);

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <ContactForm onSuccess={triggerRefresh} />
      <h2 style={{ marginTop: "30px" }}>Saved Contacts</h2>
      <ContactList refresh={refresh} onRefresh={triggerRefresh} />
    </div>
  );
}

export default App;
