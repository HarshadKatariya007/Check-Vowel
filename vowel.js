let a="red";
count = 0;
 for(let i=0;i<a.length;i++)
 {
    if(a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u")
    {
        count ++;
    }
 }
 if(count==0)
 {
    console.log("False");
 }
 else
 {
    console.log("True");
 }