import PropTypes from 'prop-types'
export default function HeaderDivider(text1 , color2){

    return(
        <div style={{ direction: "auto" }}
        className={`text-secondary pb-8 font-bold text-3xl max-lg:text-xl max-md:text-lg divider `}>
        <p className={`text-${color2}`}>{text1}</p>
      </div>
    )
}
// HeaderDivider.defaultProps = {
//     ColorText: 'primary',
//     ColorDivider2: 'secondary'
// }
// HeaderDivider.prototypes = {
//     ColorText: PropTypes.string.isRequired,
//     ColorDivider2: PropTypes.string.isRequired
// }