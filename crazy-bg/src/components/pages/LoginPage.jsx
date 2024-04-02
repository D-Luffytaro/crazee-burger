import { useState } from "react";

function LoginPage() {
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
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}

export default LoginPage;
