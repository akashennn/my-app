import React from 'react';

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

type Props = {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[],
}

const IndexPage = ({ data }: Props) => {
  return (
    <>
      <ul>
        {data.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </>
  );
}

export default IndexPage;