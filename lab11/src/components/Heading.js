import React from 'react'

const surname = "Мирзаев";
const name = "Руслан";
const luckyNumber = 7;

export const Heading = () => {
    return (
        <div>
            <h1 style={{ color: "green" }}>Привет {surname} {name}!</h1>
            <p>Твое счастливое число {luckyNumber}</p>
        </div>
    )
}