import React from "react";
import emojis from "../navarasa";
import Entry from "./Entry";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Navarasa</span>
      </h1>
      <dl className="dictionary">{emojis.map(createEntry)}</dl>
    </div>
  );
}

export default App;
