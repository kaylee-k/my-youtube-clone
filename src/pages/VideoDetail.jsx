import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import ChannelPlaylist from '../components/ChannelPlaylist';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          title={title}
          type='text/html'
          width='100%'
          height='640'
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder='0'
          allowFullScreen
        />
        <div className='p-8 '>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap border-b-2 border-gray-700 pb-3'>
            {description ? description : 'No description available.'}
          </pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <ChannelPlaylist />
      </section>
    </section>
  );
}
