import banner from '../assets/Banner.png';

function Home() {
    return (
        <div className="bg-black">
            <section className="p-4 md:p-12 flex flex-col">
                <div className="flex flex-row justify-around h-screen">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="hover:animate-bounce icon icon-tabler icon-tabler-arrow-badge-down h-24 md:h-full align-middle"
                         width="200" height="200" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M17 13v-6l-5 4l-5 -4v6l5 4z"/>
                    </svg>
                </div>
                <div className="flex flex-col gap-8 md:gap-16 font-semibold">
                    <h1 data-aos="fade-up"
                        className="text-center text-white text-3xl md:text-6xl m-8 md:m-16 py-6 md:py-12">24 Hours of Innovation, Learning,</h1>
                    <h1 data-aos="fade-up" className="text-center text-white text-3xl md:text-6xl m-8 md:m-16 py-6 md:py-12"> Collaboration and
                        Creation...</h1>
                    <h1 data-aos="fade-up" className="text-center text-white text-3xl md:text-6xl m-8 md:m-16 py-6 md:py-12">We're Excited to
                        Present:</h1>
                </div>
            </section>
            <div data-aos="zoom-in" data-aos-duration="1000"
                 className="w-screen flex flex-col mb-24">
                <img src={banner} className="mt-12 md:mt-24"/>
                <a href="/about" className="flex flex-row justify-around">
                    <button className="hover:bg-red-400 bg-red-500 text-white px-4 md:px-8 py-2 md:py-4 text-xl md:text-3xl border-white border-4">Find out More</button>
                </a>
            </div>
        </div>
    );
}

export default Home;