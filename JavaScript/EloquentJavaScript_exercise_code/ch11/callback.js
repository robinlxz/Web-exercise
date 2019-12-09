const posts = [
    {name: 'CeCe', weapon: 'sword'},
    {name: 'ZiYan', weapon: 'bow'}
];

function getPosts(){
    let output = '';
    // let testOutput = 'testOutput';
    console.log(output);
    setTimeout(()=>{
        posts.forEach((post, index)=>{
            output += `<li>${post.name} come with ${post.weapon}</li>`;
            // testOutput += 'abc';
            document.body.innerHTML = '<h1>Chapter11 test</h1>'+output;
        });
    },1000);
    // console.log(testOutput);
    // setTimeout(()=>(console.log(output)),1500);
}

// getPosts();

function addPosts(newPost,callback){
    setTimeout(()=>{
        posts.push(newPost);
        callback();
    },1500);
}

addPosts({name: 'GuiHua', weapon: 'Xiang'}, getPosts);

