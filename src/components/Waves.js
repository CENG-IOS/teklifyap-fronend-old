import React from 'react'
import Wave from "react-wavify";

export default function Waves() {
    return (
        <>
            <div className="position-absolute inventory-img w-100 toBackground">
                <Wave
                    fill="url('#gradient1')"
                    paused={false}
                    options={{
                        height: 1,
                        amplitude: 20,
                        speed: 0.2,
                        points: 3,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient1" gradientTransform="rotate(90)">
                            <stop offset="10%" stopColor="#FFB400" />
                            <stop offset="90%" stopColor="#FFB400" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>
            <div className="position-absolute inventory-img1 mt-5 w-100 toBackground">
                <Wave
                    fill="url('#gradient1')"
                    paused={false}
                    options={{
                        height: 1,
                        amplitude: 20,
                        speed: 0.3,
                        points: 3,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient1" gradientTransform="rotate(90)">
                            <stop offset="10%" stopColor="#FFB400" />
                            <stop offset="90%" stopColor="#FFB400" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>
            <div className="position-absolute inventory-img2 mt-4 w-100 toBackground">
                <Wave
                    fill="url('#gradient1')"
                    paused={false}
                    options={{
                        height: 1,
                        amplitude: 20,
                        speed: 0.4,
                        points: 3,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient1" gradientTransform="rotate(90)">
                            <stop offset="10%" stopColor="#FFB400" />
                            <stop offset="90%" stopColor="#FFB400" />
                        </linearGradient>
                    </defs>
                </Wave>
            </div>

        </>
    )
}
