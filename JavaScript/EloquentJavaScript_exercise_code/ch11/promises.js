const posts = [
    {name: 'CeCe', weapon: 'sword'},
    {name: 'ZiYan', weapon: 'bow'}
];

function getPosts(){
    let output = '';
    console.log(output);
    setTimeout(()=>{
        posts.forEach((post, index)=>{
            output += `<li>${post.name} come with ${post.weapon}</li>`;
            document.body.innerHTML = '<h1>Chapter11 test</h1>'+output;
        });
    },1000);
}

function addPosts(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

addPosts({name: 'GuiHua', weapon: 'Xiang'})
    .then(getPosts);
//     // .catch(err => console.log(err));

// ////// Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// Promise.all([promise1, promise2, promise3]).then(values=>console.log(values));