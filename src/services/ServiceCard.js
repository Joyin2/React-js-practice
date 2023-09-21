import React from 'react'
import styles from "./ServiceCard.module.css"

const ServiceCard = ({icon, heading}) => {
  return (
    <div className={styles.bannerCard}>
    <img src={icon}/>
    <h3>{heading}</h3>
  </div>
  )
}

export default ServiceCard