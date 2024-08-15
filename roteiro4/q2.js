const aritmetic = progression_params => {
    const { n, a1, r } = progression_params;

    const result = [a1];

    for (let i = 0; i < n - 1; i++) {
        result.push(result[i] + r);
    }

    console.log(result);
}

const geometric = progression_params => {
    const { n, a1, r } = progression_params;

    const result = [a1];

    for (let i = 0; i < n - 1; i++) {
        result.push(result[i] * r);
    }

    console.log(result);
}
