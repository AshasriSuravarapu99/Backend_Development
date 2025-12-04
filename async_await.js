// async and await is used to execute the statements in a synchronous way that is until one function completes its execution it doesn't allow below statements to that function execute.
// if we dont use the 


function getUserDetails(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userRoll:"11"});
        },2000);
    })
}
function getSubDetails(roll)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({sub:"en-1"});
        },2000);
    })
}

function getMarks(subject)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({marks:100});
        })
    },2000);
}

const myFun = async()=>
{
    console.log("Starting the api call");
    const result = await getUserDetails("1");
    console.log(result);
    const sub  = await getSubDetails(result);
    console.log(sub);
    const marks = await getMarks(sub);
    console.log(marks);
    console.log("Operation finished");
}

myFun();