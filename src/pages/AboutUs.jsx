import React from 'react';
import Values from '../components/props/Values';
import FAQ from '../components/FAQ';

const AboutUs = () => {
  return (
    <main>
      <section className="bg-[url('/images/Contact.png')] bg-cover bg-no-repeat bg-center px-10 h-50">
        <div className="items-center py-20 container">
          <h1 className="h2 text-white py-3 text-center">About Us</h1>
          <br />
          <p className="text-md md:text-lg lg:text-xl text-center font-poppins text-white">
            We believe in making reading accessible to everyone.
            <br />
            Our user-friendly platform helps you find and enjoy books
            <br />
            that inspire you.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row gap-5 container items-center py-10 basis-1/2">
          <div>
            <img src="/images/A-section1.png" alt="family" width={500} />
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col justify-start">
              <div><h4 className="h4">OUR PURPOSE</h4></div>
              <p className="base">
                Welcome to Book Library! At our core, we believe that access to knowledge and literature should be seamless and enjoyable for everyone. Our mission is to empower readers by providing an intuitive and enriching platform that facilitates book discovery, fosters connections, and sparks conversations about the world of literature.
              </p>
            </div>
            <br />
            <div className="flex flex-col justify-start">
              <div><h4 className="h4">WHO WE ARE</h4></div>
              <p className="base">
                We are a passionate team of book lovers, each with unique stories and backgrounds that bring diverse perspectives to our project. From avid readers to seasoned librarians and tech enthusiasts, we share a common goal: to make the literary experience accessible and engaging for all. Our love for books fuels our commitment to curate a collection that resonates with readers of every genre and interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-black p-10">
          <h4 className="h4 text-center text-s1 py-5">OUR VALUES</h4>
          <div className="flex flex-col md:flex-row gap-5">
            <Values title="Passion" body="Inspiring a love for reading." />
            <Values title="Accessible" body="User-friendly for all." />
            <Values title="Improvement" body="Continuously improving based on your feedback." />
            <Values title="Diverse" body="A collection for every reader." />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row gap-5 container items-center py-10 basis-1/2">
          <div className="basis-1/2">
            <div className="flex flex-col justify-start">
              <div><h4 className="h4">OUR PURPOSE</h4></div>
              <p className="base">
                Welcome to Book Library! At our core, we believe that access to knowledge and literature should be seamless and enjoyable for everyone. Our mission is to empower readers by providing an intuitive and enriching platform that facilitates book discovery, fosters connections, and sparks conversations about the world of literature.
              </p>
            </div>
            <br />
            <div className="flex flex-col justify-start">
              <div><h4 className="h4">WHO WE ARE</h4></div>
              <p className="base">
                We are a passionate team of book lovers, each with unique stories and backgrounds that bring diverse perspectives to our project. From avid readers to seasoned librarians and tech enthusiasts, we share a common goal: to make the literary experience accessible and engaging for all. Our love for books fuels our commitment to curate a collection that resonates with readers of every genre and interest.
              </p>
            </div>
          </div>
          <div>
            <img src="/images/A-section2.png" alt="family" width={500} />
          </div>
        </div>
      </section>

      <section className="bg-p3">
        <div className="container">
          <h4 className="h4 tex-t-s1 pt-8 text-center">WHAT OUR USERS SAY</h4>
          <p className="base my-5 text-center">
            From Families, book review groups, individuals, and many other
            categories of groups we offer the best book outlet in the field.
          </p>
        </div>

        <div className="container flex flex-row gap-5 grow py-10">
          <div className="bg-black p-5 size-64 rounded-xl my basis-1/3">
            <h5 className="text-s1 h5">Mr Cat Willy</h5>
            <p className="text-white pt-5 base">
              BookFindr has helped me find some out of this world books and its high end functionality has impacted hugely positive to my reading experience.
            </p>
            <br />
            <img src="/images/Stars.png" alt="5star" />
          </div>

          <div className="bg-black p-5 size-64 rounded-xl my basis-1/3">
            <h5 className="text-s1 h5">Mr Cat Willy</h5>
            <p className="text-white pt-5 base">
              BookFindr has helped me find some out of this world books and its high end functionality has impacted hugely positive to my reading experience.
            </p>
            <br />
            <img src="/images/Stars.png" alt="5star" />
          </div>

          <div className="bg-black p-5 size-64 rounded-xl my basis-1/3">
            <h5 className="text-s1 h5">Mr Cat Willy</h5>
            <p className="text-white pt-5 base">
              BookFindr has helped me find some out of this world books and its high end functionality has impacted hugely positive to my reading experience.
            </p>
            <br />
            <img src="/images/Stars.png" alt="5star" />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white py-10">
          <h4 className="h4 text-center">FAQs frequently asked questions</h4>
          <div className="container">
            <FAQ />
          </div>
        </div>
      </section>

      <section className="bg-[url('/images/CTA-bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="content-center place-items-center py-20 container">
          <h3 className="h3 text-center font-poppins text-white">Ready to start Reading</h3>
          <br />
          <p className="base text-center font-poppins text-white">Create a free Account and have the liberty to save, track, and comment on Books that Spark your Interests.</p>
          <br />
          <button className="bg-s1 py-1.5 px-5 rounded my-2 content-center">Browse Now</button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
