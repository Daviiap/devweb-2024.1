const print_5_even = X => {
    const evens = [];

    if (X % 2 != 0) {
        X++;
    }

    for (let i = 0; i < 5; i++) {
        evens.push(X + 2 * i);
    }

    return evens.reduce((acc, val) => acc + val, 0);
}
