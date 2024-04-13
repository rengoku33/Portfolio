import thriftshop from '../../utility/thriftshop.png';
import portfolio from '../../utility/portfolio.png';
import boutique from '../../utility/boutique.png';
import trident from '../../utility/trident.png';

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
        title: "Sudha's Boutique",
        imgUrl: boutique,
        website: 'https://sudhasboutique.in/',
        descn: 'Made a react application but the client insisted on being independent when managing the products and database. Hence migrated to a WordPress website for an easier backend UI'

    },
    {
        id: 4,
        title: "Trident",
        imgUrl: trident,
        docs: 'https://github.com/rengoku33/Project-Documentation/blob/main/Trident-Documentation.pdf',
        descn: '(UG SENIOR - CAPSTONE PROJECT): Built a full stack Java web application with multiple front-end design (Carousel, Animated Content, 3D View, Responsive Elements) and added necessary logic such as Authentication (Email/pass), Booking etc.,'
    },
]