import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // state (état, données)
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue} `);
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

      <button>Accéder à votre espace</button>
    </form>
  );
}
