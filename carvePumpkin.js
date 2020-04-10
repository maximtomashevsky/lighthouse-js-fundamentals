const calculateRectangleArea = function(length, width) {
  if (length >= 0 && width >= 0) {
    return (length * width);
  }
  else {
    return (undefined);
  }

};
const calculateTriangleArea = function(base, height) {
  if (base >= 0 && height >= 0) {
    return ((base * height)/2);
  }
  else {
    return (undefined);
  }
};

const calculateCircleArea = function (radius) {
  if (radius >= 0) {
    return (Math.PI * radius * radius);
  }
  else {
    return (undefined);
  }
};

console.log(calculateCircleArea(2));