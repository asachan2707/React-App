import React from 'react';

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const posts = [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];
        return (
            <div>
                <PrintPost posts={posts} />
            </div>
        );
    }
}

class PrintPost extends React.Component {
    render() {
        const sidebar = (
            <ul>
        {this.props.posts.map(post=> <li key={post.id}>{post.title}</li>)}
            </ul>
        );
        const posts = this.props.posts.map(post =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
        return (
            <div>
                {sidebar}
                <hr />
                {posts}
            </div>
        );
    }
}

// PrintPost functionality as a class and function
// function PrintPost(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );
// }


export default Blog;