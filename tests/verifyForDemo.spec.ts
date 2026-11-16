import { test } from '@playwright/test'

test('for demo', async({page})=>{

    //print 1 to 10 numbers
    let a =1, b =10;
    for(let i=a; i<=b; i++){
        console.log(i)
    }
    

    console.log("print 10 to 1");
    for(let i=b; i>=a; i--){
        console.log(i)
    }


    const countrylist = ['India', 'USA', 'UK'];
    console.log(countrylist.length+" : number of countries");

    for(let i = 0; i<countrylist.length; i++){
        console.log("country name : "+countrylist[i]);
    }

    //print all countries names

    // select each country by using for loop
    





})