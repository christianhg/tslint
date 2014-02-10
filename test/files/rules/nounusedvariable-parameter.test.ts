export function func1(x: number, y: number, ...args: number[]) {
    return x + y;
}

export function func2(x: number, y: number, ...args: number[]) {
    return x + args[0];
}

export function func3(x?: number, y?: number) {
    return x;
}
