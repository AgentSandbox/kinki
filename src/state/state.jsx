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
                    {file: "kinkiTypeOneDefoult3"},
                    {file: "kinkiTypeOneDefoult2"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ViewOne", file: "kinkiOneViewOne", check: true},
                    {id: v1(), groupElements: 0, name: "ViewTwo", file: "kinkiOneViewTwo", check: false},
                    {id: v1(), groupElements: 0, name: "ViewThree", file: "kinkiOneViewThree", check: false},
                    {id: v1(), groupElements: 1, name: "beam", file: "balka", check: true},
                    {id: v1(), groupElements: 1, name: "beamFalse", file: "balkaFalse", check: false},
                    {id: v1(), groupElements: 2, name: "bad", file: "bad", check: true},
                    {id: v1(), groupElements: 2, name: "badFalse", file: "badFalse", check: false},
                ]
            },
        ]
    }
]