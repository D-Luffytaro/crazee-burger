import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // state (état, données)
  const [inputValue, setInputValue] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue}
        type="text"
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
      />

      <Link to="/order">OrderPage</Link>
      <button>Accéder à votre espace</button>
    </form>
  );
}
