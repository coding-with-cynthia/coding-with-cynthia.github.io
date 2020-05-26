const getProjects = () => {
  $.ajax({
    url: 'https://api.github.com/orgs/coding-with-cynthia/repos?type=public&sort=updated&direction=desc',
    method: 'GET'
  }).then(response => {
    response.map((proj, index) => {
      console.log(`Project ${index} data`)
      console.log(proj)
      const colDiv = $('<div>').attr('class', 'col-sm-6 mb-3')
      const cardDiv = $('<div>').attr('class', 'card')
      const cardHead = $('<h5>').attr('class', 'card-header').text(proj.name)
      const cardBodyDiv = $('<div>').attr('class', 'card-body')
      const desc = $('<p>').attr('class', 'card-text').text(proj.description)
      const stars = $('<div>').attr('class', 'card-text').append($('<i>').attr('class', 'fas fa-star')).append($('<span>').attr('class', 'ml-2').text(proj.stargazers_count))
      const link = $('<a>').attr('href', proj.html_url).attr('class', 'btn btn-primary mt-2').text('View on GitHub')
      cardBodyDiv.append(desc)
      cardBodyDiv.append(stars)
      cardBodyDiv.append(link)
      cardDiv.append(cardHead)
      cardDiv.append(cardBodyDiv)
      colDiv.append(cardDiv)
      $('#projects').append(colDiv)
    })
  })
}

getProjects()
