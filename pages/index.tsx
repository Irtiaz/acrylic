import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import axios from 'axios';

const Home: NextPage = () => {
  async function handleSubmit() {
    try {
      const response = await axios.post<{ success: boolean }>(
        'https://acrylic-backend.herokuapp.com/story_writing',
        {
          data: story,
        }
      );
      const responseData = await response.data;

      if (responseData.success) {
        console.log('Story sent successfully');
        alert('Story sent successfully');
      } else {
        console.error('Server sent failure');
        alert('Server sent failure');
      }
    } catch (err) {
      console.error(`The following error was caught\n${err}`);
      alert('Something went wrong');
    }
  }

  const [story, setStory] = useState('');

  return (
    <>
      <Head>
        <title>Acrylic</title>
        <meta name="description" content="Acrylic is a fest organizer site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <textarea
        onChange={(event) => setStory(event.target.value)}
        value={story}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Home;
