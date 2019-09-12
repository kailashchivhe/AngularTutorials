export function checkPassword(password:string){
    var flag = false;
    var capCounter = 0;
    var smallCounter = 0;
    var digitCounter = 0;
    var symCounter = 0;
    for(var i=0;i<password.length;i++)
    {
        if(/[A-Z]/.test(password.charAt(i)))
        {
            capCounter++;
        }
        else if(/[a-z]/.test(password.charAt(i)))
        {
            smallCounter++;
        }
        else if(/[0-9]/.test(password.charAt(i)))
        {
            digitCounter++;
        }
        else
        {
            symCounter++;
        } 
    }
    if( capCounter>=2 && smallCounter>=3 && digitCounter>=2 && symCounter>=1)
    {
        return true;
    }
    else
    {
        return false;
    }
}