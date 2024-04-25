export default function sortRename(string) {
  let firstSplit = string.split(".");
  let secondSplit = firstSplit[0].split("_");
  let plusEnding = firstSplit[1] + "ending";
  let secondWord = !!secondSplit[1] ? secondSplit[1] : "";
  let toCapital =
    secondSplit[0].slice(0, 1).toUpperCase() +
    secondSplit[0].slice(1, secondSplit[0].length);
  return toCapital + " " + secondWord + " " + plusEnding;
}
