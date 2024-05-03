import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import { useState } from "react";

export default function RightSide({ username }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToast = () => {
    setIsModeAdmin(!isModeAdmin);
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <RightSideStyled>
      <ToggleButton
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
        onToggle={displayToast}
      />
      <ToastAdmin />
      <Profile username={username} />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  font-family: "Open Sans", sans-serif;
  padding-right: 3.125rem;
`;
