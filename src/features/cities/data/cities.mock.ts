import { City } from "../Types/cityType"

export const cityNames = [
    "Banjarmasin",
    "Banjarbaru",
    "Surabaya"
]

export const cities : City[] = cityNames.map((name,i)=>{
    //const officeCount =  officeSpace.filter((space)=> space.location === name).length

    return {
        id : i + 1,
        name,
        officeCount : 1,
        image : `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug : name.toLowerCase().replace(/ /g,"-")
    }
})