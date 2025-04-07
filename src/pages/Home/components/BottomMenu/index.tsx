import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import { StyledBottomMenu, StyledIconButton } from "./styles";

function BottomMenu() {
  return (
    <StyledBottomMenu>
      <StyledIconButton>
        <FavoriteBorderOutlinedIcon />
      </StyledIconButton>
      <StyledIconButton negative>
        <AutoFixHighOutlinedIcon />
      </StyledIconButton>
      <StyledIconButton>
        <StoreOutlinedIcon />
      </StyledIconButton>
    </StyledBottomMenu>
  );
}

export default BottomMenu;
