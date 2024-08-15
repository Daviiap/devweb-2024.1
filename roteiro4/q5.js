const is_prime = n => {
    if (n != 2 && n % 2 == 0 || n == 1) {
        return false;
    }

    for (let i = 3; i < n; i += 2) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

const print_primes = ({ min = 0, max = 100 }) => {
    if (min > max) {
        let aux = max;
        max = min;
        min = aux;
    }

    for (let i = min; i <= max; i++) {
        if (is_prime(i)) {
            console.log(i);
        }
    }
}
