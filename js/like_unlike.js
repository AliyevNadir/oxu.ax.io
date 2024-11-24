document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const unlikeBtn = document.getElementById('unlikeBtn');

    likeBtn.addEventListener('click', () => handleLike(likeBtn.dataset.id));
    unlikeBtn.addEventListener('click', () => handleUnlike(unlikeBtn.dataset.id));
  });

  function handleLike(id) {
    fetch(`/like/${id}/`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('likeBtn').innerText = `Like (${data.likes})`;
      });
  }

  function handleUnlike(id) {
    fetch(`/unlike/${id}/`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('unlikeBtn').innerText = `Unlike (${data.unlikes})`;
      });
  }