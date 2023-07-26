import { Link } from 'react-router-dom'

const NewsItem  = (props) => {


    let {title , description , imageUrl , newsUrl , author , date} = props

    return (
      <div className='my-3'>
            <div className="card">
                <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <Link to={newsUrl} target='_black' className="btn btn-sm btn-primary">Read More</Link>
                </div>
            </div> 
      </div>
    )

}
 

export default NewsItem;