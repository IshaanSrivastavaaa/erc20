let N = prompt();
let n = prompt();
 
function function()
{
    if (n <= N)
    {
        document.write( n+" ");
        n++;
        fun2();
    }
    else
    {
        return;
    }
}
function fun2()
{
    if (n <= N)
    {
        document.write(n+" ");
        n++;
        function();
    }
    else
    {
        return;
    }
}
function();
