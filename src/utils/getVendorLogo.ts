import alamoLogo from '../assets/vendor-logo/alamo.svg';
import avisLogo from '../assets/vendor-logo/avis.svg';
import hertzLogo from '../assets/vendor-logo/hertz.svg';

export const getVendorLogo = (vendorName: string): string => {
    switch (vendorName.toLowerCase()) {
        case 'alamo':
            return alamoLogo;
        case 'avis':
            return avisLogo;
        case 'hertz':
            return hertzLogo;
        default:
            return ''; // Returning a default logo or an empty string if no match is found
    }
};

