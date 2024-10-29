import React, { Fragment, useState } from 'react'

const CardAccordion = (props) => {
    const [active, setActive] = useState(false)
    return (
        <Fragment>
            <div className={"wrapper__accordion-card " + (active ? "active" : "")}>
                <div className="head d-flex justify-content-between align-items-center pointer" onClick={() => setActive(!active)}>
                    <h5 className='mb-0 bold font__size--20 text__20-1024'>
                        {props.title}
                    </h5>
                    <div className="arrow ml-3 position-relative">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="desc">
                    <p className='mb-0 medium font__size--16 text__16-1024 color__gray-5'>{props.desc}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default CardAccordion