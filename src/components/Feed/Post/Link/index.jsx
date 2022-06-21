import { useContext } from 'react';
import PostContext from '../../../../hooks/PostContext';
import { MdOutlineImageNotSupported } from 'react-icons/md';

export default function Link() {
  const { post } = useContext(PostContext);

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
    <a className='link' href={post.url} target='blank'>
      <div className='link__container'>
        <div className='link-info'>
          <div className='link-info__title'>{post.urlTitle}</div>
          <div className='link-info__description'>{post.urlDescription}</div>
          <div className='link-info__url'>{post.url}</div>
        </div>
        <div className='link-image'>
          {regex.test(post.urlPicture) ? (
            <img src={post.urlPicture} alt='link header' />
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
