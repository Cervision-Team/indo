import React, { useState } from "react";
import "./BlogMain.scss";

import blogImg1 from "../../../../image/about-album-1.png";
import blogImg2 from "../../../../image/about-album-2.png";
import blogImg3 from "../../../../image/about-album-3.png";

const allPosts = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  image: [blogImg1, blogImg2, blogImg3][i % 3],
  title: "Fədakar və Təcrübəli Komanda",
  excerpt:
    "Komandamız əlaqəyiqildi olmaqla səmərəli komanda işinə inanır və hər zaman ən yaxşı nəticəni əldə etməyə çalışır.",
  date: "18 Yanvar 2025",
}));

const POSTS_PER_PAGE = 9;

function BlogMain() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = allPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="blog-main">
      <div className="container">
        <h2 className="blog-main__title">Ən çox oxunanlar</h2>

        <div className="blog-main__grid">
          {currentPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card__image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card__body">
                <h4 className="blog-card__title">{post.title}</h4>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">{post.date}</span>
                  <button className="blog-card__btn">Ətraflı</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="blog-main__pagination">
          {/* Sol ox */}
          <button
            className="pagination__arrow"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {/* Səhifə nömrələri */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination__page ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          {/* Sağ ox */}
          <button
            className="pagination__arrow"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogMain;
