import { useState } from "react";

export default function NoteForm({ onAdd, disabled }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label htmlFor="new-note">New Note</label>
      <textarea
        id="new-note"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        placeholder="Enter your note here..."
      />
      <button 
        type="submit" 
        title="Add"
        disabled={!value.trim() || disabled}
      >
        {disabled ? "⏳" : "➕"}
      </button>
    </form>
  );
}
