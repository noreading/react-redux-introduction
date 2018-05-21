export function randomArrayItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export function getRandomTagline() {
  const taglines = [
    "This could be your bucket list.",
    "This could be your shopping list.",
    "This could be your project milestone list."
  ];

  return randomArrayItem(taglines);
}
