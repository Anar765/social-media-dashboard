import { useEffect, useState } from 'react';
import SocialMedia from './SocialMedia';
import Card from './Card';

const Main = ({ darkMode }) => {

    const [socialMedia, setSocialMedia] = useState([]);
    const [overview, setOverview] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/social-media.json');
                const json = await res.json();
                setSocialMedia(json);
            } catch (err) {
                console.error("Error loading JSON: ", err);
            }

        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/overview.json');
                const json = await res.json();
                setOverview(json);
            } catch(err) {
                console.err("Error loading JSON: ", err);
            }
        }

        fetchData();
    }, []);

    const socialMediaElements = socialMedia.map(data => {
        return (
            <SocialMedia
                key={data.id}
                className={data.className}
                src={data.img.src}
                alt={data.img.alt}
                username={data.userName}
                numberOfFol={data.numberOfFollowers}
                status={data.status.className}
                statusImg={data.status.img}
                statusAlt={data.status.alt}
                change={data.change}
                day={data.day}
            />
        )
    });

    const overviewElements = overview.map(data => {
        return (
            <Card 
                key={data.id}
                type={data.type}
                src={data.sm_img.src}
                alt={data.sm_img.alt}
                number={data.number}
                status={data.status.className}
                statusImg={data.status.src}
                statusAlt={data.status.alt}
                percentage={data.percentage}
            />
        )
    });

    return (
        <main className={darkMode ? "light" : ""}>
            <div className="sm-container">
                {socialMediaElements}
            </div>

            <h2>Overview - Today</h2>

            <div className="cards-container">
                {overviewElements}
            </div>
        </main>
    )
}

export default Main