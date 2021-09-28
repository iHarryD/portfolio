// Functions

{
  let dynamicIntroWords = ["Harry,", "Prashant,"];
  let dynamicIntroCount = 0;
  let dynamicIntroIndex = 0;
  let dynamicIntroCurrentWord = "";
  let dynamicIntroCurrentLetter = "";
  (function typingEffect() {
    if (dynamicIntroCount === dynamicIntroWords.length) {
      dynamicIntroCount = 0;
    }

    dynamicIntroCurrentWord = dynamicIntroWords[dynamicIntroCount];
    dynamicIntroCurrentLetter = dynamicIntroCurrentWord.slice(
      0,
      ++dynamicIntroIndex
    );

    document.querySelector(".intro-names").innerText =
      dynamicIntroCurrentLetter;
    if (dynamicIntroCurrentLetter.length === dynamicIntroCurrentWord.length) {
      dynamicIntroCount++;
      dynamicIntroIndex = 0;
    }

    setTimeout(typingEffect, 400);
  })();
}
