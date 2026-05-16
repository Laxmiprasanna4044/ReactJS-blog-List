import './index.css'
// Write your JS code here
const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="list-container">
      <div className="title-date-container">
        <h1>{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="separation" />
    </li>
  )
}
export default BlogItem
