import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

const projectConfig = [

    {
        id: "project-6",
        title: "Chess Game",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Python-Chess",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Python-Chess/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Python-Chess/subscription",
                icon: <AiFillEye />,
            },
            {
                name: "docs",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Python-Chess",
                icon: <ImBook />,
            }
        ],
        image:"/images/chess.jpg",
        description: "Chess Game using Django",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "KU Books AI",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/KUBOOKSAI",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/KUBOOKSAI/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/KUBOOKSAI/subscription",
                icon: <AiFillEye />,
            },
            {
                name: "docs",
                url: "https://ku-books-recommendation.vercel.app/",
                icon: <ImBook />,
            }
        ],
        image:"/images/kubooks.png",
        description: "A book review and recommendation app",
        target: "_blank"
    },

    {
        id: "project-4",
        title: "Blood Pressure Estimation Model",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/BP-PROJECT",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/BP-PROJECT/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/BP-PROJECT/subscription",
                icon: <AiFillEye />
            }
        ],
        image: "/images/BP.png",
        description: "Project for real-time Blood pressure estimation using dataset from NHANES.",
        target: "_blank"
    },

    {
        id: "project-3",
        title: "3 Marbles Game",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game/subscription",
                icon: <AiFillEye />,
            }
            // {
            //     name: "docs",
            //     url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game",
            //     icon: <ImBook />,
            // }
        ],
        image: "/images/marble_game.png",
        description: "A popular childhood game in Ghana",
        target: "_blank"
    },

    {
        id: "project-2",
        title: "Ping Pong Game with VHDL and FPGA",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA/subscription",
                icon: <AiFillEye />
            }
            // {
            //     name: "docs",
            //     url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA",
            //     icon: <ImBook />,
            // }
        ],
        image: "/images/fpga.png",
        description: "Ping Pong Game with VHDL and FPGA",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/portfolio-website",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/portfolio-website/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/portfolio-website/subscription",
                icon: <AiFillEye />
            }
        ],
        image: "/images/portfolio.png",
        description: "Source code of my current portfolio web page.",
        target: "_blank"
    }
]

export default projectConfig
