
const movie = {

    title: "Movie",

    name: "movie",

    type: "document",

    fields: [
      { title: "Title", name: "title", type: "string", },
      { title: "Actor", name: "actor", type: "reference",
        to: [{name: 'actor', type: "string"}]
      }
    ]

}

export default movie;