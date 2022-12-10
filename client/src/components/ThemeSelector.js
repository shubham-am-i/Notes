import { useTheme } from '../context/themeContext'

// styles
import Wrapper from '../styles/ThemeSelector'

const themeColors = ['lightgrey', '#ace0f9', '#249c6b', '#C4E0E5']
const modeIcon =
  'https://charitism-campaigns.s3.ap-south-1.amazonaws.com/767bfcc7-c294-433c-92d3-8659c334e67e.svg%2Bxml'

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Wrapper>
      <div className='theme-selector'>
        <div className='mode-toggle'>
          <img
            src={modeIcon}
            onClick={toggleMode}
            alt='dark/light toggle icon'
            style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
          />
        </div>

        <div className='theme-buttons'>
          {themeColors.map((color) => (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}
