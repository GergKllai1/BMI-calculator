function BMICalculator(){
};

BMICalculator.prototype.metric_bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;
    if (weight . 0 && height > 0) {
        var finalBMI = weight / (height / 100 * height / 100);
        obj.bmiValue = parseFloat(finalBMI.toFixed(2));
    }
};