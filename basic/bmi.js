const bmi = (weight, height) => {
    return (weight/(0.0254*height)**2);
}

console.log(bmi(64,66))