import thriftshop from '../../utility/thriftshop.png';
import portfolio from '../../utility/portfolio.png';
import boutique from '../../utility/boutique.png';
import trident from '../../utility/trident.png';
import celest from '../../utility/celestial.png';

export const projects = [
    {
        id: 1,
        title: "Thrift Shop",
        imgUrl: thriftshop,
        website: 'https://the-thrift-shop.netlify.app/',
        repo: 'https://github.com/rengoku33/ThriftShop',
        descn: 'A React web application with firestore database (Firebase). Implemented Authentication with OAuth (Google) and user/pass (inbuilt hash function for pass), products stored at database, used react hooks (useState, useContext, useEffect)'
    },
    {
        id: 2,
        title: "Personal Portfolio",
        imgUrl: portfolio,
        website: 'https://kiran-vignesh-portfolio.netlify.app/',
        repo: 'https://github.com/rengoku33/Portfolio',
        descn: 'A React web application with highly responsive and interactive UI, Implemented through various react modules (framer-motion, react-simple-animate, react-tsparticles, timeline-component) and CSS keyframes. Route handling using react-router-dom and deployed using netlify.'

    },
    {
        id: 3,
        title: "Celestial Cast",
        imgUrl: celest,
        website: 'https://celestial-cast.vercel.app/',
        repo: 'https://github.com/rengoku33/Celestial-Cast',
        descn: 'A Next JS (React) app which leverages open-weather-API using AXIOS to make the API call. Once the GET request returns a succesful JSON object, it is de-structured and processed in weather component and styled using tailwind css. A simple but highly effective application.'

    },
    {
        id: 4,
        title: "Sudha's Boutique",
        imgUrl: boutique,
        website: 'https://sudhasboutique.in/',
        descn: '(Commercial Project) Initially built a react application but the client insisted on being independent when managing the products and database. Hence migrated to a WordPress website for an easier backend UI for non devs'

    },
    {
        id: 5,
        title: "Trident",
        imgUrl: trident,
        docs: 'https://github.com/rengoku33/Project-Documentation/blob/main/Trident-Documentation.pdf',
        descn: '(UG Senior Year - CAPSTONE Project): Built a full stack Java web application with multiple front-end design (Carousel, Animated Content, 3D View, Responsive Elements) and added necessary logic such as Authentication (Email/pass), Booking etc.,'
    },
]