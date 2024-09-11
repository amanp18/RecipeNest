const COLORS = {
  green: {
    bg: "bg-[#E2F3BE]",
    badge: "bg-[#D6F497]",
  },
  orange: {
    bg: "bg-[#F2DDBF]",
    badge: "bg-[#F5D7A3]",
  },
  red: {
    bg: "bg-[#F5BDC1]",
    badge: "bg-[#FDC6C7]",
  },
};

export const getRandomColor = () => {
  const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
  const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
  const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
  return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};
