
//Ejercicio 1
secret (array, fun, key)
{
    return array.map(a =>fun(a,key));
}

//Ejercicio 2
mcd = (a,b) => a==b? a: mcd(Math.min(a,b),Math.abs(b-a));

