const getBio = () => {
    $.ajax({
      url: 'https://api.github.com/users/cynthiarich',
      method: 'GET'
    }).then(response => {
        const blog = $('<li>').text(response.blog);
        $('#bio').append(blog);
      })
    }
  
  getBio();