import thriftshop from '../../utility/thriftshop.png';
import portfolio from '../../utility/portfolio.png';
import boutique from '../../utility/boutique.png';
import trident from '../../utility/trident.png';
import celest from '../../utility/celestial.png';
import witch from '../../utility/witcher.png';

export const projects = [
    {
        id: 1,
        title: "Thrift Shop",
        imgUrl: thriftshop,
        website: 'https://the-thrift-shop.netlify.app/',
        repo: 'https://github.com/rengoku33/ThriftShop',
        descn: '(React JS + SASS / NodeJS / Firebase) An Ecommerce app with Redux which leverages Reselect library to implement memoization and Redux-Persist to persist the current app state'
    },
    {
        id: 2,
        title: "Personal Portfolio",
        imgUrl: portfolio,
        website: 'https://kiran-vignesh-portfolio.netlify.app/',
        repo: 'https://github.com/rengoku33/Portfolio',
        descn: '(React JS + raw CSS / NodeJS) A portfolio app with highly responsive and interactive UI, Implemented by react modules (framer-motion, react-simple-animate, react-tsparticles) and CSS keyframes.'

    },
    {
        id: 3,
        title: "Celestial Cast",
        imgUrl: celest,
        website: 'https://celestial-cast.vercel.app/',
        repo: 'https://github.com/rengoku33/Celestial-Cast',
        descn: '(Next JS + TailwindCSS / AXIOS) A simple and yet a highly functional weather app with external REST API integration (OpenWeatherMap API) while leveraging SSG to make the initial API call at build time'

    },
    {
        id: 4,
        title: "Witcher's Vault",
        imgUrl: witch,
        repo: 'https://github.com/rengoku33/witcher-alchemy',
        docs: 'https://github.com/rengoku33/witcher-alchemy/blob/main/README.md',
        descn: '(Angular + Bootstrap / Spring Boot / MySQL) A stock management application which implements CRUD operations with a relational DB through a REST API built using Spring Data JPA and Hibernate'
    },
    {
        id: 5,
        title: "Trident",
        imgUrl: trident,
        docs: 'https://github.com/rengoku33/Project-Documentation/blob/main/Trident-Documentation.pdf',
        descn: '(HTML + CSS / Java / DerbyDB)(UG Senior - CAPSTONE Project): My first ever major project, A full stack Java web application which prioritizes front-end with 3D View and necessary logic such as Authentication and Booking'
    },
]