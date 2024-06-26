import {
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import discord from "../../assets/discord.svg";
import twitter from "../../assets/twitter.svg";

type Props = {};
const Root = styled(Box)(({ theme }) => ({
  //   display: "flex",
  position: "fixed",
  bottom: 0,
  backgroundColor: theme.palette.mode === "dark" ? "#3c3744" : "#b4c5e4",
  right: 0,
  left: 0,
}));

const Footer = (_props: Props) => {
  return (
    <Root>
      <Toolbar variant="dense">
        <Container maxWidth="xl">
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            p={1}
          >
            <Typography variant="h6">Tokenator</Typography>
            <Grid item>
              <IconButton>
                <img src={discord} alt="discord" width={40} />
              </IconButton>
              <IconButton>
                <img src={twitter} alt="twitter" width={40} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </Root>
  );
};

export default Footer;
