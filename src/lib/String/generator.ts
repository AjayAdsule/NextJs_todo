export const generateImageText = (userName: string) => {
  const arrayConverted = userName.split(" ");
  let firstCharacter;
  let secondCharacter;
  if (arrayConverted.length === 3) {
    firstCharacter = arrayConverted[0].toString().slice(0, 1);
    secondCharacter = arrayConverted[2].toString().slice(0, 1);
    return firstCharacter + secondCharacter;
  } else if (arrayConverted.length === 1) {
    return (firstCharacter = arrayConverted.toString().slice(0, 1));
  } else {
    firstCharacter = arrayConverted[0].toString().slice(0, 1);
    secondCharacter = arrayConverted[1].toString().slice(0, 1);
    return firstCharacter + secondCharacter;
  }
};
