import { Company } from "src/interfaces/company.interface"

export const system:Company = {
    name: 'system',
    background: '#1B5FAA',
    textColor:'#1B5FAA',
    img: 'Logo_System',
    imgStyles: {width: '137.57480315px', background:'#1B5FAA'}
}
export const digitalplatforms:Company = {
    name: 'Digital Platforms',
    background: '#005fb5',
    textColor:'#005fb5',
    img: 'Logo_DigitalPlatforms',
    imgStyles: {width: '137.57480315px',margin: 'auto'}
}
export const databooz:Company = {
    name: 'databooz',
    background: '#1B5FAA',
    textColor: '#1B5FAA',
    img: 'Logo_Databooz',
    imgStyles: { width: '137.57480315px',background:'#1B5FAA', margin: 'auto'}
}
export const secureware:Company = {
    name: 'secureware',
    background: '#082033',
    textColor: '#082033',
    img: 'Logo_Secureware',
    imgStyles: {width: '137.57480315px', background:'#082033', margin:'auto' }
}
export const companies:{[key:string] : any} = {
    system,
    secureware,
    databooz,
    digitalplatforms
}