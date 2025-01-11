import React from 'react'
import ReasonsCard from '../components/props/ReasonsCard'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <main>
        <section className="bg-[url('/images/Hero-image.png')] bg-cover bg-no-repeat bg-center px-10 h-50 " >
            <div className='content-center place-items-center py-20 container'>
                <h1 className='h1 text-center font-poppins text-white '>Discover Your Next Favorite Book</h1> <br />
                <p className='body-3 text-center font-poppins text-white '>Search, explore, and dive into the world of books with ease. <br />Find detailed information about any book you love.</p> <br />
                <input className=' content-center' type="text" /> <br />
                <button className='bg-s1 py-1.5 px-5 rounded my-2 content-center'>Browse Now</button>
            </div>
        </section>


        <section className='container'>
            <div className='py-5 h5 text-center'> 
                <p className=' h4 '><strong>Reasons</strong> for Choosing Us</p>
            </div>
            <div className='flex flex-row gap-5'>
                <ReasonsCard title='Search for Books' body='Find books by title, author, or keyword with a powerful search engne connected to the Open Library.' />
                <ReasonsCard title='View Detailed Information' body='Get in-depth details about books, including descriptions, authors, publication dates, and more' />
                <ReasonsCard title='Enjoy a Responsive UI' body='Experience a clean, modern design that works seamlessly across all your devices.' />
            </div>
        </section>

        <section className='bg-p4 my-10 py-10'>
            <div className='pb-5 h5 text-center'> 
                <p className=' h4 '>Explore Our <strong>Categories</strong></p>
            </div>

            <div className=' flex flex-row justify-center gap-5 '> 
                <div className=" shadow-xl rounded-xl flex justify-center items-center bg-white"> 
                    <div className=" rounded-xl py-5 px-5 flex flex-col items-center bg-white"> 
                        <div> 
                            <img className="content" src="/images/Fiction.png" alt="Fiction" /> 
                            <h6 className=" p-5 h5 text-center">Fiction</h6> 
                        </div> 
                        <div> 
                            <button className="bg-s1 py-1.5 px-5 rounded my-2 mt-10"> 
                                Explore Now 
                            </button> 
                        </div> 
                    </div> 
                </div>

                <div className=" shadow-xl rounded-xl flex justify-center items-center bg-white"> 
                    <div className=" rounded-xl py-5 px-5 flex flex-col items-center bg-white"> 
                        <div> 
                            <img className="content" src="/images/None-fiction.png" alt="Fiction" /> 
                            <h6 className=" p-5 h5 text-center">Non Fiction</h6> 
                        </div> 
                        <div> 
                            <button className="bg-s1 py-1.5 px-5 rounded my-2 mt-10"> 
                                Explore Now 
                            </button> 
                        </div> 
                    </div> 
                </div>

                <div className=" shadow-xl rounded-xl flex justify-center items-center bg-white"> 
                    <div className=" rounded-xl py-5 px-5 flex flex-col items-center bg-white"> 
                        <div> 
                            <img className="content" src="/images/History.png" alt="Fiction" /> 
                            <h6 className=" p-5 h5 text-center">History</h6> 
                        </div> 
                        <div> 
                            <button className="bg-s1 py-1.5 px-5 rounded my-2 mt-10"> 
                                Explore Now 
                            </button> 
                        </div> 
                    </div> 
                </div>

                <div className=" shadow-xl rounded-xl flex justify-center items-center bg-white"> 
                    <div className=" rounded-xl py-5 px-5 flex flex-col items-center bg-white"> 
                        <div> 
                            <img className="content" src="/images/Science.png" alt="Fiction" /> 
                            <h6 className=" p-5 h5 text-center">Science</h6> 
                        </div> 
                        <div> 
                            <button className="bg-s1 py-1.5 px-5 rounded my-2 mt-10"> 
                                Explore Now 
                            </button> 
                        </div> 
                    </div> 
            </div>
            </div>

        </section>

        <section >
            <div className='bg-[()]'>
                <div className='m-20 place-items-center '>
                    <div className='bg-black p-5 size-64 rounded-xl'>
                        <h5 className='text-s1 h5' >Mr Cat Willy</h5>
                        <p className='text-white pt-5 base'> BookFindr has helped me find some out of this world books and its high end functionality has impacted hugely positive to my reading Experience </p> <br />
                        <img src="images\Stars.png" alt="5star" />
                    </div>
                </div>
            </div>
        </section>
        
        <section>
            <div className='bg-p4  py-10 '>
                <div className='container'>
                    <FAQ />
                </div>
            </div>
        </section>

        <section className="bg-[url('/images/CTA bg.png')] bg-cover bg-no-repeat bg-center">
            <div className='bg-black'>
                <div className='content-center place-items-center py-20 container'>
                    <h3 className='h3 text-center font-poppins text-white '>Ready to start Reading</h3> <br />
                    <p className='base text-center font-poppins text-white '>Create a free Account and have the liberty to save, track and comment on Books that Spark your Interests.</p> <br />
                    <button className='bg-s1 py-1.5 px-5 rounded my-2 content-center'>Browse Now</button>
                </div>
            </div>
        </section> 

    </main>
  )
}

export default Home