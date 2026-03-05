import React, { ReactNode } from 'react'
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";

// Define the structure for the links inside the blog
interface BlogLink {
    name: string;
    url: string;
    icon: ReactNode; // This allows passing React components like <SiMedium />
}

// Define the structure for each blog post object
interface BlogItem {
    id: string;
    title: string;
    links: BlogLink[];
    image: string;
    description: string;
    target: "_blank" | "_self" | "_parent" | "_top"; // Specific string union for safety
}

const blogConfig: BlogItem[] = [

        {
        id: "blog-2",
        title: "Rotating 3D Cube Renderer in C (From Scratch)",
        links: [
            {
                name: "article",
                url: "https://medium.com/@abdulrahmanibrahim.ish/building-a-rotating-3d-cube-renderer-in-c-from-scratch-e2b889a89c2b",
                icon: <SiMedium />
            },
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/WireCube",
                icon: <AiFillGithub />
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*rZTtJ7-ito78fiFC.png",
        description: "A cube renderer in C",
        target: "_blank"
    },

    {
        id: "blog-1",
        title: "Decrypting the Caesar Cipher with Python: A Step-by-Step Guide",
        links: [
            {
                name: "article",
                url: "https://medium.com/@abdulrahmanibrahim.ish/decrypting-the-caesar-cipher-with-python-a-step-by-step-guide-994c847a8d31",
                icon: <SiMedium />
            },
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Decrypting-Caesar-Cipher-using-Brute-Force",
                icon: <AiFillGithub />
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*0DyPjsPqkQsSUtrN.png",
        description: "A Python-based Caesar Cipher decryption tool that brute-forces all possible shifts to automatically decrypt encrypted messages.",
        target: "_blank"
    },

    {
        id: "blog-0",
        title: "Building an AutoML Convolutional Neural Network with Pytorch",
        links: [
            {
                name: "article",
                url: "https://medium.com/@abdulrahmanibrahim.ish/building-an-automl-convolutional-neural-network-with-pytorch-d536ee353a10",
                icon: <SiMedium />
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*8D52-sn7KqK1E0bY.jpeg",
        description: "Learn how to calculate, implement and automate the dimensions of convolutional layers",
        target: "_blank"
    }
]

export default blogConfig;