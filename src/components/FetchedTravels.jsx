import { useState } from "react"

export default function FetchedTravels(props) {

    
    return (
        <>
        <div>
            <div className="grid">
                {props.travels``.map( travel => {
                    <div>
                        {travel.name}
                    </div>
                })}

            </div>
        </div>

        </>

    )
}