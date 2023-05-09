/**
 * Most of the colors here are brazenly stolen from Zeiplin. I'm a 
 * lot of things, but a color guru is not one of them.
 * 
 * https://blog.zeplin.io/dark-mode-color-palette
 */

export const AllColors = {
  // greyscale
  snowman: '#fbfbfb',
  offwhite: '#f7f7f7',
  karl: '#edeced',
  clooney: '#c1bec1',
  gandalf: '#979197',
  teflon: '#554d56',
  dredge: '#323035',
  deep: '#1e1c1f',

  // primary color scale
  yellow: '#fecf33',
  light_orange: '#fdbd39',
  orange: '#f69833',
  peach: '#ee6723',

  // secondary colors
  green: '#c8cf2d',
  turquoise: '#0dcfda',
  cornflower_blue: '#419bf9',
}

export const BgColors = {
  primary: AllColors.deep,
  secondary: AllColors.teflon,
  tertiary: AllColors.gandalf,
};

export const LinkColors = {
  primary: AllColors.cornflower_blue,
  selected: AllColors.offwhite,
  hover: AllColors.turquoise,
}