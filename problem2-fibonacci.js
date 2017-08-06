function main()
{
 var n1=1,n2=1,res=0,sum=0;

while (res < 4000000) {
    if ((res % 2) === 0) 
    {
        sum+=res;
    }

    res = n1 + n2;
    n2 = n1;
    n1 = res;
}
return sum;
}
main();
