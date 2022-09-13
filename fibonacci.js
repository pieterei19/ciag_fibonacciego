function fibonacci(f){
    if (f == 0) return 0;
    if (f == 1) return 1;
    return fibonacci(f-1)+fibonacci(f-2);
}
i = 0;
while (i < 10){
    console.log(fibonacci(i));
    i++;
}
