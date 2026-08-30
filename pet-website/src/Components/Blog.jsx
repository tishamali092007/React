import "./Blog.css";

function Blog() {
  return (
    <section className="blog-section" id="blog">

      <div className="blog-header">

        <span className="blog-eyebrow">PET CARE BLOG</span>

        <h2>Latest News</h2>

      </div>

      <div className="blog-cards">

        <div className="blog-card">

          <div className="blog-image">
            <img src="/dog-1.jpg" alt="Puppy's First Grooming" />
            <div className="blog-date blue-date">
              <span className="day">10</span>
              <span className="month">JUL</span>
              <i className="fa-solid fa-paw"></i>
            </div>
          </div>

          <div className="blog-meta">
            <span><i className="fa-solid fa-user"></i> by BoldThemes</span>
            <span><i className="fa-solid fa-comment"></i> 2</span>
            <span><i className="fa-solid fa-folder"></i> Grooming</span>
          </div>

          <h3>Tips and tricks: Puppy's First Grooming</h3>

          <p>Collaboratively administrate empowered markets via plug-and-play networks....</p>

        </div>

        <div className="blog-card">

          <div className="blog-image">
            <img src="/cat-1.jpg" alt="Cat Health – Keeping Them Purr-fect" />
            <div className="blog-date green-date">
              <span className="day">10</span>
              <span className="month">JUL</span>
              <i className="fa-solid fa-paw"></i>
            </div>
          </div>

          <div className="blog-meta">
            <span><i className="fa-solid fa-user"></i> by BoldThemes</span>
            <span><i className="fa-solid fa-comment"></i> 3</span>
            <span><i className="fa-solid fa-folder"></i> Cats</span>
          </div>

          <h3>Cat Health – Keeping Them Purr-fect</h3>

          <p>Holistically pontificate installed base portals after maintainable products....</p>

        </div>

        <div className="blog-card featured">

          <div className="blog-image">
            <img src="/food-3.jpg" alt="14 Foods You Can Share with Your Dog" />
            <div className="blog-date yellow-date">
              <span className="day">10</span>
              <span className="month">JUL</span>
              <i className="fa-solid fa-paw"></i>
            </div>
          </div>

          <div className="blog-meta">
            <span><i className="fa-solid fa-user"></i> by BoldThemes</span>
            <span><i className="fa-solid fa-comment"></i> 1</span>
            <span><i className="fa-solid fa-folder"></i> Dogs</span>
          </div>

          <h3>14 Foods You Can Share with Your Dog</h3>

          <p>Collaboratively administrate turnkey channels whereas virtual e-tailers....</p>

        </div>

      </div>

    </section>
  );
}

export default Blog;