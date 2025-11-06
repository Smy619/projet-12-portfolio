import "../assets/styles/_profile.scss";

function About() {
  return (
    <section id="profile" className="profile-section section-block bg-soft">
      <div className="container" data-aos="fade-up">
        {/* ===== Title ===== */}
        <header className="block-title text-center">
          <h2>About</h2>
          <p>
            Front-end developer based in France, passionate about rebuilding and modernizing
            websites through structured architecture, clean design, and automated workflows.
          </p>
        </header>

        {/* ===== Story Content ===== */}
        <article
          className="profile-content text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            I love React for its structure — how every component connects logically to form
            a system that just makes sense. And I love JavaScript for the way it brings
            those systems to life, transforming static layouts into meaningful interactions.
          </p>

          <p>
            My favorite projects are often not new creations but rebuilds. I enjoy taking
            older websites, dissecting their architecture, and giving them a modern form —
            cleaner, faster, and more SEO-friendly. There's something deeply satisfying about
            turning disorganized code into a clear, modular structure that performs beautifully.
          </p>

          <p>
            Beyond rebuilding, I focus on automation — creating processes and configuration
            systems that make each project easier to maintain, scale, and evolve. I believe
            good development isn’t just about solving problems once, but about building systems
            that solve them again and again.
          </p>

          <p>
            For me, web development is a craft of clarity: rebuilding what exists, refining what
            works, and automating what comes next.
          </p>

          <p className="sous-text mt-3">
            <em>Rebuilding structure, refining systems, and automating what comes next.</em>
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
