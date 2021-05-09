const TslVideos = () => (
  <div>
    <h3 className="is-size-3">TheSmartLocal</h3>
    <h4 className="is-size-4 has-text-centered">videos</h4>
    <div className="has-text-centered py-4">
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/VWbJZ-PZJ5o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="columns">
      {[0, 1, 2, 3, 4].map(() => (
        <div className="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-2by1">
                <img
                  src="https://i.ytimg.com/vi/VWbJZ-PZJ5o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAkq-0doX4EpJeDHcZv8PxWpmgFbQ"
                  alt="placeholder"
                />
              </figure>
            </div>
            <div class="card-content pt-2">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">LONDON 2017</p>
                  <p class="subtitle is-6">459 views | 3 years ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default TslVideos;
