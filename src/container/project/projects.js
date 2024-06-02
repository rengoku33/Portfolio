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
        descn: 'A classic React application with Redux and Firebase which leverages Reselect library to implement memoization and Redux-Persist to persist the current app state'
    },
    {
        id: 2,
        title: "Personal Portfolio",
        imgUrl: portfolio,
        website: 'https://kiran-vignesh-portfolio.netlify.app/',
        repo: 'https://github.com/rengoku33/Portfolio',
        descn: 'A React web application with highly responsive and interactive UI, Implemented through various react modules (framer-motion, react-simple-animate, react-tsparticles) and CSS keyframes.'

    },
    {
        id: 3,
        title: "Celestial Cast",
        imgUrl: celest,
        website: 'https://celestial-cast.vercel.app/',
        repo: 'https://github.com/rengoku33/Celestial-Cast',
        descn: 'A simple and yet a highly functional Next JS app with external REST API integration (OpenWeatherMap API) while leveraging Static Site Generation to make the initial API call at build time'

    },
    {
        id: 4,
        title: "Sudha's Boutique",
        imgUrl: boutique,
        website: 'https://sudhasboutique.in/',
        descn: 'Another E-commerce app similar to Thrift Shop but this one has more focus over the frontend components unlike the other one'

    },
    {
        id: 5,
        title: "Trident",
        imgUrl: trident,
        docs: 'https://github.com/rengoku33/Project-Documentation/blob/main/Trident-Documentation.pdf',
        descn: '(UG Senior Year - CAPSTONE Project): My first ever official project, A full stack Java web application with high-quality front-end with 3D View and necessary logic such as Authentication and Booking'
    },
]