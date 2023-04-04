import { pxToRem } from "../../utils";

const FONT_PRIMARY = 'Poppins'; // Google Font
// Need to define line height and fontSize for responsive(sm,md,lg) and default view.
const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightLight: 200,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1Lg: {
    fontWeight: 600,
    fontSize: pxToRem(72),
    lineHeight: pxToRem(87),
  },
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(48),
    lineHeight: pxToRem(78),
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(40),
    lineHeight: pxToRem(57),
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(32),
    lineHeight: pxToRem(41),
  },
  h4: {
    fontWeight: 600,
    fontSize: pxToRem(24),
    lineHeight: pxToRem(30),
  },
  h5: {
    fontWeight: 600,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(28),
  },
  h6: {
    fontWeight: 400,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(26),
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: pxToRem(28),
    lineHeight: pxToRem(34),
  },
  bodyXl: {
    fontWeight: 400,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(25),
  },
  bodyL: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24),
  },
  bodyM: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(22),
  },
  bodyS: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(22),
  },
  bodyxxs: {
    fontWeight: 400,
    fontSize: pxToRem(10),
    lineHeight: pxToRem(16),
  },
  label: {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
  },
  overline: {
    fontWeight: 600,
    lineHeight: pxToRem(17),
    fontSize: pxToRem(14),
    letterSpacing: 3,
  },
  button: {
    fontWeight: 400,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(19),
  },
  menuItem: {
    fontWeight: 400,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(22),
  },
};

export default typography;
