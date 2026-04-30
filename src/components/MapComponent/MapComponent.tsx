import React from 'react'
import MapIcon from './MapIcon'


function MapComponent() {
    return (
        <div className='MapComponent_otr p-[4px] bg-light rounded-8'>
            <MapIcon IconClass="top-[20px] left-[65px]" />
            <MapIcon IconClass="top-[140px] left-[45%]" />
            <MapIcon IconClass="top-[308px] left-[40%]" />
            <MapIcon IconClass="bottom-[235px] left-[260px]" />
            <MapIcon IconClass="top-[328px] right-[102px]" />
            <MapIcon IconClass="bottom-[235px] right-[125px]" />
            <MapIcon IconClass="bottom-[150px] right-[40%]" />
            <iframe
                title="Google Maps"
                className='rounded-8'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.628115368994!2d-73.97529454736006!3d40.69033944113938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bbeaf88f7e9%3A0xdd6e1dbb5038d842!2sClinton%20Hill%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1694506195172!5m2!1sen!2s"
                width="100%"
                height="800px"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default MapComponent