import React, { useEffect } from 'react';
import { Posts } from '../types';
import PostsGroup from '../components/Posts';
import { setPosts } from '../redux/slices/appSlice';
import { useDispatch } from 'react-redux';

export async function getServerSideProps() {
  // Fetch data from external API
  const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const postsData = await postsResponse.json()

  // Pass data to the page via props
  return { props: { posts: postsData } }
}

type Props = {
  posts: Posts;
}

const IndexPage = ({ posts }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosts(posts))
  })

  return (
    <>
      <PostsGroup />
    </>
  );
}

export default IndexPage;