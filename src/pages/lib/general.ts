import logo from "../../assets/tm-logo.avif";
import hero from "../../assets/hero.jpg";
import about from "../../assets/tania-madahar.avif";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import banner from "../../assets/banner.jpg";


export const GENERAL = {
    brand: {
        name: 'Tania Madahar',
        email: 'contact@taniamadahar.com',
        phone: '+1 (951) 551-7672',
        logo: logo,
        logoAlt: 'Tania Madahar Logo',
        instagram: 'https://www.instagram.com/taniamadahar',
        tiktok: 'https://www.tiktok.com/@tania_madahar_designs',
    },
    hero: {
        imgUrl: hero, 
        headline: 'Elevate Your Style with Tania Madahar',
        subheadline: 'Where timeless Indian tradition meets modern California style — customized, trend-forward looks made just for you.',
        cta: {
            text: 'Book Consultation',
            url: 'https://book.heygoldie.com/taniamadahar/checkout',
        }
    },
    aboutHome: {
        text: 'At Tania Madahar, we believe that fashion is a form of self-expression. Our designer, Tania Madahar, brings a blend of classic elegance and modern trends to create timeless looks that reflect your individuality. With a keen eye for detail and a passion for style, Tania offers personalized consultations to help you curate a wardrobe that empowers and inspires.',        
    },
    about: {
        imgUrl: about,
        text: 'At Tania Madahar Designs, we believe that fashion is more than just clothing; it\'s a form of self-expression and a reflection of individuality. Our founder, Tania Madahar, brings a wealth of experience and a unique perspective to the world of fashion design.',
        imgAlt: 'Tania Madahar',
        text2: 'With a background in both fine arts and fashion, Tania\'s approach is deeply rooted in creativity and a keen understanding of aesthetics. Her philosophy centers on creating timeless pieces that not only look beautiful but also empower the wearer. Tania\'s passion for sustainable fashion practices is evident in her choice of materials and ethical production methods. She is committed to making fashion accessible and inclusive, offering personalized consultations to help clients discover their unique style and feel confident in their own skin.',
    },
    portfolio: [
        {
            imgUrl: portfolio1,
            imgAlt: 'Peach Bellini Lehnga'
        },
        {
            imgUrl: portfolio2,
            imgAlt: 'Olive Luxe Lehnga'
        },
        {
            imgUrl: portfolio3,
            imgAlt: 'Champagne Lehnga'
        }
    ],
    banner: {
        title: 'Book Your Consultation',
        text: 'Ready to embark on your style journey? Schedule a consultation with Tania Madahar and discover the perfect looks for every occasion.',
        buttonText: 'Book Consultation',
        buttonUrl: 'https://book.heygoldie.com/taniamadahar/checkout',
        imgUrl: banner,
    }
};
  