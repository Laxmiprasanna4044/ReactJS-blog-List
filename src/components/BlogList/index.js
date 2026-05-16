import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list-container">
      {blogsList.map(eachList => (
        <BlogItem blogDetails={eachList} key={eachList.id} />
      ))}
    </ul>
  )
}
export default BlogList
