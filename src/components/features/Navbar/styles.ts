import { Styles } from "../../../types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    padding: "10px 20px",
    justifyContent: "space-between",
    gap: "30px",
    fontWeight: "bold",
  },

  itemWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  items: {
    display: "flex",
    alignItems: "center",
  },

  imageWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: "-8%",
  },

  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "30px",
  },

  bottomLine: {
    borderTop: "1px solid #e0e0e0",
  },
};

export default styles;
