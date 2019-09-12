export function countCapital(str:string)
{
    var counter = 0;
    for(var i=0;i<str.length;i++)
    {
        if(/[A-Z]/.test(str.charAt(i)))
        {
            counter++;
        } 
    }
    return counter;
}