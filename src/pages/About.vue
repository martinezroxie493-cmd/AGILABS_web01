<template>
  <div class="about">
    <div class="page-header">
      <h1>About AGILABS</h1>
      <p>Pioneering AI Research and Innovation</p>
    </div>

    <div class="container">
      <section class="about-section">
        <h2>Our Mission</h2>
        <p>
          AGILABS is dedicated to advancing artificial intelligence research and fostering innovation
          in the field of machine learning, deep learning, and neural networks. We believe that AI
          has the potential to transform society and solve some of humanity's greatest challenges.
        </p>
      </section>

      <section class="about-section">
        <h2>Our Vision</h2>
        <p>
          To be a leading global research institute that develops cutting-edge AI technologies
          and trains the next generation of AI researchers and innovators.
        </p>
      </section>

      <section class="about-section">
        <h2>Core Values</h2>
        <div class="values-grid">
          <div class="value-item">
            <h3>Innovation</h3>
            <p>Pushing the boundaries of what's possible in AI</p>
          </div>
          <div class="value-item">
            <h3>Excellence</h3>
            <p>Maintaining the highest standards in research</p>
          </div>
          <div class="value-item">
            <h3>Collaboration</h3>
            <p>Working together with partners worldwide</p>
          </div>
          <div class="value-item">
            <h3>Impact</h3>
            <p>Creating positive change through AI</p>
          </div>
        </div>
      </section>

      <section class="about-section">
        <h2>Our Team</h2>
        <p>
          Our team consists of leading researchers, engineers, and innovators from around the world.
          We are committed to fostering a collaborative and inclusive environment where ideas can flourish.
        </p>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">👨‍💼</div>
            <h3>Dr. AI Research</h3>
            <p>Chief Research Officer</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👩‍💻</div>
            <h3>Jane Innovator</h3>
            <p>Lead AI Engineer</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👨‍🔬</div>
            <h3>Prof. Tech Pioneer</h3>
            <p>Research Director</p>
          </div>
          <div class="team-member">
            <div class="member-avatar">👩‍🏫</div>
            <h3>Dr. Education Expert</h3>
            <p>Education Lead</p>
          </div>
        </div>
      </section>

      <section class="about-section">
        <h2>Our Achievements</h2>
        <div class="achievements">
          <div class="achievement">
            <h3>50+</h3>
            <p>Research Publications</p>
          </div>
          <div class="achievement">
            <h3>10+</h3>
            <p>Patents Filed</p>
          </div>
          <div class="achievement">
            <h3>100+</h3>
            <p>AI Researchers Trained</p>
          </div>
          <div class="achievement">
            <h3>20+</h3>
            <p>Industry Partnerships</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    document.title = 'About Us - AGILABS'
  }
}
</script>

<style scoped>
.about {
  width: 100%;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.page-header p {
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.about-section {
  margin-bottom: 60px;
}

.about-section h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 3px solid #667eea;
  padding-bottom: 15px;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.value-item {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
}

.value-item h3 {
  color: #667eea;
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.team-member {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-avatar {
  font-size: 3rem;
  margin-bottom: 15px;
}

.team-member h3 {
  color: #333;
  margin-bottom: 5px;
}

.team-member p {
  color: #667eea;
  font-size: 0.9rem;
}

.achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.achievement {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.achievement h3 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.achievement p {
  color: white;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .about-section h2 {
    font-size: 1.8rem;
  }
}
</style>