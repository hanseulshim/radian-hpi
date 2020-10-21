import React from 'react'

interface Props {

}

export const Blog: React.FC<Props> = () => {
    return (
      <section className="container-fluid blog-container">
        <div className="row">
          <div className="col text-center">
            <h2>Read Our Blog</h2>
            <p>Stap up to date on the industry and the technology thats moving it forward.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <img src={'/assets/blog_section.png'} alt="blog-section" className='blog-section-image' />
          </div>
        </div>
      </section>
    );
}