import React from 'react';

const ImageCard = ({image}) => {

  const tags = image.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            <strong>Photo by {image.user}</strong>
          </div>
          <ul>
            <li>
              <strong>views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
      </div>
      <div className="px-6 py-4">
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-1 text-sm font-semibold text-gray-700 mr-1">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-1 text-sm font-semibold text-gray-700 mr-1">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-1 text-sm font-semibold text-gray-700 mr-1">
          #tag3
        </span> */}
        {
          tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-1 text-sm font-semibold text-gray-700 mr-1">
              #{tag}
            </span>
          ))
        }
      </div>
    </div>
    )
}

export default ImageCard;
