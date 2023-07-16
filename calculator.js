function howManyday(month) {
  var days = [31, 30, 28];
  switch (month) {
    case 2:
      return days[2];
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return days[1];
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return days[0];
  }
  return days;
}

howManyday();
