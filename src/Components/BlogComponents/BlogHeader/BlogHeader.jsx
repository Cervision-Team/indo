import React from 'react'
import './BlogHeader.scss'
import bannerImage from '../../../image/About-header.png' 

function BlogHeader() {
  return (
    // Bu div ekranın kənarlarından 80px məsafə saxlayır
    <div className="blog-header">
      
      {/* Şəkil və yuvarlaq künclər bu div-dədir */}
      <div className="blog-header__banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        
        <div className="blog-header__overlay"></div>
        
        <div className="blog-header__content">
          <h1 className="blog-header__title">Ehtiyacı olanlarla qidanı paylaş</h1>
          <p className="blog-header__description">
           120 ölkədə 5 milyondan çox könüllünün güvənini qazanmış platforma
          </p>
        </div>

      </div>
    </div>
  )
}

export default BlogHeader
