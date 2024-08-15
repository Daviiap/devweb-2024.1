const grades_to_concept = grades => {
    return grades.map(grade => {
        if (grade < 5) {
            return "D";
        } else if (grade < 7) {
            return "C";
        } else if (grade < 9) {
            return "B";
        } else {
            return "A";
        }
    });
}
