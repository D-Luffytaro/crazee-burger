import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function RightSide() {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext);

  const displayToast = () => {
    setIsModeAdmin(!isModeAdmin);
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
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
        isChecked={isModeAdmin}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
        onToggle={displayToast}
      />
      <ToastAdmin />
      <Profile />
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  font-family: "Open Sans", sans-serif;
  padding-right: 3.125rem;
`;
