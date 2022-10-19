"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    });
}
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const listContainer = document.querySelector('ul.list');
    const posts = yield getPosts();
    posts.forEach(post => {
        const postTile = document.createElement('li');
        postTile.id = post.id.toString();
        postTile.className = 'tile';
        const postTitle = document.createElement('h2');
        postTitle.className = 'title';
        postTitle.innerText = post.title;
        const postDescription = document.createElement('p');
        postDescription.className = 'description';
        console.log(post.body.replace('/n', ' '));
        postDescription.innerText = post.body;
        postTile.append(postTitle, postDescription);
        listContainer.appendChild(postTile);
    });
});
//# sourceMappingURL=posts.js.map