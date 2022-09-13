function fibonacci(f){
    if (f == 0) return 0;
    if (f == 1) return 1;
    return fibonacci(f-1)+fibonacci(f-2);
}
console.log(fibonacci(3));