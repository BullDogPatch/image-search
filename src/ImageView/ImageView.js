import React from 'react';
import { Link } from 'react-router-dom';
import './ImageView.css';

const ImageView = props => {
  console.log(props.location.state.image);

  const { largeImageURL, tags, user, pageURL } = props.location.state.image;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <img
            src={largeImageURL}
            alt={tags}
            className="imageView__img img-responsive"
          />
          <div className="imageView__copyright">
            <p>&copy;</p>
          </div>
          <div className="imageView__text">
            <h4>
              Credit: <span>{user}</span>
            </h4>
            <h4>
              Download:{' '}
              <span>
                <a href={pageURL} target="_blank">
                  click to download
                </a>
              </span>
            </h4>
            <button className="active-recipe__button">
              <Link to="/">Go back to home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
