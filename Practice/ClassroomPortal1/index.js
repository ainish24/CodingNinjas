const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
//Create your function here with the name addBlog which takes a blog object as parameter
function addBlog(blog){
    const divPost = document.createElement('div');
    divPost.classList.add('blog-post');
    const divHeader = document.createElement('div')
    divHeader.classList.add('blog-header')
    const blogTitle = document.createElement('h2')
    blogTitle.classList.add('blog-title')
    blogTitle.innerHTML=blog.title
    const blogDate = document.createElement('p')
    blogDate.classList.add('blog-date')
    blogDate.innerHTML=blog.date
    const blogContent = document.createElement('p')
    blogContent.classList.add('blog-content')
    blogContent.innerHTML=blog.content
    divHeader.append(blogTitle, blogDate)
    divPost.append(divHeader, blogContent)
    const ulElements=document.getElementsByClassName('blog-list')
    const ulElement=ulElements[0]
    console.log(ulElement)
    ulElement.append(divPost)
}
addBlog(blogData[0])
addBlog(blogData[1])
addBlog(blogData[2])


//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh