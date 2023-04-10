// SETUP COLORS
const PRIMARY = {
  lighter: "#F5E7FF",
  light: "#B681FE",
  main: "#6772fb",
  dark: "#A772FF",
  darker: "#7900E6",
};

const SECONDARY = {
  lighter: "#FBF9EF",
  light: "#FBF9EF",
  main: "#FFF980",
  dark: "#FBF9EF",
  darker: "#FBF9EF",
};

const NOTIFICATION = {
  notificationInfo: "#246BFD",
  notificationSuccess: "#0ABE75",
  notificationWarning: "#FACC15",
  notificationError: "#F75555",
  disabledColor: "#D8D8D8",
  disabledButton: "#7817C3",
  // notificationTintInfo: "#2E5299",
  // notificationTintSuccess: "#00A908",
  // notificationTintWarning: "#DC5800",
  // notificationTintError: "#B81237",
};

const GREY = {
  50: "#FAFAFA",
  100: "#F5F5F5",
  200: "#EEEEEE",
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

const DARKCOLOR = {
  light: "#181A20",
  main: "#1F222A",
  dark: "#1c54b2",
};

const COMMON = {
  common: {
    black: "#000",
    white: "#fff",
    backgroundColor: "#F2EADF",
    startingGradient: "#9610FF",
    endingGradient: "#AF48FF",
    black008: "rgba(0, 0, 0, 0.08)",
    black006: "rgba(0, 0, 0, 0.06)",
  },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  notification: NOTIFICATION,
  grey: GREY,
  darkColor: DARKCOLOR,
};

const palette = {
  light: {
    ...COMMON,
    text: { primary: GREY[900] },
  },
  dark: {
    ...COMMON,
    text: { primary: GREY[900] },
  },
};

export default palette;
