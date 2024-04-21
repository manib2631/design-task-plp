import './index.css'

function IdealForContent () {
    return(
        <div>
            <p className='select-content'>Unselect all</p>
            <div className="check-content">
                <img className="box" src='assets/Checkbox.svg' alt="ckeck-box"/>
                <p className='check-text'>Men</p>
            </div>
            <div className="check-content">
                <img className="box" src='assets/Checkbox.svg' alt="ckeck-box"/>
                <p className='check-text'>Women</p>
            </div>
            <div className="check-content">
                <img className="box" src='assets/Checkbox.svg' alt="ckeck-box"/>
                <p className='check-text'>Boy & Kids</p>
            </div>
        </div>
    )
}

export default IdealForContent;