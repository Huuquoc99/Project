const myMess: string = "Hom nay troi dep qua, chi muon di ngu thoi";
const Age: number = 25;
const isLive: boolean = false;
const product: {
    name: string;
    price: number;
    isAvailable: boolean;
    thumbnail: string;
} = {
    name: "Iphone 12",
    price: 2000,
    isAvailable: true,
    thumbnail: "http://zalo",
}

const myStudent: string[] = ["Hoa", "Mai", "Dao", "Yen", "Vu"];
// khai bao kieu arrytype
const myStudent2: Array<string> = ["Hoa", "Mai", "Dao", "Yen", "Vu"]
// khai bao kieu generic type

type educationType = {
    university: string;
    major: string;
    graduatedYear: number;
    GPA: number;
};

type projectType = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    time: string;
};

type cvType = {
    fullName: string;
    age: number;
    birthDay: string;
    address: string;
    phone: string;
    email: string;
    skills: string[];
    education: educationType;
    projects: projectType[];
};

const myCV: cvType = {
    fullName: "Nguyen Minh Hoang",
    age: 30,
    birthDay: "1992-11-11",
    address: "Ha Noi",
    phone: "0987654321",
    email: "hoangnm62@fpt.edu.vn",
    skills: ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"],
    education: {
        university: "FPT University",
        major: "Software Engineering",
        graduatedYear: 2015,
        GPA: 3.2,
    },
    projects: [
        {
            id: 1,
            name: "E-commerce website",
            description: "Build an e-commerce website with ReactJS and NodeJS",
            technologies: ["ReactJS", "NodeJS", "MongoDB"],
            time: "2021-2022",
        },
        {
            id: 2,
            name: "Music player website",
            description: "Build an e-commerce website with ReactJS and NodeJS",
            technologies: ["ReactJS", "NodeJS", "MongoDB"],
            time: "2021-2022",
        },
    ],
};