import React from "react";

const ImageSection: React.FC = () => (
  <div className="image-container">
    <img
      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&auto=format"
      alt="Robot assistant"
      className="section-image"
    />
  </div>
);

const TextSection: React.FC = () => (
  <div className="text-container">
    <h2>Advanced AI Assistant</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>
);

const Page: React.FC = () => {
  return (
    <div className="page-content">
      <h1>RAG Chatbot</h1>

      <div className="content-sections">
        <section className="content-section">
          <ImageSection />
          <TextSection />
        </section>

        <section className="content-section">
          <TextSection />
          <ImageSection />
        </section>

        <section className="content-section">
          <ImageSection />
          <TextSection />
        </section>

        <section className="content-section">
          <TextSection />
          <ImageSection />
        </section>
      </div>
    </div>
  );
};

export default Page;
