"use client";   

import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import cheese_pic from "../images/cheese.jpg";
import photogragher_pic from "../images/photography.jpg";
import writing_pic from "../images/writing.jpg";



export default function CardContainer() {
    const [cheese, setCheese] = useState(cheese_pic);
    const [photogragher, setPhotogragher] = useState(photogragher_pic);
    const [writing, setWriting] = useState(writing_pic);
    const cards = [
        {
            image: cheese,
            title: "Promote your businesses",
            description: "Tell us more about it. What do you sell, how do you sell it?, Tips for the beginners, guiding lessons, tutorials, or even a book."
        },
        {
            image: photogragher,
            title: "Share your stories",
            description: "How do you look at life. What are your experiences, what are your thoughts, what are your feelings. Share your experience with the world."
        },
        {
            image: writing,
            title: "Let your creativity flow",
            description: "Always wanted to be a write? Here is your chance. Write your heart out, share your stories, poems, articles, let out that creative spirit."
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5 justify-items-center">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    className="rounded-xxl shadow-lg my-5 bg-slate-100" 
                    sx={{ width: 300, height: 400, display: "flex", flexDirection: "column", borderRadius: '16px' }}
                >
                    <CardMedia
                        component="img"
                        height={200}
                        width={300}
                        image={card.image.src}
                        alt={card.title}
                        style={{ objectFit: "cover", borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
                        className="object-cover h-52 w-full"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div" className="font-bold">
                            {card.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            className="text-left my-5"
                        >
                            {card.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
