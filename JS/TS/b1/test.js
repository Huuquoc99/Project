"use strict";
// danh rieng cho myInfor
// name: string;age:number;address: string;job:string;zalo: string;gender: string;major: string;
{
    const myInfor = {
        name: "Huu Quoc",
        age: 25,
        address: "Phu Tho",
        job: "student",
        gender: "trai",
        zalo: "zalo/huuquoc",
        major: "student"
    };
    console.log(myInfor);
}
// danh rieng cho myTeacher
{
    const myTeacher = [
        "Hoa",
        "Mai",
        "Quynh",
        "Thoa",
        "Yen",
        "Thuong",
        "Linh",
        "Lan"
    ];
    myTeacher.forEach((teacher, index) => {
        console.log(`[${index + 1}]${teacher}`);
    });
}
{
    const myString = "di hoc buon ngu vkl";
    console.log(myString);
}
