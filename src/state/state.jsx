import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "david",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "kinkiOne",
                def: [
                    {file: "kinkiTypeOneDefoult1"},
                    {file: "kinkiTypeOneDefoult2"},
                    {file: "kinkiTypeOneDefoult3"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                    {id: v1(), groupElements: 0, name: "ViewThree", file: "kinkiOneViewThree", check: false},
                    {id: v1(), groupElements: 1, name: "TypeOne", file: "kinkiOneTypeOne", check: true},
                    {id: v1(), groupElements: 1, name: "TypeTwo", file: "kinkiOneTypeTwo", check: false},
                    {id: v1(), groupElements: 1, name: "TypeThree", file: "kinkiOneTypeThree", check: false},
                ]
            },
        ]
    }
]