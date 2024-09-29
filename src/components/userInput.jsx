import { useState } from "react";
export default function UserInput({ label, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="number" name={label} value={value} onChange={onChange} />
    </div>
  );
}
