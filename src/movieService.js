import client from './client';

const movieFields =
`
    title
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{_id,title,"actor":actor->name}`);
    return data;
};

export default getMovies;