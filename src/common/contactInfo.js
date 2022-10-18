import { EMAIL_ADDRESS_ID, PHONE_NUMBER_ID } from './constants'

export const contactInfo = [
    {
        icon: 'location_pin',
        key: 'address',
        value: 'Vancouver, BC, Canada',
    },
    {
        icon: 'mail',
        key: 'email',
        value: 'nilay@sondagar.com',
        id: EMAIL_ADDRESS_ID,
        copyable: true,
    },
    {
        icon: 'phone',
        key: 'phoneNumber',
        value: '(778) 677-1604',
        id: PHONE_NUMBER_ID,
        copyable: true,
    },
]
