import { Company } from "src/interfaces/company.interface"

export const system:Company = {
    name: 'system',
    background: '#003594',
    img: 'Logo_System',
    imgStyles: {width: '137.57480315px', background:'#003594'}
}
export const secureware:Company = {
    name: 'secureware',
    background: '#082033',
    img: 'Logo_Secureware',
    imgStyles: {width: '137.57480315px', background:'#082033', margin:'auto' }
}
export const companies:{[key:string] : any} = {
    system,
    secureware
}