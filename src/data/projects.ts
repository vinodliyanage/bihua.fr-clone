import { ProjectInterface } from "../models/ProjectInterface";

const projectData: ProjectInterface[] = [
        {
            "id": 0,
            "image": "https://images.prismic.io/studio-bihua/3816ca32-5836-444f-a265-46a650cc89c4_ozed-1.jpg?auto=compress,format&rect=0,0,1927,1092&w=720&h=408",
            "name": "Ozed",
            "year": "2018"
        },
        {
            "id": 1,
            "image": "https://images.prismic.io/studio-bihua/fce0494b-d5e6-44cc-a559-5f12467bafc5_ile+barbe+mini+%2816+sur+47%29.jpg?auto=compress,format&rect=0,0,9486,6324&w=720&h=480",
            "name": "Les Suites de l'Ile Barbe",
            "year": "2022"
        },
        {
            "id": 2,
            "image": "https://images.prismic.io/studio-bihua/540d93f2-381e-4b4b-974f-e419f20e83e1_pexels-thijs-van-der-weide-1094770.jpg?auto=compress,format&rect=0,0,6000,4000&w=720&h=480",
            "name": "Menuiserie Perret",
            "year": "2021"
        },
        {
            "id": 3,
            "image": "https://images.prismic.io/studio-bihua/0770b227-c65e-4e54-a63b-926a970a8b4b_trophyPlan+de+travail+1-100.jpg?auto=compress,format&rect=0,0,1920,1080&w=720&h=405",
            "name": "Valrhona",
            "year": "2021"
        },
        {
            "id": 4,
            "image": "https://images.prismic.io/studio-bihua/187f2b71-c4a7-4135-b3de-54d1ea0d72d8_cover-FFA.jpg?auto=compress,format&rect=0,0,720,480&w=720&h=480",
            "name": "FFAérostation",
            "year": "2021"
        },
        {
            "id": 5,
            "image": "https://images.prismic.io/studio-bihua/37125b31-8ee9-4339-b688-34ed6a3f82c8_Aromatic_Home.jpg?auto=compress,format&rect=0,0,2835,1890&w=720&h=480",
            "name": "Aromatic Restaurant",
            "year": "2021"
        },
        {
            "id": 6,
            "image": "https://images.prismic.io/studio-bihua/ac83a462-60d8-45cc-b602-4eaf43b61eef_Likeo.jpg?auto=compress,format&rect=0,0,5322,3548&w=720&h=480",
            "name": "Likeo",
            "year": "2020"
        },
        {
            "id": 7,
            "image": "https://images.prismic.io/studio-bihua/b6c1347d-0fba-4eae-9e96-7d8a8431a4e8_Amazon-web-services.jpg?auto=compress,format&rect=0,0,2560,1899&w=720&h=534",
            "name": "Amazon Web Services",
            "year": "2020"
        }
]


export default function getProjects():ProjectInterface[] {
    return projectData;
}
   