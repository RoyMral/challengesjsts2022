function isOrthogonal(vectorOne: number[], vectorTwo: number[]): boolean {
    return vectorOne[0] * vectorTwo[0] + vectorOne[1] * vectorTwo[1] === 0;
}

console.log(isOrthogonal([1, 2], [2, 1]));