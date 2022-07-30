import AppsIcon from "@mui/icons-material/Apps";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import styles from "./styles";

const Data = ["Course", "Tutorials", "Jobs", "Practice"];
const NavBar = () => {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.itemWrapper}>
          {Data.map((item, index) => {
            return (
              <Box key={index}>
                <Box sx={styles.items}>
                  {item} <KeyboardArrowDownIcon />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={styles.imageWrapper}>
          <Box component="img" src="/gfgLogo.png" height="60px" />
        </Box>
        <Box sx={styles.iconWrapper}>
          <Box>
            <SearchIcon />
          </Box>
          <Box>
            <AppsIcon />
          </Box>
          <Box>
            <GTranslateIcon />
          </Box>
          <Box>
            <PersonIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.bottomLine} />
    </>
  );
};

export default NavBar;
