import React from 'react'
import styles from '../../styles/about.module.css'
function para(props) {
  return (
    <div className='style'>
    <p className='text-slate-600 text-xl lg:text-2xl font-sans min-width: 100%;'>{props.children}</p>
    {/* <p className={styles.aboutPara}>{props.children}</p> */}
    </div>
  )
}

export default para