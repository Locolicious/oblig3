import sanityClient from '@sanity/client';

/*const options = {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_PROJECT_NAME,
}*/

const options = {
    projectId: 'o75d9mfm',
    dataset: 'production',
}

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production',
});

export default client;