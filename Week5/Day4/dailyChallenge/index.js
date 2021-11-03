let promise1 = new Promise((resolve,reject)=>{resolve(1)});

let promise2 = new Promise((resolve, reject)=>{setTimeout(resolve(2),100)});

let promise3 = new Promise((resolve, reject) => {setTimeout(resolve, 200, 'foo')});

Promise.all([promise1,promise2,promise3])
.then(()=>console.log('All the promises were been resolved !'))