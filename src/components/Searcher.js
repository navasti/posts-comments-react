import React from 'react'

const Searcher = () => {
    const filterByTitle = e => {
        const h2 = [...document.querySelectorAll('.post h2')];
        const posts = [...document.querySelectorAll('.post')];
        const results = document.querySelector('.results');
        const value = e.target.value;
        let filtered = h2.filter(h2 => h2.textContent.toLowerCase().includes(value.toLowerCase()));
        posts.forEach(post => post.classList.remove("display-none", "filtered"));
        results.classList.remove('active');
        if(value){
            posts.forEach(post => post.classList.add("display-none"));
            filtered.forEach(h2 => h2.parentNode.classList.add("filtered"));
            results.classList.add('active');
            results.textContent = `Posts found: ${filtered.length}`;
        }
    }
    const input = <input type="text" onChange={filterByTitle} placeholder="Search for post.."/>;
    return input;
}

export default Searcher
