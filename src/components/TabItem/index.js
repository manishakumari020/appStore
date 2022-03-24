import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    setActiveTab(tabId)
  }

  const tabButtonClassName = isActive ? `tab-button active` : `tab-button`

  return (
    <li className="tab-list">
      <button
        type="button"
        className={tabButtonClassName}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
