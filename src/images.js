import Rain from './Assets/noun_Rain_1518109.svg';
import bkgdBuilding from './Assets/bkgdBuilding.svg'
import midBuilding from './Assets/midBuilding.svg'
import foreBuilding from './Assets/foreBuilding.svg'

const images = [
    // Background Building Elements
    {
        iSRC: bkgdBuilding
    },
    {
        iSRC: midBuilding
    }, 
    {
        iSRC: foreBuilding
    },
    
    // Weather Icons
    {
        iCondition: 'Rain',
        iAlt: 'Rain Icon',
        iSrc: Rain
    },
    {
        iCondition: 'Cloud',
        iAlt: 'Cloud Icon',
        iSRC: 'Assets/noun_Cloud_1518102.svg'
    },
    {
        iCondition: 'Cloud w Wind',
        iAlt: 'Cloud with Wind Icon',
        iSRC: 'Assets/noun_Wind_1518101_Blue.svg'
    }

]

export default images;