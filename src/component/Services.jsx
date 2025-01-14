import React from 'react';

const Services = () => {
    const services = [
        { name: 'Service 1', description: 'Description for Service 1' },
        { name: 'Service 2', description: 'Description for Service 2' },
        { name: 'Service 3', description: 'Description for Service 3' },
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Available Services</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {services.map((service, index) => (
                    <li key={index} style={{ margin: '20px 0' }}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;