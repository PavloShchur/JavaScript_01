function pow(x, n) {
    return (n != 1) ? x * pow(x, n - 1) : x;
}

alert(pow(2, 3));