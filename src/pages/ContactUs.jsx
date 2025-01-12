import React from 'react';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';
import ReasonsCard from '../components/props/ReasonsCard';

const ContactUs = () => {
  return (
    <main>
      <section className="bg-[url('/images/Contact.png')] bg-cover bg-no-repeat bg-center px-10 h-50">
        <div className="items-center py-20 container">
          <h1 className="h2 text-white py-3 text-center">Contact Us</h1>
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

      <section className="container px-5 sm:px-10 md:px-15 lg:px-20">
        <div className="py-10 text-center">
          <h4 className="text-xl md:text-2xl lg:text-3xl text-black">We Want to Hear from You!</h4>
          <p className="text-sm md:text-base lg:text-lg text-slate-600">
            At Book Library, your voice matters. We value your feedback and
            insights, as they guide us in creating a better experience for all readers.
            Whether you have questions, suggestions, or concerns,
            please don’t hesitate to reach out—we're here to help!
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-black">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:p-10 justify-center">
          <div>
            <Newsletter />
          </div>
        </div>
      </section>

      <section className="bg-p4 py-10">
        <div className="py-10 text-center mx-5 md:mx-20 lg:mx-40">
          <h4 className="text-xl md:text-2xl lg:text-3xl text-black">Get in Touch</h4>
          <p className="text-sm md:text-base lg:text-lg text-slate-600">
            We encourage open communication and are committed to addressing your inquiries promptly.
            You can contact us through multiple channels:
          </p>
          <div className="py-10 md:py-20 flex flex-col md:flex-row gap-5 md:gap-10 justify-center">
            <ReasonsCard title="Email" body="email@example.com" />
            <ReasonsCard title="Cell" body="+12 34 567 8910" />
            <ReasonsCard title="Address" body="27 Anywhere, Location St" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
