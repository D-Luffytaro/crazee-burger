import { useState } from "react";

function LoginPage() {
  // state (état, données)
  const [prenom, setPrenom] = useState("");

  // comportements
  const handleClick = () => {
    if (prenom.length > 2) {
      alert("Bonjour " + prenom);
    } else {
      alert("error");
    }
  };

  const handleChange = (event) => {
    setPrenom(event.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="submit">
        <input
          value={prenom}
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Accéder à votre espace</button>
      </form>
    </div>
  );
}

export default LoginPage;
