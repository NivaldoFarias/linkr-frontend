import { useContext } from 'react';
import { MdOutlineImageNotSupported } from 'react-icons/md';

import PostContext from './../../../../../hooks/PostContext';

export default function Link() {
  const {
    post: { url },
  } = useContext(PostContext);

  const regex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );

  return (
    <a className='link' href={url.url} target='blank'>
      <div className='link__container'>
        <div className='link-info'>
          <div className='link-info__title'>{url.title}</div>
          <div className='link-info__description'>{url.description}</div>
          <div className='link-info__url'>{url.url}</div>
        </div>
        <div className='link-image'>
          {regex.test(url.imageUrl) ? (
            <img src={url.imageUrl} alt='link header' />
          ) : (
            <>
              <MdOutlineImageNotSupported className='link-image__not-supported-icon' />
              <p className='link-image__not-supported-text'>Not supported</p>
            </>
          )}
        </div>
      </div>
    </a>
  );
}
