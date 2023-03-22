export const blogposts = [
    {
        id: 'one',
        title: 'Two Forms of Pre-rendering',
        date: '2020-01-01',
        content: 'Next js has two forms of pre-rendering: Static Generation and Server-side Rendering. The Difference is in when it generates the HTML for a page. -- Static Generation is the pre-rendering method that generates the HTML at the build time. The pre-rendered HTML is then reused on each request. Server-side Rendering is the pre-rendering method that generates the HTML on each request. Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.'
    },
    {
        id:'two',
        title:  'When to Use Static Generation v.s. Server-side Rendering',
        date: '2020-01-02',
        content: 'We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request. You can use Static Generation for many types of pages, including: - Marketing pages - Blog posts - E-commerce product listings - Help and documentation You should ask yourself: "Can I pre-render this page **ahead** of a user'
    }
]