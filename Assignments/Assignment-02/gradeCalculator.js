let score = 87;

if (score < 0 || score > 100) {
  console.log("Invalid score! Please enter a value between 0 and 100.");
} else {
  console.log(`Score: ${score}`);

  // =====================================================
  // Grade Calculation Using IF-ELSE
  // =====================================================

  let gradeIfElse = "";

  if (score >= 90) {
    gradeIfElse = "A";
  } else if (score >= 80) {
    gradeIfElse = "B";
  } else if (score >= 70) {
    gradeIfElse = "C";
  } else if (score >= 60) {
    gradeIfElse = "D";
  } else {
    gradeIfElse = "F";
  }

  // Add Plus/Minus Modifier
  let modifier = "";

  if (gradeIfElse !== "F") {
    if (score % 10 >= 7) {
      modifier = "+";
    } else if (score % 10 <= 2) {
      modifier = "-";
    }
  }

  console.log(`Grade (if-else) : ${gradeIfElse}${modifier}`);

  // =====================================================
  // Grade Calculation Using SWITCH
  // =====================================================

  let gradeSwitch = "";
  let range = Math.floor(score / 10);

  switch (range) {
    case 10:
    case 9:
      gradeSwitch = "A";
      break;
    case 8:
      gradeSwitch = "B";
      break;
    case 7:
      gradeSwitch = "C";
      break;
    case 6:
      gradeSwitch = "D";
      break;
    default:
      gradeSwitch = "F";
  }

  // Add Plus/Minus Modifier (same logic)
  let modifierSwitch = "";

  if (gradeSwitch !== "F") {
    if (score % 10 >= 7) {
      modifierSwitch = "+";
    } else if (score % 10 <= 2) {
      modifierSwitch = "-";
    }
  }

  console.log(`Grade (switch)  : ${gradeSwitch}${modifierSwitch}`);
}
